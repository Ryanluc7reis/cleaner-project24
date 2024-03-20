import styled from 'styled-components'
import Input from '../src/components/form/Input'
import Logo from '../src/components/logo/Logo'
import Button from '../src/components/form/Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'

const Container = styled.div`
  background: #223677;
  height: 100vh;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`

const StyledFlexBoxInputs = styled.div`
  display: flex;
  justify-content: center;
`
const StyledBoxInputs = styled.form`
  width: 330px;
  height: 400px;
  margin-top: 70px;
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
const StyledFlexNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 7px;
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
    background-color: #0069fc;
    border-radius: 8px;
  }
  transition: 0.5s;
`
const InputAlt = styled(Input)`
  box-shadow: 2px 2px 2px #5176da, -2px -2px 2px #5176da;
  border-color: #5176da;
  @media (max-width: 430px) {
    font-size: 16px;
  }
  font-size: 12px;
`

const StyledRegisterCleaner = styled.a`
  cursor: pointer;
  font-size: 20px;
  background: #56648f;
  padding: 15px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  :hover {
    background-color: #677db7;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`
const FlexRegisters = styled.div`
  display: flex;
  gap: 15px;
`

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [userOrEmail, setUserOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { status } = await axios.post(`http://localhost:3333/user/login`, {
        userOrEmail,
        password
      })
      if (status === 200) {
        router.push('/')
      }
    } catch (error) {
      if (error.response && error.response.password === 'password incorrect') {
        console.log('A senha está incorreta.')
      } else if (error.response && error.response.userOrEmail === 'not found') {
        console.log('Usuário ou e-mail não encontrado.')
      } else {
        console.log('Erro desconhecido:', error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <StyledFlexNavBar>
        <Logo />
        <FlexRegisters>
          <StyledRegisterCleaner onClick={() => router.push('/signupAscleaner')}>
            Become a cleaner
          </StyledRegisterCleaner>
          <StyledRegisterCleaner onClick={() => router.push('/signupAsclient')}>
            Becomea a client
          </StyledRegisterCleaner>
        </FlexRegisters>
      </StyledFlexNavBar>
      <StyledFlexBoxInputs>
        <StyledBoxInputs onSubmit={onSubmit}>
          <SignYourAcc>Sign in to your account</SignYourAcc>
          <InputAlt
            label="E-mail or User"
            placeholder="E-mail  or User"
            value={userOrEmail}
            onChange={(e) => setUserOrEmail(e.target.value)}
            required
          />
          <InputAlt
            label="Password"
            placeholder="Password"
            password
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <ButtonAlt loading={loading} type="submit">
            Lets´go
          </ButtonAlt>
          <EsqueceuAsenha>
            <Link href="/">Forgot you password ?</Link>{' '}
          </EsqueceuAsenha>
        </StyledBoxInputs>
      </StyledFlexBoxInputs>
    </Container>
  )
}
