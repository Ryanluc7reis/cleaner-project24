import styled from 'styled-components'
import Input from '../form/Input'
import Button from '../form/Button'
import NavRoutesDash from '../layout/Navroutesdash'

const Container = styled.div`
  width: auto;
  height: auto;
` 
const ContainerBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`
const BoxProfile = styled.div`
  width: auto;
  //height: auto;
  width: 90%;
  height: 360px;
  margin: 50px;
  gap: 8px;
  display: flex;
  background-color: #4242e1;
  padding: 15px;
`
const BoxAvatar = styled.div`
  background-color: #575757;
  width: 300px;
  height: 80%;
  margin: 10px;
  border-radius: 7px;;
  border: 1px solid #fb2d2d;
  display: flex;
  flex-direction: column;
  padding: 20px 52px;
`
const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 105px;
  background: transparent;
  border: 1px solid silver;
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
  const ButtonAlt1 = styled(Button)`
  height: 45px;
  width: 170px;
  margin: 25px 95px 0px 190px;
  
  `
const Label = styled.h2`
  margin: 2px 15px;
`
const EditAvatar = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 50px;
`
const Remove = styled.h2`
  color: red;
  font-weight: 500;
  cursor: pointer;
`
const Edit = styled.h2`
  color: #3232f7;
  font-weight: 500;
  cursor: pointer;
`
const FlexBoxAvatar = styled.div`
  display: flex;
  flex-direction: column;
`
export default function Profile({user , cleaner }) {
  return(
    <Container>
      {user && 
        <ContainerBox>
          <NavRoutesDash profile/>
          <BoxProfile>
            <FlexBoxAvatar>
                <Label >Avatar</Label>
                <BoxAvatar >               
                    <Avatar src='/avatar.png' />
                    <EditAvatar>
                        <Edit >Edit</Edit>
                        <Remove>Remove</Remove>
                    </EditAvatar>
                </BoxAvatar>
            </FlexBoxAvatar>
            <BoxInputs>
                <InputAlt label='first name' placeholder='Ryan' />
                <InputAlt label='last name'  placeholder='Lucas' />
                <InputAlt label='E-mail'  placeholder='ryanlucasfr@gmail.com' />
                <InputAlt label='Phone'  placeholder='34-8989-89898' />
                <InputAlt label='Adress'  placeholder='Rua Mônaco 656 B.laranjeiras' />
                <InputAlt label='Region'  placeholder='North' />  
                <ButtonAlt1 valor='Save changes' /> 
            </BoxInputs>      
          </BoxProfile>
        </ContainerBox>
       
      }
      {cleaner &&
      <ContainerBox>
          <NavRoutesDash profile/>
          <BoxProfile>
            <FlexBoxAvatar>
                <Label >Avatar</Label>
                <BoxAvatar >               
                    <Avatar src='/avatar.png' />
                    <EditAvatar>
                        <Edit >Edit</Edit>
                        <Remove>Remove</Remove>
                    </EditAvatar>
                </BoxAvatar>
            </FlexBoxAvatar>
            <BoxInputs>
              <InputAlt label='first name' placeholder='Ryan' />
              <InputAlt label='last name'  placeholder='Lucas' />
              <InputAlt label='E-mail'  placeholder='ryanlucasfr@gmail.com' />
              <InputAlt label='Phone'  placeholder='34-8989-89898' />
              <InputAlt1 label='Type of cleaning'  placeholder='Dry cleaning' /> 
              <ButtonAlt valor='Save changes' /> 
            </BoxInputs>      
          </BoxProfile>
      </ContainerBox>
       
      }
    
    </Container>
   
  )
}