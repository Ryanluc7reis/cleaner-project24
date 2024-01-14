import styled from 'styled-components'
import Navbar from '../src/components/layout/Navbar'
import Input from '../src/components/form/Input'
const Container = styled.div`
  width: 100vw;
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
const ConsentCheck = styled.div`
  grid-area: ConsentCheck;
  word-wrap: break-word;
`

const SecInfos = styled.section`
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

function Booking() {
  return (
    <Container style={{ backgroundColor: '#ccc' }}>
      <div>
        <Navbar />
      </div>
      <DivSteps>
        <h1>
          Your bookings ...................................... Your Details
          ...................................... Your Payment
        </h1>
      </DivSteps>
      <Title>Ready to book? Set your account details</Title>
      <SecInfos>
        <NameInput label={'Name'}></NameInput>
        <SurnameInput label={'Surname'}></SurnameInput>
        <EmailInput label={'Email'}></EmailInput>
        <PasswordInput label={'Password'} password></PasswordInput>
        <ConsentCheck>
          <h1 style={{ overflowWrap: 'anywhere' }}>
            I accept the Terms of Use and the Privacy Policy. As a customer of Helpling.co.uk, the
            information provided is necessary for your booking and is collected in order for you to
            receive information about the Helpling platform via email, from which you can
            unsubscribe at any time via a link in the mail.
          </h1>
        </ConsentCheck>
      </SecInfos>
    </Container>
  )
}

export default Booking
