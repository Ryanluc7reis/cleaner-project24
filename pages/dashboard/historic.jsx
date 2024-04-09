import styled from 'styled-components'
import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Historics from '../../src/components/historic/Historic'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledFlex = styled.div`
  display: flex;
`
export default function HistoricPage() {
  return (
    <Container>
      <StyledFlex>
        <NavBarDashboard isHistoric />
        <Historics />
      </StyledFlex>
    </Container>
  )
}
