import styled from 'styled-components'
import Navdashboard from '../../src/components/layout/Navdashboard'
import Schedule from '../../src/components/schedule/Schedule'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledFlex = styled.div`
  display: flex;
`
const NavdashboardAlt = styled(Navdashboard)`

`
export default function SchedulePage(){
  return(
      <Container>
        <StyledFlex>
          <NavdashboardAlt />
          <Schedule />
        </StyledFlex>
      </Container>
  )
}