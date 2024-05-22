import styled, { keyframes } from 'styled-components'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'

import axios from 'axios'
import Logo from '../logo/Logo'
import Login from './Login'
import { UserContext } from '../../context/useContext'
import { LoginContext } from '../../context/useContextLogin'

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
const StyledRegisterCleaner = styled.p`
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
const StyledRegisterCleanerAlt = styled(StyledRegisterCleaner)`
  @media (max-width: 769px) {
    display: none;
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
  height: 113px;
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
const StyledOptionsLoginAlt = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  @media (max-width: 635px) {
    font-size: 14px;
  }
`

const NavOptions = styled.div`
  text-align: center;
  box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);
  background: ${(props) => props.theme.colors.azulclaro};
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 101;
  width: 300px;
  height: 170px;
  gap: 19px;
  position: fixed;
  top: 10%;
  right: 8%;

  animation: ${fadeIn} 0.4s ease-in-out;
  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 425px) {
    top: 7%;
    right: 10%;
  }
`
const NavOptionsAlt = styled(NavOptions)`
  height: 100px;
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
const Options = styled.p`
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
const OptionsAlt = styled.a`
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
const LogoutAndMyDaschboard = styled.a`
  color: white;
  cursor: pointer;
  font-size: 13px;
  @media (max-width: 635px) {
    font-size: 17px;
    font-weight: 600;
  }
`
const LogoutAlt = styled(LogoutAndMyDaschboard)`
  margin-top: 23px;
  color: #242c99b7;
  font-size: 16px;
  font-weight: 600;
`
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`

export default function Navbar({ type1, type2, ...props }) {
  const router = useRouter()
  const [showD, setShowD] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [login, setLogin] = useContext(LoginContext)
  const [userData, setUserData] = useContext(UserContext)
  const { user, userId } = userData
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (!event.target.closest('#showD')) {
        setShowD(false)
      }
    }

    document.addEventListener('click', handleClickOutSide, true)
    verifyUser()
  }, [showLogin, user])

  const verifyUser = async () => {
    try {
      const response = await axios.get(
        'https://cleaner-project-be.vercel.app/user/verify-session',
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )
      if (response.status === 200) {
        setShowLogin(false)
      }
      setUserData(response.data)
    } catch (error) {
      console.error('Erro ao verificar sessão:', error)
      setUserData(false)
    }
  }
  const handleLogout = async () => {
    try {
      const config = {
        headers: {
          [AUTH_NAME]: token
        }
      }
      const response = await axios.post(
        'https://cleaner-project-be.vercel.app/user/logout',
        {},
        config
      )
      if (response.status === 200) {
        setUserData(false)
        setShowLogin(false)
      }
    } catch (error) {
      console.error('Erro durante o logout:', error)
    }
  }

  const handleClickOutsideEditAddress = () => {
    if (showLogin) {
      setShowLogin(false)
    }
  }
  const handleClickOutsideLogin = () => {
    if (login) {
      setLogin(false)
    }
  }

  const handleLogin = () => {
    setShowLogin(!showLogin)
  }

  return (
    <Container onClik={handleClickOutsideEditAddress} {...props}>
      {type1 && (
        <>
          {showLogin && <Login onClose={handleLogin} />}
          <StyledNavBarAlt>
            <Logo onClick={() => router.push('/')} />
            {user ? (
              <StyledFlex>
                <StyledOptionsLoginAlt>
                  <h1 style={{ color: 'white' }}>Olá, {user}</h1>
                  <LogoutAndMyDaschboard onClick={() => router.push('/dashboard')}>
                    MyDashboard
                  </LogoutAndMyDaschboard>
                  <LogoutAndMyDaschboard onClick={handleLogout} style={{ color: 'white' }}>
                    Logout
                  </LogoutAndMyDaschboard>
                  <StyledRegisterCleanerAlt onClick={(e) => router.push('/signupAscleaner')}>
                    Register as cleaner
                  </StyledRegisterCleanerAlt>
                </StyledOptionsLoginAlt>
              </StyledFlex>
            ) : (
              <StyledOptionsLogin>
                <StyledLogin onClick={() => setShowLogin(!showLogin)}>LOGIN</StyledLogin>
                <StyledRegisterCleaner onClick={(e) => router.push('/signupAscleaner')}>
                  Register as cleaner
                </StyledRegisterCleaner>
              </StyledOptionsLogin>
            )}

            {user ? (
              <NavOptionsAlt show={showD}>
                <Options onClick={() => router.push('/signupAscleaner')}>
                  REGISTER AS CLEANER
                </Options>
              </NavOptionsAlt>
            ) : (
              <NavOptions show={showD}>
                <Options onClick={() => setShowLogin(!showLogin)}>LOGIN</Options>
                <Barra />
                <Options onClick={() => router.push('/signupAscleaner')}>
                  REGISTER AS CLEANER
                </Options>
              </NavOptions>
            )}

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
          </StyledNavBarAlt>
        </>
      )}

      {type2 && (
        <>
          {user ? (
            <div>
              <StyledNavbar>
                <Logo colorblue />
                <FlexLogin>
                  <CardsLogo src="/metodosPay1.jpg" height="45px" width="133px" />
                  <BarraAlt />
                  <OptionsAlt>Olá, {user}</OptionsAlt>
                  <LogoutAlt onClick={handleLogout}>Logout</LogoutAlt>
                </FlexLogin>
              </StyledNavbar>
            </div>
          ) : (
            <>
              {(showLogin && <Login onClose={handleLogin} />) ||
                (login && <Login onClose={handleClickOutsideLogin} />)}

              <StyledNavbar>
                <Logo colorblue />
                <FlexLogin>
                  <CardsLogo src="/metodosPay1.jpg" height="45px" width="133px" />
                  <BarraAlt />
                  <OptionsAlt onClick={handleLogin}>LOG-IN</OptionsAlt>
                </FlexLogin>
              </StyledNavbar>
            </>
          )}
        </>
      )}
    </Container>
  )
}
