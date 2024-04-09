import styled from 'styled-components'
import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Notifications from '../../src/components/notificaçao/Notifications'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledFlex = styled.div`
  display: flex;
`
export default function NotificationsPage() {
  return (
    <Container>
      <StyledFlex>
        <NavBarDashboard isNotifications />
        <Notifications />
      </StyledFlex>
    </Container>
  )
}
