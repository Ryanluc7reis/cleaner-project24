import styled from 'styled-components'

const Container = styled.div`
  width: auto;
  height: auto;
`
const  BoxAvatar = styled.div`
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
const Label = styled.h2`
  margin: 7px 20px;
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

export default function AvatarProfile() {
  return(
    <Container>
        <Label >Avatar</Label>
        <BoxAvatar >               
          <Avatar src='/avatar.png' />
          <EditAvatar>
            <Edit >Edit</Edit>
            <Remove>Remove</Remove>
          </EditAvatar>
        </BoxAvatar>
        
    </Container>
    
  )
}