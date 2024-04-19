import styled from 'styled-components'
import { useState, useContext } from 'react'
import axios from 'axios'
import { LoginContext } from '../../context/useContextLogin'

import Input from '../form/Input'
import Button from '../form/Button'

const Conatiner = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media (max-width: 612px) {
    justify-content: center;
    align-items: center;
  }
`

const BoxInput = styled.div`
  padding: 6px;
  height: 70px;
  width: 300px;
  border: 1px solid #999999aa;
  @media (max-width: 612px) {
    margin: 10px 0;
  }
  @media (max-width: 612px) {
    width: 250px;
    height: 50px;
  }
`

const NameInput = styled(Input)`
  grid-area: fullNameInput;
  padding: 6px;
  border: transparent;
  height: auto;
  margin: 0;
  background: transparent;
`

const UserInput = styled(Input)`
  grid-area: userInput;
  padding: 6px;
  border: transparent;
  height: auto;
  margin: 0;
  background: transparent;
`
const EmailInput = styled(Input)`
  grid-area: emailInput;
  padding: 6px;
  border: transparent;
  height: auto;
  margin: 0;
  background: transparent;
`
const PasswordInput = styled(Input)`
  grid-area: passwordInput;
  padding: 6px;
  border: transparent;
  height: auto;
  margin: 0;
  background: transparent;
`
const AddressInput = styled(Input)`
  grid-area: addressInput;
  padding: 6px;
  border: transparent;
  height: auto;
  margin: 0;
  background: transparent;
`
const NumberInput = styled(Input)`
  grid-area: numberInput;
  padding: 6px;
  border: transparent;
  height: auto;
  margin: 0;
  background: transparent;
`
const ConsentCheckDiv = styled.div`
  grid-area: ConsentCheck;
  word-wrap: break-word;
`
const Form = styled.form`
  width: 602px;
  max-height: 70%;
  display: grid;
  grid-template-areas:
    'fullNameInput userInput'
    'emailInput passwordInput'
    'addressInput numberInput'
    'ConsentCheck ConsentCheck';
  background-color: #ffffff;
  @media (max-width: 612px) {
    grid-template-areas:
      'NameInput '
      'SurnameInput'
      'EmailInput '
      'PasswordInput'
      'ConsentCheck '
      'ConsentCheck';
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    max-height: 90%;
  }
  @media (max-width: 350px) {
    width: 270px;
  }
`
const Label = styled.h4`
  color: #626262;
`

const InputCheckBox = styled.input`
  margin-right: 20px;
`

const PolicyAccept = styled.div`
  overflow-wrap: 'anywhere';
  width: 91%;
  display: flex;
  margin: 20px;
  color: #999999;
  @media (max-width: 612px) {
    width: 60vw;
    word-break: break-all;
    text-align: center;
    height: 100%;
    margin: 0;
  }
`
const TextPolicy = styled.h3`
  @media (max-width: 612px) {
    font-size: 12px;
    font-weight: 500;
  }
`
const Smileimg = styled.img``
const Text = styled.h2`
  color: gray;
  display: flex;
  font-weight: 500;
  align-items: center;
  cursor: default;

  gap: 7px;
  margin: 15px;
`

const TextDecoration = styled.a`
  text-decoration: underline;
  color: #333333;
  width: fit-content;
  white-space: nowrap;
  cursor: pointer;
  :hover {
    color: #0000ff83;
  }
  margin: 0;
`
const Title = styled.h1`
  color: black;
  font-weight: 500;
  text-align: center;
  margin-top: 30px;
  font-size: 25px;
`
const ButtonAlt = styled(Button)`
  width: 600px;

  margin-top: 14px;
  margin-left: 10px;

  @media (max-width: 612px) {
    width: 80vw;
  }
  @media (max-width: 430px) {
    font-size: 13px;
  }
`
const ErrorLabel = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-weight: bold;
  font-size: 13px;
`
const FlexButton = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding-bottom: 75px;
  bottom: -18%;
  left: 16%;
`
export default function SignupByBooking({ ...props }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const [boxSelected, setBoxSelected] = useState(Boolean)
  const [login, setLogin] = useContext(LoginContext)
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
      const { status } = await axios.post(`http://localhost:3333/user/signup`, formData)
      if (status === 201) {
        alert('Cadastro feito com sucesso')
      }
      setLogin(true)
      setFormData(false)
    } catch (err) {
      if (err.response.data.duplicatedKey === 'email') {
        setError({ ...error, email: 'Já existe uma conta com esse e-mail.' })
      } else if (err.response.data.duplicatedKey === 'user') {
        setError({ ...error, user: 'Já existe uma conta com esse username.' })
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
    <Conatiner>
      <Title>Ready to book? Set your account details</Title>
      <Form onSubmit={handleForm}>
        <BoxInput>
          <Label>FullName*</Label>
          <NameInput
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
            error={error.fullName}
          />
          {error.fullName && <ErrorLabel>{error.fullName}</ErrorLabel>}
        </BoxInput>
        <BoxInput>
          <Label>Username*</Label>
          <UserInput name="user" onChange={handleChange} value={formData.user} error={error.user} />
          {error.user && <ErrorLabel>{error.user}</ErrorLabel>}
        </BoxInput>
        <BoxInput>
          <Label>E-mail address*</Label>
          <EmailInput
            name="email"
            onChange={handleChange}
            value={formData.email}
            error={error.email}
            type="email"
          />
          {error.email && <ErrorLabel>{error.email}</ErrorLabel>}
        </BoxInput>
        <BoxInput>
          <Label>Password*</Label>
          <PasswordInput
            name="password"
            onChange={handleChange}
            value={formData.password}
            error={error.password}
            password
          />
          {error.password && <ErrorLabel>{error.password}</ErrorLabel>}
        </BoxInput>
        <BoxInput>
          <Label>Address*</Label>
          <AddressInput
            name="address"
            onChange={handleChange}
            value={formData.address}
            error={error.address}
          />
          {error.address && <ErrorLabel>{error.address}</ErrorLabel>}
        </BoxInput>
        <BoxInput>
          <Label>Number*</Label>
          <NumberInput
            name="number"
            onChange={handleChange}
            value={formData.number}
            error={error.number}
          />
          {error.number && <ErrorLabel>{error.number}</ErrorLabel>}
        </BoxInput>
        <ConsentCheckDiv>
          <PolicyAccept>
            <InputCheckBox onClick={() => setBoxSelected(!boxSelected)} type={'checkbox'} />
            <TextPolicy>
              I accept the <TextDecoration>Terms of Use </TextDecoration> and the{' '}
              <TextDecoration>Privacy Policy</TextDecoration>. As a customer of Helpling.co.uk, the
              information provided is necessary for your booking and is collected in order for you
              to receive information about the Helpling platform via email, from which you can
              unsubscribe at any time via a link in the mail.
            </TextPolicy>
          </PolicyAccept>
        </ConsentCheckDiv>
        <FlexButton>
          <Text>
            <Smileimg src="/smile.png" />
            Do you already have an account?
            <TextDecoration onClick={() => setLogin(true)}>Log in here</TextDecoration>
          </Text>
          <ButtonAlt
            loading={loading}
            type="submit"
            disabled={boxSelected === false ? true : false}
          >
            Sign-up
          </ButtonAlt>
        </FlexButton>
      </Form>
    </Conatiner>
  )
}
