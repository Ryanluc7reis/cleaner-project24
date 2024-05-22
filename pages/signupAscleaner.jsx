import styled from 'styled-components'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { PopUpSignupContext } from '../src/context/useContextPopUpSignup'

import Button from '../src/components/form/Button'
import Input from '../src/components/form/Input'
import Logo from '../src/components/logo/Logo'

const ButtonAlt = styled(Button)`
  margin-top: 15px;
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
  background-color: #223677ef;
  @media (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

const Titulo = styled.p`
  color: white;
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
  border: ${(props) =>
    props.error && props.error.length > 0 && `2px solid ${props.theme.colors.error}`};

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
  background: #3e3188;
  padding: 3px;
  border-radius: 8px;
  height: 549px;
  width: 327px;
  margin-top: 30px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    height: 540px;
    width: 300px;
  }
  @media (max-width: 768px) {
    height: 500px;
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
const ErrorLabel = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-weight: bold;
  font-size: 13px;
`
const SignupAsCleaner = () => {
  const router = useRouter()
  const [popUpMessageSignup, setPopUpMessageSignup] = useContext(PopUpSignupContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const [formData, setFormData] = useState({
    fullName: '',
    user: '',
    password: '',
    address: '',
    number: '',
    email: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'email') {
      const isValidEmail = /\S+@\S+\.\S+/.test(value)
      setError((prevErrors) => ({
        ...prevErrors,
        [name]: isValidEmail ? null : 'Por favor, digite um e-mail válido.'
      }))
    }
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

  const handleForm = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { status } = await axios.post(
        `https://cleaner-project-be.vercel.app/user/signupAscleaner`,
        formData
      )
      if (status === 201) {
        setPopUpMessageSignup(true)
        router.push('/')
      }
    } catch (err) {
      if (err.response && err.response.data.duplicatedKey === 'email') {
        setError({ ...error, email: 'Já existe uma conta com esse e-mail.' })
      } else if (err.response && err.response.data.duplicatedKey === 'user') {
        setError({ ...error, user: 'Já existe uma conta com esse username.' })
      } else if (err.response && err.response.data === 'Erro interno do servidor') {
        setError({ ...error, number: 'O número precisa ser algo como 55 (11) 9865-5432' })
      } else {
        const newErrors = {}
        const requiredFields = ['fullName', 'user', 'email', 'password', 'address', 'number']
        requiredFields.forEach((field) => {
          if (!formData[field]) {
            newErrors[field] = 'Este campo é obrigatório.'
          }
        })
        setError(newErrors)
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
          <StyledLogin onClick={() => router.push('/signupAsclient')}>
            Register as client
          </StyledLogin>
        </FlexLoginAndRegister>
      </StyledFlexNavBar>
      <FlexBoxFormulario>
        <Formulario onSubmit={handleForm}>
          <Titulo>Register as cleaner</Titulo>
          <InputAlt
            colorlabel
            label="Full Name"
            name="fullName"
            placeholder="FULLNAME"
            type="text"
            onChange={handleChange}
            value={formData.fullName}
            error={error.fullName}
            required
          />
          {error.fullName && <ErrorLabel>{error.fullName}</ErrorLabel>}
          <InputAlt
            colorlabel
            label="Username"
            name="user"
            placeholder="USERNAME"
            type="text"
            onChange={handleChange}
            value={formData.user}
            error={error.user}
            required
          />
          {error.user && <ErrorLabel>{error.user}</ErrorLabel>}
          <InputAlt
            colorlabel
            label="E-mail"
            name="email"
            placeholder="EMAIL ADDRESS"
            type="email"
            onChange={handleChange}
            value={formData.email}
            error={error.email}
            required
          />
          {error.email && <ErrorLabel>{error.email}</ErrorLabel>}
          <InputAlt
            colorlabel
            label="Password"
            name="password"
            placeholder="PASSWORD"
            type="password"
            onChange={handleChange}
            value={formData.password}
            error={error.password}
            required
          />
          {error.password && <ErrorLabel>{error.password}</ErrorLabel>}
          <InputAlt
            colorlabel
            label="Address"
            name="address"
            placeholder="ADDRESS"
            type="text"
            onChange={handleChange}
            value={formData.address}
            error={error.address}
            required
          />
          {error.address && <ErrorLabel>{error.address}</ErrorLabel>}
          <InputAlt
            colorlabel
            label="Number"
            name="number"
            placeholder="NUMBER"
            onChange={handleChange}
            value={formData.number}
            error={error.number}
            required
          />
          {error.number && <ErrorLabel>{error.number}</ErrorLabel>}
          <ButtonAlt loading={loading} type="submit">
            Register
          </ButtonAlt>
        </Formulario>
      </FlexBoxFormulario>
    </Container>
  )
}

export default SignupAsCleaner
