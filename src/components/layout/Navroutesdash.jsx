import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 70px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TypeRouteTitle = styled.h1`
  color: black;
  font-size: 22px;
  font-weight: 400;
`
const ImgAvatar = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid silver;
  border-radius: 20px;
`
const ImgNotifications = styled.img`
  width: 33px;
  height: 33px;
`
const StyledFlex = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`
const LogOut = styled.a`
  color: #223ff6;
  cursor: pointer;
  font-size: 17px;
  display: flex;
  text-decoration: underline;
  :hover{
    color: darkred;
  }

`
export default function NavRoutesDash({profile,notifications, schedule, historic}){
  const getTypeRouteValue = () => {
    if (profile) {
      return "Profile";
    } else if (notifications) {
      return "Notifications";
    } else if (schedule) {
      return "Schedule";
    } else if (historic) {
      return "Historic";
    }
  };
  return(
    <Container>
        <TypeRouteTitle >{getTypeRouteValue()}</TypeRouteTitle>
        <StyledFlex>
          <ImgAvatar src='/avatar.png'/>
          <ImgNotifications src='/bell.png' />
          <LogOut>Logout</LogOut>
        </StyledFlex>
       
    </Container>
  )
}