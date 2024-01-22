import styled, {keyframes} from 'styled-components';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Logo from '../logo/Logo';
const fadeIn = keyframes`
  from {
    opacity: 0;
   
  }
  to {
    opacity: 6;
    
  }
`;
const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledRegisterCleaner = styled.a`
  cursor: pointer;
  font-size: 24px;
  background: #56648f;
  padding: 15px;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  :hover {
    background-color: #677db7;
  }
`;
const StyledLogin = styled.a`
  cursor: pointer;
  font-size: 20px;
  padding-top: 15px;
  color: #fff;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover {
    color: #677db7;
  }
`;
const StyledNavbar = styled.div`
  margin: 0 auto;
  height: 100px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    padding-bottom: 8px;
  }
`;
const StyledOptionsLogin = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavOptions = styled.div`
  text-align: center;
  box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);
  background: ${(props) => props.theme.colors.azulclaro};
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center ;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  width: 300px;
  height: 170px;
  gap: 19px;
  position: absolute;
  bottom: 50%;
  transform: translate( -60%);
  animation: ${fadeIn} 0.4s ease-in-out ;
  @media (min-width: 769px){
    display: none;
  }
  @media (max-width: 769px){
    transform: translate( 210%, -80%);
  }
  @media (max-width: 578px){
    transform: translate( 115%, -30%);
  }
  @media (max-width: 478px){
    transform: translate( 138%, -30%);
  }
  @media (max-width: 358px){
    transform: translate( 120%, -30%)
  }
`
const DotsX = styled.img`
   display: none;
   margin-top: 20px;
  @media (max-width: 768px) {
    display: flex; 
  }
`
const Dots = styled.img`
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`
const Options = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: white;
  @media (max-width: 358px){
    font-size: 27px;
  }
`
const Barra = styled.div`
  width: 300px;
  height: 1px;
  background-color: white;
  z-index: 102;
`
const FlexLogin = styled.div`
  display: flex;
  gap: 13px;
`
const CardsLogo = styled.img`
  margin-top: 8px;
`
const OptionsAlt = styled(Options)`
  cursor: pointer;
  font-size: 22px;
  color: #242c99b7;
  margin-right: 15px;
  margin-top: 18px;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  :hover {
    color: #677cb76d;
  }
`
const BarraAlt = styled(Barra)`
  width: 2px;
  height: 45px;
  margin-top: 7px;
  background-color: #20202096;
`

export default function Navbar({ type1 , type2, ...props}) {
  const router = useRouter();
  const [showD, setShowD] = useState(false)
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (event.target.closest('showDD') === null)  {
        setShowD(false);
      }
    }
    document.addEventListener('click',handleClickOutSide,true)
   
  },[])
  
  return (
    <Container {...props}> 
     {type1 &&  
     <StyledNavbar>
        <Logo onClick={() => router.push('/')} />
        <NavOptions  show={showD}>
          <Options href='/login'>LOGIN</Options>
          <Barra />
          <Options href='/signupAscleaner'>REGISTER AS CLEANER</Options>
        </NavOptions>

        {showD ? <DotsX src='/Xwhite.svg' height='45px' width='80px' /> 
        :  <Dots id='showDD' onClick={() =>setShowD(!showD) } src='/hamburgericon.png' height= '65px' width='75px' />}
        <StyledOptionsLogin>
            <StyledLogin onClick={() => router.push('/login')}>LOGIN</StyledLogin>
            <StyledRegisterCleaner onClick={(e) =>router.push('/signupAscleaner')}>Register as cleaner</StyledRegisterCleaner>
        </StyledOptionsLogin>
      </StyledNavbar>
      }
      
    
      {type2  &&
      <StyledNavbar>
        <Logo colorblue />
        <FlexLogin>
          <CardsLogo src="metodosPay.JPG" height="45px" width="133px" />
          <BarraAlt />
          <OptionsAlt onClick={() => router.push('/login')}>LOG-IN</OptionsAlt>
        </FlexLogin>
      </StyledNavbar>
    }
    </Container>
    
  
     
  );
}
