import styled from 'styled-components'
import { useState, useContext } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { PopUpContext } from '../../context/useContextPopUp'

import Button from '../form/Button'
import Input from '../form/Input'

const Container = styled.div`
  width: 100%;
  height: 360px;
  background-color: #fff;
  border-radius: 15px;
`

const Form = styled.form`
  display: grid;
  width: 100%;
  height: 83%;
  grid-template-columns: 290px 250px;
  justify-content: space-around;
  margin-top: 20px;
`

const InputAlt = styled(Input)`
  width: 270px;
  padding: 7px;
  background: transparent;
  border: ${(props) => (props.error ? '2px solid red' : 'none')};
`

const EditPasswordButton = styled(Button)`
  height: 45px;
  width: 180px;
`

const SaveChangesButton = styled(Button)`
  height: 45px;
  width: 180px;
`

const Title = styled.h2`
  color: #a7a7a7;
  padding: 7px;
`
const Label = styled.h3`
  color: #a7a7a7;
  padding: 7px;
`

const ContInput = styled.div`
  display: flex;
  flex-direction: column;
`

const Barra = styled.div`
  height: 1px;
  width: 90%;
  background-color: #2a2af3d3;
`

const FlexButtons = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: 400px 200px;
`

export default function EditUserProfile({
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
    }
  }

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleButton = () => {
    props.onHandleButton()
  }

  return (
    <Container {...props}>
      <Title>Account Details</Title>
      <Form onSubmit={handleSubmit(handleFormSaveEdit)}>
        <ContInput>
          <Label>Fullname</Label>
          <InputAlt
            name="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
          />
          <Barra />
        </ContInput>
        <ContInput>
          <Label>Username</Label>
          <InputAlt
            name="user"
            value={formData.user}
            onChange={(e) => handleChange('user', e.target.value)}
          />
          <Barra />
        </ContInput>
        <ContInput>
          <Label>E-mail</Label>
          <InputAlt
            name="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          <Barra />
        </ContInput>
        <ContInput>
          <Label>Address</Label>
          <InputAlt
            name="address"
            value={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
          />
          <Barra />
        </ContInput>
        <ContInput>
          <Label>Number</Label>
          <InputAlt
            name="number"
            value={formData.number}
            onChange={(e) => handleChange('number', e.target.value)}
          />
          <Barra />
          <FlexButtons>
            <SaveChangesButton type="submit">Save Changes</SaveChangesButton>
            <EditPasswordButton onClick={handleButton}>Edit password</EditPasswordButton>
          </FlexButtons>
        </ContInput>
      </Form>
    </Container>
  )
}
