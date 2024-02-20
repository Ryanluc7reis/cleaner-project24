import styled from 'styled-components'
import Input from  '../form/Input'
import { useState } from 'react'

const Container = styled.div`
  width: auto;
  height: auto;
`
const ContainerBox = styled.div`
  width: 100%;
  height: 70px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media  (max-width: 1306px) {
   
  }
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
  background: #fff;
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
  :hover{
    color: darkred;
  }

`
const InputAlt = styled(Input)`
  background: transparent;
  padding: 6px;
  border: none;
  width: 200px;
`
const Barra = styled.hr`
  width: 100%;
`
const Lupa = styled.img`
  padding: 5px;
  border: 1px solid silver;
  border-radius: 30px;
  box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background: #fff;
`
const FlexInput = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledFlexSearch = styled.div`
  display: flex;
`
const Hamburguer = styled.img`
  display: none;
  width: 60px;
  height: 45px;
  @media (max-width: 1306px){
    display: flex;
  }
`
export default function NavRoutesDash({dash, profile,notifications, schedule, historic, type1, type2,...props }){
  const [clicked, setClicked] = useState(false)
  const handleClick = (click) => {
    props.onClickDash(click === setClicked(!clicked))
  }
  const getTypeRouteValue = () => {
    if (profile) {
      return "Profile";
    } else if (notifications) {
      return "Notifications";
    } else if (schedule) {
      return "Schedule";
    } else if (historic) {
      return "Historic";
    } else if (dash) {
      return "Services";
    }
  };
  return(
    <Container {...props}>
        {type1 &&
          <ContainerBox>
            <Hamburguer onClick={handleClick} src={clicked  ? '/x.png' : '/hamburgericon.png'}/>
            <TypeRouteTitle >{getTypeRouteValue()}</TypeRouteTitle>
            <StyledFlex>             
              <ImgAvatar src='/avatar.png'/>
              <ImgNotifications src='/bell.png' />
              <LogOut>Logout</LogOut>
            </StyledFlex>
          </ContainerBox>
        }
        {type2 && 
          <ContainerBox>
            <Hamburguer  onClick={handleClick} src={clicked  ? '/x.png' : '/hamburgericon.png'}/>
            <TypeRouteTitle >{getTypeRouteValue()}</TypeRouteTitle>
            <StyledFlex>
              <StyledFlexSearch>
                <FlexInput>
                    <InputAlt placeholder='Search...' />
                    <Barra />
                </FlexInput>
                <Lupa src='/lupa.png' />
              </StyledFlexSearch>
              <ImgAvatar src='/avatar.png'/>
              <ImgNotifications src='/bell.png' />
              <LogOut>Logout</LogOut>
            </StyledFlex>
          </ContainerBox>
        }
    </Container>
    
  )
}