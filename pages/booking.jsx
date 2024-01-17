import styled from 'styled-components'
import Navbar from '../src/components/layout/Navbar'
import Input from '../src/components/form/Input'
import Button from '../src/components/form/Button'
import { useState } from 'react'
const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const DivSteps = styled.div`
  background-color: white;
  margin: 0 15%;
`
const Title = styled.h1`
  color: black;
  text-align: center;
  margin-top: 30px;
`

const NameInput = styled(Input)`
  grid-area: NameInput;
  padding: 2px 2px;
  min-width: 40px;
  max-width: fit-content;
`
const SurnameInput = styled(Input)`
  grid-area: SurnameInput;
  padding: 2px 2px;
  min-width: 40px;
  max-width: fit-content;
`
const EmailInput = styled(Input)`
  grid-area: EmailInput;
  padding: 2px 2px;
  min-width: 40px;
  max-width: fit-content;
`
const PasswordInput = styled(Input)`
  display: grid;
  grid-area: PasswordInput;
  padding: 2px 2px;
  min-width: 40px;
  max-width: fit-content;
`
const ConsentCheckDiv = styled.div`
  grid-area: ConsentCheck;
  word-wrap: break-word;
`
const SecInfos = styled.form`
  max-width: 35%;
  height: 70%;
  display: grid;
  grid-template-areas:
    'NameInput SurnameInput'
    'EmailInput PasswordInput'
    'ConsentCheck ConsentCheck';
  background-color: blue;
  padding: 25px 25px 25px 25px;
  margin: 50px;
`
const Desc = styled.div`
  max-width: 50%;
  max-height: 50%;
  margin: 50px 0 50px 35%;
  background-color: red;
  display: flex;
  flex-direction: column;
`
const PaymentAndRegister = styled.div`
  display: flex;
  flex-direction: row;
`

const DescText = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin: 8px 4px;
`
const Barra = styled.hr`
  //
`

const ConsentCheck = styled.form`
  //
`

const InputCheckBox = styled.input`
  margin-right: 30px;
`

const PolicyAccept = styled.h2`
  overflow-wrap: 'anywhere';
  width: 90%;
  display: flex;
  text-align: right;
  margin-left: 60px;
  margin-top: 30px;
`
const ButtonAlt = styled(Button)`
  background-color: ${(props) => (props.isDisabled ? 'grey' : props.theme.colors.ultravio)};
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  margin-left: 50%;
  margin-top: 10px;
  :hover {
    background-color: ${(props) => (props.isDisabled ? 'grey' : props.theme.colors.ultravio)};
  }
`
 const StyledFlexNavBar = styled.div`

  background:#F3F3F3;
   @media (max-width: 712px) {
    width: 115%;
  }
  @media (max-width: 670px) {
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    padding-bottom: 8px;
  }
  @media (max-width: 426px) {
    width: 115%;
  }
`

function Booking() {
  const [boxSelected, setBoxSelected] = useState(Boolean)
  return (
    <Container style={{ backgroundColor: '#ccc' }}>
      <StyledFlexNavBar>
        <Navbar type2 />
      </StyledFlexNavBar> 
      <DivSteps>
        <h1>
          Your bookings ...................................... Your Details
          ...................................... Your Payment
        </h1>
      </DivSteps>
      <Title>Ready to book? Set your account details</Title>
      <PaymentAndRegister>
        <SecInfos>
          <NameInput label={'Name'}></NameInput>
          <SurnameInput label={'Surname'}></SurnameInput>
          <EmailInput label={'Email'} type="email"></EmailInput>
          <PasswordInput label={'Password'} password></PasswordInput>
          <ConsentCheckDiv>
            <div>
              <PolicyAccept>
                <InputCheckBox onClick={() => setBoxSelected(!boxSelected)} type={'checkbox'} />I
                accept the Terms of Use and the Privacy Policy. As a customer of Helpling.co.uk, the
                information provided is necessary for your booking and is collected in order for you
                to receive information about the Helpling platform via email, from which you can
                unsubscribe at any time via a link in the mail.
              </PolicyAccept>
            </div>
          </ConsentCheckDiv>
          <ButtonAlt valor="Sign-Up" isDisabled={boxSelected === false ? true : false} />
        </SecInfos>
        <Desc>
          <h1>Your booking summary</h1>
          <Barra />
          <DescText>Duration:</DescText>
          <Barra />
          <DescText>Date:</DescText>
          <Barra />
          <DescText>Timing:</DescText>
          <Barra />
          <DescText>Price per hour:</DescText>
          <Barra />
          <DescText>Total price:</DescText>
          <Barra />
          <DescText>Total Cost: R$</DescText>
          <Barra />
        </Desc>
      </PaymentAndRegister>
    </Container>
  )
}

export default Booking
