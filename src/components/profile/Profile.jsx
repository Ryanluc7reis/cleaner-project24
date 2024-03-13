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
const BoxCont = styled.div`
  width: 400px;
  height: 360px;
  background-color: #fff;
  border-radius: 15px;
`
const BoxContAlt = styled(BoxCont)`
  width: 590px;
`
const FlexBoxCont = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 35px 0px 35px 20px;
  gap: 28px;
`
const BoxAvatar = styled.div`
  width: 300px;
  height: 80%;
  border-radius: 7px;
  display: flex;
  margin: 20px 48px;
  flex-direction: column;
  padding: 20px 52px;
`
const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 105px;
  background: #3030f4ce;

  border: 4px solid #1f1f8e;
`
const InputAlt = styled(Input)`
  width: 270px;
  padding: 10px;
  background: transparent;
  border: none;
`
const InputAlt1 = styled(Input)`
  width: 390px;
  padding: 10px;
`
const Barra = styled.div`
  height: 1px;
  width: 90%;
  background-color: #2a2af3d3;
`
const BoxInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 40px;
  margin-left: 17px;
`
const ButtonAlt = styled(Button)`
  height: 45px;
  width: 170px;
  margin: 25px 90px 0px 100px;
`
const ButtonAlt1 = styled(Button)`
  height: 45px;
  width: 170px;
  margin-top: 45px;
`
const Label = styled.h2`
  padding: 9px;
  color: #a7a7a7;
`
const EditAvatar = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 50px;
`
const Remove = styled.h2`
  color: red;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: darkred;
  }
`
const Edit = styled.h2`
  color: #3232f7;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: darkred;
  }
`
const FlexBoxAvatar = styled.div`
  display: flex;
  flex-direction: column;
`
const ContInput = styled.div`
  display: flex;
  flex-direction: column;
`
export default function Profile({ user, cleaner }) {
  return (
    <Container>
      {user && (
        <ContainerBox>
          <NavRoutesDash profile type1 />
          <FlexBoxCont>
            <BoxCont>
              <FlexBoxAvatar>
                <Label>Avatar</Label>
                <BoxAvatar>
                  <Avatar src="/avatar.png" />
                  <EditAvatar>
                    <Edit>Edit</Edit>
                    <Remove>Remove</Remove>
                  </EditAvatar>
                </BoxAvatar>
              </FlexBoxAvatar>
            </BoxCont>
            <BoxContAlt>
              <Label>Account Details</Label>
              <BoxInputs>
                <ContInput>
                  <InputAlt placeholder="First name" />
                  <Barra />
                </ContInput>
                <ContInput>
                  <InputAlt placeholder="Last name" />
                  <Barra />
                </ContInput>
                <ContInput>
                  <InputAlt placeholder="E-mail" />
                  <Barra />
                </ContInput>
                <ContInput>
                  <InputAlt placeholder="Phone" />
                  <Barra />
                </ContInput>
                <ContInput>
                  <InputAlt placeholder="Adress" />
                  <Barra />
                </ContInput>
                <ContInput>
                  <InputAlt placeholder="Region" />
                  <Barra />
                </ContInput>
                <ButtonAlt1 valor="Save changes" />
              </BoxInputs>
            </BoxContAlt>
          </FlexBoxCont>
        </ContainerBox>
      )}
      {cleaner && (
        <ContainerBox>
          <NavRoutesDash profile type1 />
          <FlexBoxCont>
            <BoxCont>
              <FlexBoxAvatar>
                <Label>Avatar</Label>
                <BoxAvatar>
                  <Avatar src="/avatar.png" />
                  <EditAvatar>
                    <Edit>Edit</Edit>
                    <Remove>Remove</Remove>
                  </EditAvatar>
                </BoxAvatar>
              </FlexBoxAvatar>
            </BoxCont>
            <BoxContAlt>
              <Label>Account Details</Label>
              <BoxInputs>
                <ContInput>
                  <InputAlt placeholder="First name" />
                  <Barra />
                </ContInput>
                <ContInput>
                  <InputAlt placeholder="Last name" />
                  <Barra />
                </ContInput>
                <ContInput>
                  <InputAlt placeholder="E-mail" />
                  <Barra />
                </ContInput>
                <ContInput>
                  <InputAlt placeholder="Phone" />
                  <Barra />
                </ContInput>
                <ContInput>
                  <InputAlt placeholder="Adress" />
                  <Barra />
                </ContInput>
                <ContInput>
                  <InputAlt placeholder="Type of cleaning" />
                  <Barra />
                </ContInput>
                <ButtonAlt1 valor="Save changes" />
              </BoxInputs>
            </BoxContAlt>
          </FlexBoxCont>
        </ContainerBox>
      )}
    </Container>
  )
}
