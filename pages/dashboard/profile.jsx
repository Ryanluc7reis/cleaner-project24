import styled from 'styled-components'
import Navdashboard from '../../src/components/layout/Navdashboard'
import Profile from '../../src/components/profile/Profile'


const Container = styled.div`
  width: 100%;
  height: auto;
  background: #eaeaea;
`
const StyledFlex = styled.div`
  display: flex;
`


export default function ProfilePage(){
  return(
      <Container>
        <StyledFlex>
          <Navdashboard isProfile />      
          <Profile user />
        </StyledFlex>
      </Container>
  )
}