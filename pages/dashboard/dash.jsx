import styled from 'styled-components'
import Navdashboard from '../../src/components/layout/Navdashboard'
import Services from '../../src/components/layout/Services'
import NavRoutesDash from '../../src/components/layout/Navroutesdash'
import { useState } from 'react'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const StyledFlex = styled.div`
  display: flex;
  
`
const StyledFlexServices = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EAEAEA;
  width: 100%;
`
const NavdashboardAlt = styled(Navdashboard)`
@media (max-width: 1306px) {
  display: ${(props) => props.show ? 'flex' : 'none'};
}
 
`
export default function DashboardPage() {
  const  [showDash, setShowDash] = useState(false)

  const handleDash = () => {
    setShowDash(!showDash)
  }
  return (
    <Container>
      <StyledFlex>
        <NavdashboardAlt show={showDash} isDash />
        <StyledFlexServices>
            <NavRoutesDash onClickDash={handleDash}  dash type2 />
            <Services />
        </StyledFlexServices>
      </StyledFlex>
    </Container>
  )
}
