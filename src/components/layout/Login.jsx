import styled from 'styled-components'
import { useState, useContext } from 'react'
import axios from 'axios'

import Input from '../form/Input'
import Button from '../form/Button'
import { UserContext } from '../../context/useContext'

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background: #000000c1;
  position: fixed;
  z-index: 104;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3e3188;
  border-radius: 8px;

  @media (max-width: 450px) {
    width: 310px;
    height: 390px;
  }
  @media (max-width: 375px) {
    width: 325px;
    height: 400px;
  }
  @media (max-width: 350px) {
    width: 280px;
  }
`
const FormAlt = styled(Form)`
  width: 410px;
  height: 490px;
`

const SignYourAcc = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 25px;
  color: white;
`
const SignYourAccAlt = styled(SignYourAcc)`
  font-size: 26px;
`
const ButtonAlt = styled(Button)`
  margin-top: 35px;
  width: 240px;
  box-shadow: 2px 2px 2px #5176da, -2px -2px 2px #5176da;
  @media (max-width: 430px) {
    font-size: 16px;
  }
`
const ButtonAlt1 = styled(ButtonAlt)`
  font-size: 22px;
`
const EsqueceuAsenha = styled.p`
  font-size: 15px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  text-decoration: underline;
  :hover {
    color: #0069fc;
  }
  transition: 0.5s;
`
const EsqueceuAsenhaAlt = styled(EsqueceuAsenha)`
  font-size: 20px;
`
const InputAlt = styled(Input)`
  box-shadow: 2px 2px 2px #5176da, -2px -2px 2px #5176da;
  border-color: #5176da;
  font-size: 12px;
  border: ${(props) =>
    props.error && props.error.length > 0 && `2px solid ${props.theme.colors.error}`};
  @media (max-width: 430px) {
    font-size: 16px;
  }
`
const InputAlt1 = styled(InputAlt)`
  font-size: 22px;
  padding: 20px;
  width: 290px;
`
const ErrorLabel = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-weight: bold;
  font-size: 13px;
`

export default function LoginForm({ type1, ...props }) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    userOrEmail: '',
    password: ''
  })
  const [error, setError] = useState({})
  const [userData, setUserData] = useContext(UserContext)
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post(
        `https://cleaner-project-be.vercel.app/user/login`,
        formData
      )
      const { token } = response.data
      localStorage.setItem('token', token)
      if (response.status === 200) {
        try {
          const tokenCurrent = localStorage.getItem('token')
          const response = await axios.get(
            'https://cleaner-project-be.vercel.app/user/verify-session',
            {
              headers: {
                [AUTH_NAME]: tokenCurrent
              }
            }
          )
          setUserData(response.data)
        } catch (error) {
          console.error('Erro ao verificar sessão:', error)
          setUserData(false)
        }
      }
    } catch (err) {
      if (err.response && err.response.data === 'password incorrect') {
        setError({ ...error, password: 'password incorrect' })
      } else if (err.response && err.response.data === 'not found') {
        setError({ ...error, userOrEmail: 'Username or e-mail not found' })
      } else {
        console.log('Erro desconhecido:', error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name) {
      const isValidValue = [!value]
      setError((prevErrors) => ({
        ...prevErrors,
        [name]: isValidValue === true && null
      }))
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleClick = (event) => {
    if (!event.target.closest('form')) {
      props.onClose()
    }
  }

  return (
    <>
      {type1 ? (
        <Container onClick={handleClick}>
          <Form onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
            <SignYourAcc>Sign in to your account</SignYourAcc>
            <InputAlt
              colorlabel
              label="E-mail or username"
              placeholder="E-mail  or username"
              name="userOrEmail"
              value={formData.userOrEmail}
              onChange={handleChange}
              error={error.userOrEmail}
              required
            />
            {error.userOrEmail && <ErrorLabel>{error.userOrEmail}</ErrorLabel>}
            <InputAlt
              colorlabel
              label="Password"
              placeholder="Password"
              password
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={error.password}
              required
            />
            {error.password && <ErrorLabel>{error.password}</ErrorLabel>}
            <ButtonAlt loading={loading} type="submit">
              Lets´go
            </ButtonAlt>
            <EsqueceuAsenha>Forgot you password ?</EsqueceuAsenha>
          </Form>
        </Container>
      ) : (
        <Container onClick={handleClick}>
          <FormAlt onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
            <SignYourAccAlt>Sign in to your account</SignYourAccAlt>
            <InputAlt1
              colorlabel
              type1
              label="E-mail or username"
              placeholder="E-mail  or username"
              name="userOrEmail"
              value={formData.userOrEmail}
              onChange={handleChange}
              error={error.userOrEmail}
              required
            />
            {error.userOrEmail && <ErrorLabel>{error.userOrEmail}</ErrorLabel>}
            <InputAlt1
              colorlabel
              type1
              label="Password"
              placeholder="Password"
              password
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={error.password}
              required
            />
            {error.password && <ErrorLabel>{error.password}</ErrorLabel>}
            <ButtonAlt1 loading={loading} type="submit">
              Lets´go
            </ButtonAlt1>
            <EsqueceuAsenhaAlt>Forgot you password ?</EsqueceuAsenhaAlt>
          </FormAlt>
        </Container>
      )}
    </>
  )
}
