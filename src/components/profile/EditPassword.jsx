import styled from 'styled-components'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import Input from '../form/Input'
import Button from '../form/Button'

const Container = styled.div`
  width: 100%;
  height: 360px;
  background-color: #fff;
  border-radius: 15px;
`

const Form = styled.form`
  display: grid;
  justify-content: space-around;
  grid-template-columns: 540px;
  margin-top: 20px;
`

const InputAlt = styled(Input)`
  width: 270px;
  padding: 7px;
  background: transparent;
  border: ${(props) => (props.error ? '2px solid red' : 'none')};
`

const ButtonAlt = styled(Button)`
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
  width: 60%;
  background-color: #2a2af3d3;
`

const FlexButtons = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  margin-top: 35px;
`

const FlexInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-weight: bold;
  font-size: 13px;
`
export default function EditPassword({
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

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [currentPassword, setCurrentPassword] = useState({
    password: ''
  })
  const [checkError, setCheckError] = useState(false)
  const [checkErrorForm, setCheckErrorForm] = useState(false)

  const handleForm = async () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

    try {
      const verifyPasswordResponse = await axios.post(
        `http://localhost:3333/user/verify-password`,
        { password: currentPassword.password },
        {
          headers: {
            authorization: token
          }
        }
      )

      if (verifyPasswordResponse.status === 200) {
        const editUserResponse = await axios.patch(
          `http://localhost:3333/user/editUser`,
          {
            id: id,
            fullName: fullName,
            user: user,
            email: email,
            password: confirmPassword,
            address: address,
            number: number
          },
          {
            headers: {
              authorization: token
            }
          }
        )

        if (editUserResponse.status === 200) {
          onSave()
          alert('Perfil editado com sucesso')
        }
      }
    } catch (err) {
      if (err.response && err.response.data === 'password incorrect') {
        setCheckErrorForm(true)
      }
      console.error(err.message)
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target

    setCurrentPassword({
      ...currentPassword,
      [name]: value
    })
    if (value) {
      setCheckErrorForm(false)
    }
  }

  const handleConfirmChange = (e) => {
    const value = e.target.value
    setConfirmPassword(value)

    if (value === newPassword) {
      setCheckError(false)
    } else {
      setCheckError(true)
    }
  }

  const handlNewChange = (e) => {
    setNewPassword(e.target.value)
  }

  const handleButton = () => {
    props.onButton()
  }

  return (
    <Container {...props}>
      <Title>Account Details</Title>
      <Form onSubmit={handleSubmit(handleForm)}>
        <ContInput>
          <Label>Enter your current password</Label>
          <FlexInput>
            <InputAlt
              type="password"
              error={checkErrorForm}
              name="password"
              value={currentPassword.password}
              onChange={handleChange}
            />
            {checkErrorForm && <img src="/erro.png" alt="error" width="25px" height="25px" />}
          </FlexInput>

          {checkErrorForm && <ErrorMessage>Senha atual incorreta</ErrorMessage>}
          <Barra />
        </ContInput>
        <ContInput>
          <Label>Enter your new password</Label>
          <InputAlt
            type="password"
            value={newPassword}
            name="newPassword"
            onChange={handlNewChange}
          />
          <Barra />
        </ContInput>
        <ContInput>
          <Label>Confirm your new password</Label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InputAlt
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmChange}
            />
            {checkError ? (
              <img src="/erro.png" alt="error" width="25px" height="25px" />
            ) : (
              <img src="/check.png" alt="check" width="35px" height="35px" />
            )}
          </div>

          <Barra />
        </ContInput>
        <FlexButtons>
          <ButtonAlt type="submit">Save Changes</ButtonAlt>
          <ButtonAlt onClick={handleButton}>Edit others</ButtonAlt>
        </FlexButtons>
      </Form>
    </Container>
  )
}
