import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import Button from '../form/Button'
import Selecter from '../form/Selecter'
import Textarea from '../form/Textarea'

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 45px;
  justify-content: space-around;
`
const Label = styled.h2`
  color: #8080809d;
  padding: 7px;
`
const FlexInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
`
export default function EditAbout({
  id,
  name,
  price,
  rating,
  amountCleaning,
  experience,
  region,
  about,
  cleaning,
  cleaning2,
  cleaning3,
  onSave
}) {
  const { handleSubmit } = useForm({
    mode: 'all'
  })

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    id: id,
    name: name,
    price: price,
    amountCleaning: amountCleaning,
    experience: experience,
    region: region,
    about: about,
    cleaning: cleaning,
    cleaning2: cleaning2,
    cleaning3: cleaning3
  })

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const handleFormSaveEdit = async () => {
    setLoading(true)

    const config = {
      headers: {
        authorization: token
      }
    }
    try {
      const response = await axios.patch(`http://localhost:3333/cleaner/editCard`, formData, config)
      if (response.status === 200) {
        onSave()
      }
    } catch (err) {
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSaveEdit)}>
      <FlexInputs>
        <Label>Talk about cleaner</Label>
        <Textarea
          name="about"
          value={formData.about}
          onChange={(e) => handleChange('about', e.target.value)}
        />
      </FlexInputs>

      <FlexInputs>
        <Label>Type of cleaning</Label>
        <Selecter
          cleaning={cleaning}
          name="cleaning"
          onChange={(e) => handleChange('cleaning', e.target.value)}
          value={formData.cleaning}
          typeCleaning
        />
        <Label>Type of cleaning2</Label>
        <Selecter
          cleaning2={cleaning2}
          onChange={(e) => handleChange('cleaning2', e.target.value)}
          name="cleaning2"
          value={formData.cleaning2}
          typeCleaning
        />
        <Label>Type of cleaning 3</Label>
        <Selecter
          cleaning3={cleaning3}
          onChange={(e) => handleChange('cleaning3', e.target.value)}
          name="cleaning3"
          value={formData.cleaning3}
          typeCleaning
        />

        <Button loading={loading} type="submit">
          {'Save changes'}
        </Button>
      </FlexInputs>
    </Form>
  )
}
