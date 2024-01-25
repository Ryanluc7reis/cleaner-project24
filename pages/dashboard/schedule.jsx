import styled from 'styled-components'
import Navdashboard from '../../src/components/layout/Navdashboard'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledFlex = styled.div`
  display: flex;
`
export default function SchedulePage(){
  return(
      <Container>
        <StyledFlex>
          <Navdashboard />
            <h1>schedule</h1>
        </StyledFlex>
      </Container>
  )
}