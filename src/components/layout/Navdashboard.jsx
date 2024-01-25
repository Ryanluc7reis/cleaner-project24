import styled from "styled-components"
import Logo from '../../components/logo/Logo'
import { useRouter } from 'next/router'
import { use } from "react"

const Container = styled.div`
  width: 22%;
  height: 100vh;
  padding: 10px 26px;
  background: red;
`
const StyledLogo = styled(Logo)`
  margin: 10px 43px;
  font-size: 32px;
`
const Barra = styled.hr`
  background: gray;
  margin: 2px;
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
  :hover{
    cursor: pointer;
    background-color: blue;
    transition: 0.3s;
  }
`
const Option = styled.h2`
  color: #6f6f6fdc;
`
const ImgOption = styled.img`
  width: 30px;
  height: 27px;
`
export default function Navdashboard() {
  const router = useRouter()
  return(
    <Container>
      <StyledLogo />
      <Barra />
      <FlexOption onClick={() => router.push('/dashboard/profile')}>
          <ImgOption src='/usericon.png'/>
          <Option>Profile</Option>
      </FlexOption>
      <FlexOption onClick={() => router.push('/dashboard/schedule')}>
          <ImgOption src='/agenda.png'/>
          <Option>Schedule</Option>
      </FlexOption>
      <FlexOption onClick={() => router.push('/dashboard/notifications')}>
          <ImgOption src='/bell.png'/>
          <Option>Notifications</Option>
      </FlexOption>
      <FlexOption onClick={() => router.push('/dashboard/historic')}>
          <ImgOption src='/history1.png'/>
          <Option>Historic</Option>
      </FlexOption>
    </Container>
  )
}