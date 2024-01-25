import styled from 'styled-components'
import Navdashboard from '../../src/components/layout/Navdashboard'
import Input from '../../src/components/form/Input'
import AvatarProfile from '../../src/components/avatar/Avatar'
import Button from '../../src/components/form/Button'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledFlex = styled.div`
  display: flex;
`
const BoxAccountDetails = styled.div`
  width: 75%;
  height: 330px;
  margin: 50px;
  gap: 8px;
  display: flex;
  background-color: #4242e1;
`
const InputAlt = styled(Input)`
 width: 270px;
 padding: 10px;
`
const InputAlt1 = styled(Input)`
 width: 390px;
 padding: 10px;  
`
const BoxInputs = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
`
const ButtonAlt = styled(Button)`
  height: 45px;
  width: 170px;
  margin: 25px 95px 0px 100px;
  
  `
export default function ProfilePage(){
  return(
      <Container>
        <StyledFlex>
          <Navdashboard />      
          <BoxAccountDetails>
              <AvatarProfile/>
              <BoxInputs>
                <InputAlt label='first name' placeholder='Ryan' />
                <InputAlt label='last name'  placeholder='Lucas' />
                <InputAlt label='E-mail'  placeholder='ryanlucasfr@gmail.com' />
                <InputAlt label='Phone'  placeholder='34-8989-89898' />
                <InputAlt1 label='Adress'  placeholder='Rua Mônaco 656 B.laranjeiras' /> 
                <ButtonAlt valor='Save changes' /> 
              </BoxInputs> 
          </BoxAccountDetails>
        </StyledFlex>
      </Container>
  )
}