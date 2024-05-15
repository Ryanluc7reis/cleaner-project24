import styled from 'styled-components'
import { useState, useContext } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { PopUpContext } from '../../context/useContextPopUp'

import Input from '../form/Input'
import Button from '../form/Button'

const Form = styled.form`
  display: grid;
  grid-template-columns: 250px;
  flex-direction: column;
  gap: 8px;
`
const InputAlt = styled(Input)`
  width: 270px;
  padding: 7px;
  background: transparent;
  border: none;
`
const Barra = styled.div`
  height: 1px;
  width: 85%;
  background-color: #2a2af3d3;
`
const ButtonAlt = styled(Button)`
  height: 45px;
  width: 170px;
  margin-top: 15px;
  margin-left: 25px;
`
const FlexCont = styled.div`
  display: flex;
  flex-direction: column;
`
const Label = styled.h3`
  color: #8080809d;
  padding-top: 5px;
`
export default function EditCard({
  id,
  name,
  price,
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
  const [popUpMessage, setPopUpMessage] = useContext(PopUpContext)
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
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const handleFormSaveEdit = async () => {
    setLoading(true)

    const config = {
      headers: {
        [AUTH_NAME]: token
      }
    }
    try {
      const response = await axios.patch(`http://localhost:3333/cleaner/editCard`, formData, config)
      if (response.status === 200) {
        onSave()
        setPopUpMessage(true)
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
      <FlexCont>
        <Label>Name</Label>
        <InputAlt
          name="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <Barra />
      </FlexCont>
      <FlexCont>
        <Label>Price</Label>
        <InputAlt
          name="price"
          value={formData.price}
          onChange={(e) => handleChange('price', e.target.value)}
        />
        <Barra />
      </FlexCont>
      <FlexCont>
        <Label>Amount of cleaning</Label>
        <InputAlt
          name="amountCleaning"
          value={formData.amountCleaning}
          onChange={(e) => handleChange('amountCleaning', e.target.value)}
        />
        <Barra />
      </FlexCont>
      <FlexCont>
        <Label>Experience</Label>
        <InputAlt
          name="experience"
          value={formData.experience}
          onChange={(e) => handleChange('experience', e.target.value)}
        />
        <Barra />
      </FlexCont>
      <FlexCont>
        <Label>Region</Label>
        <InputAlt
          name="region"
          value={formData.region}
          onChange={(e) => handleChange('region', e.target.value)}
        />
        <Barra />
      </FlexCont>

      <ButtonAlt loading={loading} type="submit">
        Save changes
      </ButtonAlt>
    </Form>
  )
}
