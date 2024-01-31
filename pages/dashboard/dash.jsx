import styled from 'styled-components'
import Navdashboard from '../../src/components/layout/Navdashboard'
import Services from '../../src/components/layout/Services'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const StyledFlex = styled.div`
  display: flex;
`
export default function DashboardPage() {
  return (
    <Container>
      <StyledFlex>
        <Navdashboard isDash/>
        <Services />
      </StyledFlex>
    </Container>
  )
}
