import styled from 'styled-components'
import Navdashboard from '../../src/components/layout/Navdashboard'
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
        <Navdashboard isNotifications />
        <Notifications />
      </StyledFlex>
    </Container>
  )
}
