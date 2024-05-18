import styled, { keyframes } from 'styled-components'
import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Services from '../../src/components/layout/Services'
import NavRoutesDash from '../../src/components/layout/Navroutesdash'
import { useState } from 'react'

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
  const [showDash, setShowDash] = useState(false)

  const handleDash = () => {
    setShowDash(!showDash)
  }
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
