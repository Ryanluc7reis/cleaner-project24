import styled from 'styled-components'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../../src/context/useContext'
import { LoginContext } from '../../src/context/useContextLogin'
import dynamic from 'next/dynamic'

import Navbar from '../../src/components/layout/Navbar'
import Input from '../../src/components/form/Input'
import Button from '../../src/components/form/Button'
import Steps from '../../src/components/steps/Steps'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #f3f3f3;
  display: ${(props) => (props.isNone ? 'none' : 'block')};
`

const Title = styled.h1`
  color: black;
  font-weight: 500;
  text-align: center;
  margin-top: 30px;
  font-size: 25px;
`
const TitleSub = styled.h1`
  color: black;
  text-align: center;
  font-weight: 500;
  margin-top: 26px;
  margin-right: 10px;
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
const BoxSummary = styled.div`
  width: 270px;
  min-height: 340px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
const PaymentAndRegister = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  padding-bottom: 50px;
  @media (max-width: 936px) {
    align-items: center;
    flex-direction: column;
  }
`

const DescText = styled.div`
  margin: 8px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`
const TitleText = styled.h3`
  font-weight: 500;
  font-size: 15px;
`
const DataText = styled.h3`
  color: #222222;
`
const DataTextAlt = styled(DataText)`
  color: #2b4df3;
  font-size: 17px;
`
const TitleTextAlt = styled(TitleText)`
  font-size: 19px;
`
const Barra = styled.hr`
  width: 100%;
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

const ButtonAlt = styled(Button)`
  width: 610px;

  margin-top: 14px;

  @media (max-width: 612px) {
    width: 80vw;
  }
  @media (max-width: 430px) {
    font-size: 13px;
  }
`
const NavBarAlt = styled(Navbar)`
  background: #f3f3f3;
`
const FlexSecInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media (max-width: 612px) {
    justify-content: center;
    align-items: center;
  }
`
const Label = styled.h4`
  color: #626262;
`
const TextDecoration = styled.a`
  text-decoration: underline;
  color: #333333;
  width: fit-content;
  white-space: nowrap;
  cursor: pointer;
  margin: 0;
  :hover {
    color: #4848e5;
  }
`
const Text = styled.h2`
  color: gray;
  display: flex;
  font-weight: 500;
  align-items: center;
  cursor: default;
  gap: 7px;
  margin: 15px;
`
const TextAlt = styled(Text)`
  font-size: 12px;
`
const Smileimg = styled.img``
const ConfirmationToPay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
  padding-right: 175px;
`
function Booking() {
  const [boxSelected, setBoxSelected] = useState(Boolean)
  const [userData, setUserData] = useContext(UserContext)
  const [login, setLogin] = useContext(LoginContext)
  const router = useRouter()
  const Plan = typeof window !== 'undefined' ? localStorage.getItem('Plan') : null
  const Date = typeof window !== 'undefined' ? localStorage.getItem('Date') : null
  const Hour = typeof window !== 'undefined' ? localStorage.getItem('Hour') : null
  const Duration = typeof window !== 'undefined' ? localStorage.getItem('Duration') : null
  const PriceH = typeof window !== 'undefined' ? localStorage.getItem('PriceH') : null

  return (
    <Container>
      <NavBarAlt type2 />
      <Steps type1 />
      <PaymentAndRegister>
        {userData ? (
          <ConfirmationToPay>
            <h1>Olá, {userData}</h1>
            <h1>Seu serviço será no endereço (Rua Monaco 646,B. BELFOROXO) ?</h1>
            <Button onClick={() => router.push('/booking/booking-two')}> Yes! Pay now</Button>
            <Button onClick={() => router.push('/booking/booking-two')}>
              {' '}
              No! I want to change my address
            </Button>
          </ConfirmationToPay>
        ) : (
          <FlexSecInfos>
            <Title>Ready to book? Set your account details</Title>
            <Form>
              <BoxInput>
                <Label>FullName*</Label>
                <NameInput />
              </BoxInput>
              <BoxInput>
                <Label>Username*</Label>
                <UserInput />
              </BoxInput>
              <BoxInput>
                <Label>E-mail address*</Label>
                <EmailInput type="email" />
              </BoxInput>
              <BoxInput>
                <Label>Password*</Label>
                <PasswordInput password />
              </BoxInput>
              <BoxInput>
                <Label>Address*</Label>
                <AddressInput />
              </BoxInput>
              <BoxInput>
                <Label>Number*</Label>
                <NumberInput />
              </BoxInput>
              <ConsentCheckDiv>
                <PolicyAccept>
                  <InputCheckBox onClick={() => setBoxSelected(!boxSelected)} type={'checkbox'} />
                  <TextPolicy>
                    I accept the <TextDecoration>Terms of Use </TextDecoration> and the{' '}
                    <TextDecoration>Privacy Policy</TextDecoration>. As a customer of
                    Helpling.co.uk, the information provided is necessary for your booking and is
                    collected in order for you to receive information about the Helpling platform
                    via email, from which you can unsubscribe at any time via a link in the mail.
                  </TextPolicy>
                </PolicyAccept>
              </ConsentCheckDiv>
            </Form>
            <Text>
              <Smileimg src="/smile.png" />
              Do you already have an account?
              <TextDecoration onClick={() => setLogin(true)}>Log in here</TextDecoration>
            </Text>
            <ButtonAlt
              valor="Sign-Up"
              onClick={() => router.push('/booking/booking-two')}
              disabled={boxSelected === false ? true : false}
            />
          </FlexSecInfos>
        )}
        <FlexSecInfos>
          <TitleSub>Your booking summary</TitleSub>
          <BoxSummary>
            <DescText>
              <TitleText>Plan:</TitleText>
              <DataText>{Plan}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleText>Duration:</TitleText>
              <DataText>{Duration}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleText>Date:</TitleText>
              <DataText>{Date}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleText>Time:</TitleText>
              <DataText>{Hour}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleText>Price per hour:</TitleText>
              <DataText>{PriceH}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleText>Total price:</TitleText>
              <DataText>{PriceH}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleTextAlt>Total cost:</TitleTextAlt>
              <DataTextAlt>{PriceH}</DataTextAlt>
            </DescText>
            <Barra />
            <TextAlt>
              <Smileimg src="/smile.png" />
              The rate of the first cleaner who accepts your booking is what you will be charged.
            </TextAlt>
          </BoxSummary>
        </FlexSecInfos>
      </PaymentAndRegister>
    </Container>
  )
}

// eslint-disable-next-line no-undef
export default dynamic(() => Promise.resolve(Booking), { ssr: false })
