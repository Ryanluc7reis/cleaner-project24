import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { PopUpContext } from '../../context/useContextPopUp'

import Input from '../form/Input'
import Button from '../form/Button'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000000c1;
  position: fixed;
  z-index: 102;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Form = styled.form`
  width: 360px;
  height: 220px;
  border-radius: 10px;
  background: #3030f0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 13px;
`
export default function EditAddress({
  id,
  fullName,
  user,
  email,
  password,
  address,
  number,
  onSave,
  ...props
}) {
  const { handleSubmit } = useForm({
    mode: 'all'
  })
  const [loading, setLoading] = useState(false)
  const [popUpMessage, setPopUpMessage] = useContext(PopUpContext)
  const [formData, setFormData] = useState({
    id: id,
    fullName: fullName,
    user: user,
    email: email,
    password: password,
    address: address,
    number: number
  })
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME

  const handleFormSaveEdit = async () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    const config = {
      headers: {
        [AUTH_NAME]: token
      }
    }
    try {
      const response = await axios.patch(`http://localhost:3333/user/editUser`, formData, config)
      if (response.status === 200) {
        onSave()
        setPopUpMessage(true)
      }
    } catch (err) {
      console.error(err.message)
    } finally {
      setLoading(false)

      props.onButtonClose()
    }
  }

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  const handleClick = (event) => {
    if (!event.target.closest('form')) {
      props.onClose()
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setPopUpMessage(false)
    }, 4000)
  }, [popUpMessage])
  return (
    <Container onClick={handleClick}>
      <Form onSubmit={handleSubmit(handleFormSaveEdit)} onClick={(e) => e.stopPropagation()}>
        <Input
          colorlabel
          label="Enter your new address:"
          name="address"
          value={formData.address}
          onChange={(e) => handleChange('address', e.target.value)}
        />
        <Button loading={loading} type="submit">
          Save Change
        </Button>
      </Form>
    </Container>
  )
}
