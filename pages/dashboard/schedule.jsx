import styled from 'styled-components'
import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Schedule from '../../src/components/schedule/Schedule'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledFlex = styled.div`
  display: flex;
`
const NavBarDashboardAlt = styled(NavBarDashboard)``
export default function SchedulePage() {
  return (
    <Container>
      <StyledFlex>
        <NavBarDashboardAlt isSchedule />
        <Schedule />
      </StyledFlex>
    </Container>
  )
}
