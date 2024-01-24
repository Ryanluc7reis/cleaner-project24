import styled from "styled-components"
import Logo from '../../components/logo/Logo'

const Container = styled.div`
  width: 22%;
  height: 100vh;
  padding: 10px 26px;
  background: red;
`
const StyledLogo = styled(Logo)`
  margin: 10px 28px;
  font-size: 32px;
`
const Barra = styled.hr`
  background: gray;
  margin: 6px;
`
const FlexOption = styled.div`
  display: flex;
  width: 230px;
  height: 50px;
  padding: 6px 10px;
  background: purple;
  gap: 6px;
  align-items: center;
  margin: 15px;
`
const Option = styled.h2`
  color: #6f6f6fdc;
`
const ImgOption = styled.img`
  width: 30px;
  height: 27px;
`
export default function Navdashboard() {
  return(
    <Container>
      <StyledLogo />
      <Barra />
      <FlexOption>
          <ImgOption src='/usericon.png'/>
          <Option>Profile</Option>
      </FlexOption>
      <FlexOption>
          <ImgOption src='/agenda.png'/>
          <Option>Schedule</Option>
      </FlexOption>
      <FlexOption>
          <ImgOption src='/bell.png'/>
          <Option>Notifications</Option>
      </FlexOption>
    </Container>
  )
}