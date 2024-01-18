import styled from 'styled-components'
import Navbar from '../src/components/layout/Navbar'
import Input from '../src/components/form/Input'
import Button from '../src/components/form/Button'
import Steps from '../src/components/steps/Steps'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #F3F3F3;
`

const Title = styled.h1`
  color: black;
  font-weight: 500;
  text-align: center;
  margin-top: 30px;
  font-size: 25px;
`
const TitleSub = styled.h1 `
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
  border: 1px solid #999999; 
`

const NameInput = styled(Input)`
  grid-area: NameInput;
  padding: 6px;
  border: transparent;
  height: auto;
  margin: 0;
 background: transparent;
`

const SurnameInput = styled(Input)`
  grid-area: SurnameInput;
  padding: 6px;
  border: transparent;
  height: auto;
  margin: 0;
 background: transparent;

`
const EmailInput = styled(Input)`
  grid-area: EmailInput;
  padding: 6px;
  border: transparent;
  height: auto;
  margin: 0;
 background: transparent;
  
`
const PasswordInput = styled(Input)`
  display: grid;
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
const SecInfos = styled.form`
  width: 602px;
  max-height: 70%;
  display: grid;
  grid-template-areas:
    'NameInput SurnameInput'
    'EmailInput PasswordInput'
    'ConsentCheck ConsentCheck';
  background-color: #ffffff;
`
const BoxSummary = styled.div`
  width: 270px ;
  height: 340px;
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
`

const DescText = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 8px 13px;
`
const DescTextAlt = styled(DescText)`
  font-size: 16px;
`
const Barra = styled.hr`
  width: 100%;
`

const InputCheckBox = styled.input`
  margin-right: 20px;
`

const PolicyAccept = styled.h2`
  overflow-wrap: 'anywhere';
  width: 91%;
  display: flex;
  margin: 20px;
  color: #999999;
`
const ButtonAlt = styled(Button)`
 width: 610px;
  background-color: ${(props) => (props.isDisabled ? 'grey' : props.theme.colors.ultravio)};
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  margin-top: 14px;
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
const FlexSecInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`
const Label = styled.h4`
 color: #626262;
`
const TextDecoration = styled.h4`
 text-decoration: underline;
 color: #333333;
 width: fit-content;
 white-space: nowrap;
 margin: 0;
 :hover{
    color: #4848e5
  }
`
const Text = styled.h2`
  color: gray;
  display: flex;
  font-weight: 500;
  align-items: center;
  cursor: pointer;
  gap: 7px;
  margin: 15px;
`
const TextAlt  = styled(Text)`
  font-size: 12px;
`
const Smileimg = styled.img``


function Booking() {
  const [boxSelected, setBoxSelected] = useState(Boolean)
  const router = useRouter()
  return (
    <Container >
      <StyledFlexNavBar>
        <Navbar type2 />
      </StyledFlexNavBar> 
      <Steps type1/>
      <PaymentAndRegister>
        <FlexSecInfos>
            <Title>Ready to book? Set your account details</Title>
            <SecInfos>
              <BoxInput>
                <Label>Name*</Label>
                <NameInput />
              </BoxInput>
              <BoxInput>
                <Label>Surname*</Label>
                <SurnameInput></SurnameInput>
              </BoxInput>
              <BoxInput>
                <Label>Email address*</Label>
                <EmailInput type="email"></EmailInput>
              </BoxInput>
              <BoxInput>
                <Label>Password*</Label>
                <PasswordInput password></PasswordInput>
              </BoxInput>
              <ConsentCheckDiv>
                  <PolicyAccept>
                    <InputCheckBox onClick={() => setBoxSelected(!boxSelected)} type={'checkbox'} />I
                    accept the Terms of Use and the Privacy Policy. As a customer of Helpling.co.uk, the
                    information provided is necessary for your booking and is collected in order for you
                    to receive information about the Helpling platform via email, from which you can
                    unsubscribe at any time via a link in the mail.
                  </PolicyAccept>
                </ConsentCheckDiv>
            </SecInfos>
            <Text>
              <Smileimg src='/smile.png'/>
              Do you already have an account? 
              <TextDecoration onClick={()=> router.push('/login')}>Log in here</TextDecoration>
            </Text>
            <ButtonAlt valor="Sign-Up" isDisabled={boxSelected === false ? true : false} />
        </FlexSecInfos>
        <FlexSecInfos>
          <TitleSub>Your booking summary</TitleSub>
          <BoxSummary>
            <DescText>Plan:</DescText>      
            <Barra />
            <DescText>Duration:</DescText>
            <Barra />
            <DescText>Date:</DescText>
            <Barra />
            <DescText>Time:</DescText>
            <Barra />
            <DescText>Price per hour:</DescText>
            <Barra />
            <DescText>Total price:</DescText>
            <Barra />
            <DescTextAlt>Total Cost: R$</DescTextAlt>
            <Barra />
            <TextAlt>
              <Smileimg src='/smile.png'/>
              The rate of the first cleaner who accepts your booking is what you will be charged.
            </TextAlt>
          </BoxSummary>
        </FlexSecInfos>
      </PaymentAndRegister>
    </Container>
  )
}

export default Booking
