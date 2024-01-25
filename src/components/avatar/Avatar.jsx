import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const  BoxAvatar = styled.div`
  background-color: #575757;
  width: 36%;
  height: 80%;
  margin: 10px;
  border-radius: 7px;;
  border: 1px solid #fb2d2d;
  align-items: center;
  display: flex;
  justify-content: center;
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

export default function AvatarProfile() {
  return(
    <Container>
        <Label >Avatar</Label>
        <BoxAvatar >               
          <Avatar src='/avatar.png' />
        </BoxAvatar>
    </Container>
    
  )
}