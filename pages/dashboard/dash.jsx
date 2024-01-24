import styled from 'styled-components'
import Navdashboard from '../../src/components/layout/Navdashboard'

const Container = styled.div`
  width: 100%;
  height: auto;
`
export default function DashboardPage(){
  return(
      <Container>
          <Navdashboard />
      </Container>
  )
}