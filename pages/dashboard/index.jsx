import styled, { keyframes } from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../src/context/useContext'
import { useRouter } from 'next/router'
import axios from 'axios'

import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Services from '../../src/components/layout/Services'
import NavRoutesDash from '../../src/components/layout/Navroutesdash'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`

const StyledFlexServices = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eaeaea;
  width: 100%;
`
const NavBarDashboardAlt = styled(NavBarDashboard)`
  @media (max-width: 1306px) {
    display: ${(props) => (props.show ? 'flex' : 'none')};
    width: 287px;
    min-height: 100%;
    position: fixed;
    animation: ${(props) => (props.show ? slideRight : slideLeft)} 0.3s forwards;
    transform-origin: left;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  }
`

const slideRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

export default function DashboardPage() {
  const router = useRouter()
  const [userData, setUserData] = useContext(UserContext)
  const { user, userId } = userData
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const [showDash, setShowDash] = useState(false)

  const handleDash = () => {
    setShowDash(!showDash)
  }
  const verifyUser = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(
        'https://cleaner-project-be.vercel.app/user/verify-session',
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )
      setUserData(response.data)
    } catch (error) {
      router.push('/')
      console.error('Erro ao verificar sessão:', error)
    }
  }
  useEffect(() => {
    verifyUser()
  }, [showDash, user])
  return (
    <Container>
      <NavBarDashboardAlt onDash={handleDash} showDashBoard={showDash} show={showDash} isDash />
      <StyledFlexServices>
        <NavRoutesDash onClickDash={handleDash} dash type1 />
        <Services />
      </StyledFlexServices>
    </Container>
  )
}
