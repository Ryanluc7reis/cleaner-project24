import styled from "styled-components";
import Navbar from '../../src/components/layout/Navbar'
import Input from '../../src/components/form/Input'
import Steps from "../../src/components/steps/Steps";
import Selecter from "../../src/components/form/Selecter";
import Button from '../../src/components/form/Button'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #edededaf;
`
const StyledFlexFormPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
`
const VerifiedCard = styled.div`
  width: 150px;
  height: 35px;
  padding: 10px 40px;
  display: flex;
  gap:5px;
  background: transparent;
  border: 1px solid blue;
  margin: 12px 0px;
`
const FormPayment = styled.form`
  min-width: 600px;
  min-height: 500px;
  padding: 15px;
  margin: 15px 0;
  background-color: white;
`
const InputAlt = styled(Input)`
  border-radius: 5px;
  width: 100%;
  padding: 12px;
  //color: #3434f0;
`
const BoxCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #56dc02;
  border-radius: 35px;
  position: absolute;
  right: 62%;
  transform: translate(70%, -110%);
`
const Check = styled.img`
  height: 12px;
  width: 13px;
 `
 const StyledFlexSelecter = styled.div`
  display: flex;
  gap: 7px;
 `
 const Text = styled.h3`
  color: #808080d4;
  font-weight: 500;
  display: flex;
  padding: 4px 2px;
  gap: 3px;
 `
 const TextDecoration = styled(Text)`
  color: #4a4a4ada;
  font-weight: 600;
 `
 const TextImg = styled.img`
 `
 const ButtonAlt = styled(Button)`
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 10px 0;
 `
 const Title = styled.h1`
  font-size: 23px;
  color: #212121;
  font-weight: 500;
  margin: 15px 0;
 `
export default function PaymentPage() {
  return(
    <Container>
      <Navbar type2 />
      <Steps type2 />
      
      <StyledFlexFormPayment>
          <Title>Fill in the form below to pay for the service</Title>
          <FormPayment >
            <InputAlt placeholder='Nome completo' />
            <InputAlt placeholder='E-mail' />
            <InputAlt placeholder='CPF' />
            <InputAlt placeholder='Celular com DDD' />
            <VerifiedCard>
              <img src='/credit-card.png' width='17px' height='16px'/>
              <h3 style={{color:'#3434f0'}}>Cartão</h3>
              <BoxCheck>
              <Check src='/Whitecheck.png' />
              </BoxCheck>            
            </VerifiedCard>
            <InputAlt placeholder='Número do cartão' />
            <StyledFlexSelecter>
                <Selecter year />
                <Selecter month />
            </StyledFlexSelecter>
            <InputAlt placeholder='CVV' />
            <Selecter parcelas />
            <div style={{display:'flex', gap: '4px'}}>
              <TextImg src='/user-secury.png' />
              <Text>
                Não protegemos seus dados de pagamento usando encriptação para prover
                segurança no nível de bancos
              </Text>
            </div>
            <div style={{display:'flex', gap: '4px',alignItems: 'center'}}>
              <TextImg src='/notepad.png' />
              <Text>
                A cobrança irá aparecer no seu cartão como <TextDecoration>PG*DANK</TextDecoration>
              </Text>
            </div>
            <ButtonAlt valor='PAGAR AGORA!' />
          </FormPayment>
      </StyledFlexFormPayment>
    </Container>
  )
}