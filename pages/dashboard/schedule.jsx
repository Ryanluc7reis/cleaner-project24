import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Schedule from '../../src/components/schedule/Schedule'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledFlex = styled.div`
  display: flex;
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

export default function SchedulePage() {
  const [showDash, setShowDash] = useState(false)

  const handleDash = () => {
    setShowDash(!showDash)
  }

  return (
    <Container>
      <StyledFlex>
        <NavBarDashboardAlt
          onDash={handleDash}
          showDashBoard={showDash}
          show={showDash}
          isSchedule
        />
        <Schedule isDash={handleDash} />
      </StyledFlex>
    </Container>
  )
}
