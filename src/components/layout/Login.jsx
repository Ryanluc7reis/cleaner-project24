import styled from 'styled-components'
import Input from '../form/Input'
import Button from '../form/Button'
import Link from 'next/link'
import { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../context/useContext'

const Form = styled.form`
  width: 330px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #d4d3d3;
  border-radius: 8px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
  @media (max-width: 450px) {
    width: 290px;
    height: 380px;
  }
`

const SignYourAcc = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 25px;
`
const ButtonAlt = styled(Button)`
  margin-top: 35px;
  width: 240px;
  box-shadow: 2px 2px 2px #5176da, -2px -2px 2px #5176da;
  @media (max-width: 430px) {
    font-size: 16px;
  }
`
const EsqueceuAsenha = styled.p`
  font-size: 15px;
  margin-top: 10px;
  :hover {
    color: #0069fc;
  }
  transition: 0.5s;
`
const InputAlt = styled(Input)`
  box-shadow: 2px 2px 2px #5176da, -2px -2px 2px #5176da;
  border-color: #5176da;
  border: ${(props) =>
    props.error && props.error.length > 0 && `2px solid ${props.theme.colors.error}`};
  @media (max-width: 430px) {
    font-size: 16px;
  }
  font-size: 12px;
`
const ErrorLabel = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-weight: bold;
  font-size: 13px;
`
export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [userOrEmail, setUserOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const [userData, setUserData] = useContext(UserContext)
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post(`http://localhost:3333/user/login`, {
        userOrEmail,
        password
      })
      const { token } = response.data
      localStorage.setItem('token', token)
    } catch (err) {
      if (err.response && err.response.data === 'password incorrect') {
        setError({ ...error, password: 'A senha está incorreta' })
      } else if (err.response && err.response.data === 'not found') {
        setError({ ...error, userOrEmail: 'Usuário ou e-mail não encontrado' })
      } else {
        console.log('Erro desconhecido:', error.message)
      }
    } finally {
      setLoading(false)
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:3333/user/verify-session', {
          headers: {
            authorization: token
          }
        })
        setUserData(response.data)
      } catch (error) {
        console.error('Erro ao verificar sessão:', error)
      }
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <SignYourAcc>Sign in to your account</SignYourAcc>
      <InputAlt
        label="E-mail or username"
        placeholder="E-mail  or username"
        value={userOrEmail}
        onChange={(e) => setUserOrEmail(e.target.value)}
        error={error.userOrEmail}
        required
      />
      {error.userOrEmail && <ErrorLabel>{error.userOrEmail}</ErrorLabel>}
      <InputAlt
        label="Password"
        placeholder="Password"
        password
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={error.password}
        required
      />
      {error.password && <ErrorLabel>{error.password}</ErrorLabel>}
      <ButtonAlt loading={loading} type="submit">
        Lets´go
      </ButtonAlt>
      <EsqueceuAsenha>
        <Link href="/">Forgot you password ?</Link>{' '}
      </EsqueceuAsenha>
    </Form>
  )
}
