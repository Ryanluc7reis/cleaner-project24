import styled, { keyframes } from 'styled-components'
import Button from '../src/components/form/Button'
import Input from '../src/components/form/Input'
import Logo from '../src/components/logo/Logo'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const fadeIn = keyframes`
  from {
    opacity: 0;
   
  }
  to {
    opacity: 6;
    
  }
`
const ButtonAlt = styled(Button)`
  margin-top: 23px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 2px #5176da, -2px -2px 2px #5176da;
  @media (max-width: 1025px) {
    padding: 12px 17px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
    margin-top: 17px;
  }
  @media (max-width: 900px) {
    font-size: 16px;
    margin-top: 13px;
  }
`
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 120vh;
  background-color: #223677;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

const Titulo = styled.p`
  color: black;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  margin: 20px;
`

const InputAlt = styled(Input)`
  box-shadow: 2px 2px 2px #5176da, -2px -2px 2px #5176da;
  border-color: #5176da;
  font-size: 12px;
  padding: 9px;
  @media (max-width: 1025px) {
    padding: 10px 17px;
  }
  @media (max-width: 900px) {
    padding: 6px 13px;
  }
`
const FlexBoxFormulario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Formulario = styled.form`
  background-color: #cccdee;
  padding: 3px;
  border-radius: 8px;
  height: 545px;
  width: 327px;
  margin-top: 30px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1025px) {
    height: 493px;
    width: 300px;
  }
  @media (max-width: 900px) {
    height: 450px;
    width: 300px;
  }
`
const StyledLogin = styled.a`
  cursor: pointer;
  font-size: 20px;
  background: #56648f;
  padding: 15px 25px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  :hover {
    background-color: #677db7;
  }
  @media (max-width: 900px) {
    padding: 9px;
  }
`
const StyledFlexNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`
const FlexLoginAndRegister = styled.div`
  display: flex;
  gap: 7px;
`
const SignupAsClient = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [fullName, setfullName] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const handleForm = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { status } = await axios.post(`http://localhost:3333/user/signup`, {
        fullName,
        user,
        email,
        password,
        address,
        number
      })
      if (status === 201) {
        router.push('/login')
      }
    } catch (err) {
      if (err.response && err.response.email.code === 11000) {
        console.log('Ja existe uma conta com esse valor')
      } else {
        console.error('Erro ao cadastrar usuário:', err.message)
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <Container>
      <StyledFlexNavBar>
        <Logo />
        <FlexLoginAndRegister>
          <StyledLogin onClick={() => router.push('/login')}>Login</StyledLogin>
          <StyledLogin onClick={() => router.push('/signupAscleaner')}>
            Register as cleaner
          </StyledLogin>
        </FlexLoginAndRegister>
      </StyledFlexNavBar>
      <FlexBoxFormulario>
        <Formulario onSubmit={handleForm}>
          <Titulo>Register as client</Titulo>
          <InputAlt
            label="Full Name"
            placeholder="FULLNAME"
            type="text"
            onChange={(e) => setfullName(e.target.value)}
            value={fullName}
            required
          />
          <InputAlt
            label="User"
            placeholder="USER"
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <InputAlt
            label="E-mail"
            placeholder="EMAIL  ADDRESS"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <InputAlt
            label="Password"
            placeholder="PASSWORD"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <InputAlt
            label="Address"
            placeholder="ADDRESS"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            required
          />
          <InputAlt
            label="Phone Number"
            placeholder="PHONE NUMBER"
            type="text"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            required
          />
          <ButtonAlt loading={loading} type="submit">
            Register
          </ButtonAlt>
        </Formulario>
      </FlexBoxFormulario>
    </Container>
  )
}

export default SignupAsClient
