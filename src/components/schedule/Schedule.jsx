import styled from 'styled-components'
import NavRoutesDash from '../layout/Navroutesdash'
import BasicDateCalendar from '../calendario/Calendario'
import Button from '../form/Button'

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #efefef;
` 
const BoxSchedule = styled.div`
  background: #fff;
  min-width: 90%;
  height: 80%;
  margin: 61px 50px 0px 50px ;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`

const DateCalenderAlt = styled(BasicDateCalendar)`
> div {
  > .css-cyfsxc-MuiPickersCalendarHeader-labelContainer {
    color: #212020d2;
    font-size: 17px;
    font-weight: 700;
  }
}
span {
  font-size: 14px;
  font-weight: 700;
  color: #212020d2;
}
button {
  font-size: 12px;
}
border: 2px solid #56648f;
border-radius: 25px;
margin-top: 50px ;
background-color: #eff5ffb8;
`
const FlexTitleText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 0px;
  align-items: center;
`
const TitleText = styled.h1`
  font-weight: 500;
  color: #a4a4a4f5;
`
const TitleTextSub = styled.h2`
  font-weight: 500;
  display: flex;
  gap: 4px;
  align-items: center;
  color: #979797f5;
`
const TitleTextSubAlt = styled(TitleText)`
  font-weight: 500;
  color: #4f4f4ff5;
  font-size: 18px;
`
const ButtonAlt = styled(Button)`
  color: #fff; 
  padding: 7px;
  width: 130px;
  font-size: 14px;
  background-color: red;
`
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px 35px;
`
const FlexTextDate = styled.div`
  display: flex;
  gap: 35px;
  flex-direction: column;
`

export default function Schedule() {
  return(
    <Container>
      <NavRoutesDash schedule type1 />
      <BoxSchedule>
        <FlexTitleText>
          <TitleText>Set your available schedule</TitleText>
          <ButtonAlt>Block schedule</ButtonAlt>
        </FlexTitleText>
        <StyledFlex>
          <DateCalenderAlt />
          <FlexTextDate>
            <TitleTextSub>
              <TitleTextSubAlt>Schedule avaible:</TitleTextSubAlt>
               27 January Wed - 27 Fevereiro Wed 
            </TitleTextSub>
            <TitleTextSub>
              <TitleTextSubAlt>Schedule avaible:</TitleTextSubAlt>
               27 January Wed - 27 Fevereiro Wed 
            </TitleTextSub>
            <TitleTextSub>
              <TitleTextSubAlt>Schedule avaible:</TitleTextSubAlt>
               27 January Wed - 27 Fevereiro Wed 
            </TitleTextSub>
          </FlexTextDate>
        </StyledFlex>
      </BoxSchedule>
    </Container>
   
  )
}