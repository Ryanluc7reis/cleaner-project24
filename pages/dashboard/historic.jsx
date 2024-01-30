import styled from 'styled-components'
import Navdashboard from '../../src/components/layout/Navdashboard'
import Historics from '../../src/components/historic/Historic'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledFlex = styled.div`
  display: flex;
`
export default function HistoricPage(){
  return(
      <Container>
        <StyledFlex>
          <Navdashboard />
          <Historics />
        </StyledFlex>
      </Container>
  )
}