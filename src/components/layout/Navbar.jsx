import styled, { keyframes } from 'styled-components'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Logo from '../logo/Logo'
import Login from './Login'
import Button from '../form/Button'
import { UserContext } from '../../context/useContext'

const fadeIn = keyframes`
  from {
    opacity: 0;
   
  }
  to {
    opacity: 6;
    
  }
`
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
`
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
`
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
`
const StyledNavBarAlt = styled.div`
  margin: 0 auto;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 21px;
`
const StyledOptionsLogin = styled.div`
  display: flex;
  gap: 13px;
  @media (max-width: 768px) {
    display: none;
  }
`
const StyledOptionsLoginAlt = styled(StyledOptionsLogin)`
  align-items: center;
`

const NavOptions = styled.div`
  text-align: center;
  box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);
  background: ${(props) => props.theme.colors.azulclaro};
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  width: 300px;
  height: 170px;
  gap: 19px;
  position: absolute;
  bottom: 50%;
  transform: translate(-60%);
  animation: ${fadeIn} 0.4s ease-in-out;
  @media (min-width: 769px) {
    display: none;
  }
  @media (max-width: 769px) {
    transform: translate(210%, -80%);
  }
  @media (max-width: 578px) {
    transform: translate(115%, -30%);
  }
  @media (max-width: 478px) {
    transform: translate(138%, -30%);
  }
  @media (max-width: 358px) {
    transform: translate(120%, -30%);
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
  @media (max-width: 358px) {
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
const Logout = styled.a`
  color: white;
  cursor: pointer;
  font-size: 13px;
`
const LoginAlt = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background: #ffffff58;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.showLogin ? 'flex' : 'none')};
`
const ButttonLogin = styled(Button)`
  width: 100%;
  position: fixed;
  bottom: 0;
`
const Mydashboard = styled(Logout)``

export default function Navbar({ type1, type2, username, ...props }) {
  const router = useRouter()
  const [showD, setShowD] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [userData, setUserData] = useContext(UserContext)
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (!event.target.closest('#showD')) {
        setShowD(false)
      }
    }

    document.addEventListener('click', handleClickOutSide, true)
  }, [setShowLogin])

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: token
        }
      }
      const response = await axios.post('http://localhost:3333/user/logout', {}, config)
      if (response.status === 200) {
        console.log('Logout realizado com sucesso')
        setUserData(false)
        setShowLogin(false)
      }
    } catch (error) {
      console.error('Erro durante o logout:', error)
    }
  }
  return (
    <Container {...props}>
      {type1 && (
        <div>
          <LoginAlt showLogin={showLogin}>
            <Login />
            <ButttonLogin onClick={() => setShowLogin(false)}>close</ButttonLogin>
          </LoginAlt>
          <StyledNavBarAlt>
            <Logo onClick={() => router.push('/')} />
            <NavOptions show={showD}>
              <Options href="/login">LOGIN</Options>
              <Barra />
              <Options href="/signupAscleaner">REGISTER AS CLEANER</Options>
            </NavOptions>
            {showD ? (
              <DotsX src="/Xwhite.svg" height="45px" width="80px" />
            ) : (
              <Dots
                id="showD"
                onClick={() => setShowD(!showD)}
                src="/hamburgericon.png"
                height="65px"
                width="75px"
              />
            )}
            <StyledOptionsLogin>
              <StyledLogin onClick={() => setShowLogin(!showLogin)}>LOGIN</StyledLogin>
              <StyledRegisterCleaner onClick={(e) => router.push('/signupAscleaner')}>
                Register as cleaner
              </StyledRegisterCleaner>
            </StyledOptionsLogin>
          </StyledNavBarAlt>
        </div>
      )}
      {username && (
        <StyledNavBarAlt>
          <Logo onClick={() => router.push('/')} />
          <StyledOptionsLoginAlt>
            <h1 style={{ color: 'white' }}>Olá, {username}</h1>
            <Mydashboard onClick={() => router.push('/dashboard')}>Dashboard</Mydashboard>
            <Logout onClick={handleLogout} style={{ color: 'white' }}>
              Logout
            </Logout>
            <StyledRegisterCleaner onClick={() => router.push('/signupAscleaner')}>
              Register as cleaner
            </StyledRegisterCleaner>
          </StyledOptionsLoginAlt>
        </StyledNavBarAlt>
      )}

      {type2 && (
        <StyledNavbar>
          <Logo colorblue />
          <FlexLogin>
            <CardsLogo src="/metodosPay1.jpg" height="45px" width="133px" />
            <BarraAlt />
            <OptionsAlt onClick={() => router.push('/login')}>LOG-IN</OptionsAlt>
          </FlexLogin>
        </StyledNavbar>
      )}
    </Container>
  )
}
