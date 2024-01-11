import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useState } from 'react'
import React from 'react'
import BasicDateCalendar from '../calendario/Calendario'

const Container = styled.div`
  width: 100%;
  height: auto;
`
export const FlexDivEtapas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  @media (max-width: 426px) {
    width: 115%;
  }
`
export const DivEtapas = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  box-shadow:
    rgba(255, 255, 255, 0.19) 0px 2px 1px,
    rgba(237, 237, 237, 0.09) 0px 4px 2px,
    rgba(204, 204, 204, 0.09) 0px 8px 4px,
    rgba(211, 211, 211, 0.09) 0px 16px 8px,
    rgba(218, 218, 218, 0.09) 0px 32px 16px;
  @media (max-width: 600px) {
    height: 150px;
    display: grid;
    grid-template-columns: 70px 70px 70px;
  }
`
const FlexEtapas = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;
  opacity: ${(props) => (props.isClicked ? 0.5 : 1)};
  transition: opacity 0.1s ease; 
  gap: 4px;
  @media (max-width: 745px) {
    margin: 0;
  }
`
const Etapas = styled.h5`
  color: #212020d2;
  font-size: 16px;
`
const SubEtapas = styled.h5`
  font-size: 15px;
  color: #2c2c2c57;
  font-weight: 700;
`
const Barra = styled.div`
  width: 2px;
  height: 45px;
  margin-top: 7px;
  background-color: #20202096;
  @media (max-width: 600px) {
    width: 45px;
    height: 2px;
    display: none;
  }
`
const BarraAlt = styled(Barra)`
  width: 100%;
  height: 0.5px;
  background-color: #8585855a;
  z-index: 100;
  margin: 0;
`
const SetaDown = styled.img`
cursor: pointer;
opacity: ${(props) => (props.isClicked ? 0.5 : 1)};
  transition: opacity 0.1s ease; 
`

const BoxPlan = styled.div`
  display: ${(props) => props.boxplan1 ? 'flex' : 'none'};
  flex-direction: column;
  background: #ffffff;
  position: absolute;
  border: 1px solid #CCCCCC;
  top: 23%;
  left: 14%;
  z-index: 100;
  transform: translate(-3%,19%);
  width: 247px;
  height: 157px;
  overflow-y:scroll;
`
 const BoxDate1 = styled.div`
  display: ${(props) => props.boxdate1 ? 'flex' : 'none'};
  background: #ffffff;
  border: 1px solid #CCCCCC;
  position: absolute;
  top: 27%;
  transform: translate(-21%,1%);
  width: 324px;
  min-height: 287px;
  height: auto;
 `
 const BoxHour1 = styled.div`
  display: ${(props) => props.boxhour1 ? 'flex' : 'none'};
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #CCCCCC;
  position: absolute;
  top: 23%;
  transform: translate(82%,15%);
  width: 287px;
  height: 200px;
  overflow-y:scroll;
 `
 const BoxStartTime1 = styled.div`
  display: ${(props) => props.boxstarttime1 ? 'flex' : 'none'};
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #CCCCCC;
  position: absolute;
  top: 23%;
  right: 20%;
  transform: translate(90%,15%);
  width: 300px;
  height: 200px;
  overflow-y:scroll;
 `
 const TextOptions = styled.h4`
  font-size: 17px;
  color: #999999;
  font-weight: 600;
  min-width: 100%;
  padding: 9px 10px;
  :hover{
    background-color: #80808058;
    cursor: pointer;
  }
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
  `
 const ContOptions = styled.div`
 `
const listHours = [
  '2', '2.5', '3', '3.5', '4',
  '5', '5.5', '6', '7', '8'
]
const listStartTime = [
  '07:00 AM','07:30 AM','08:00 AM',
  '08:30 AM','09:00 AM','09:30 AM',
  '10:00 AM','10:30 AM','11:00 AM',
  '11:30 AM','12:00 AM','12:30 AM',
  '01:00 PM','01:30 PM','02:00 PM',
  '02:30 PM','03:00 PM','03:30 PM',
  '04:00 PM','04:30 PM','05:00 PM',
  '05:30 PM','06:00 PM','06:30 PM',
  '07:00 PM'

]
const listPlans = ['Optional','Basic','Medium','Complete']
export default function BarraEtapas(props) {
  const [Updateplan, setUpdatePlan] = useState(false)
  const [UpdateHour, setUpdateHour] = useState(false)
  const [UpdateDate, setUpdateDate] = useState(false)
  const [UpdateStartTime, setUpdateStartTime] = useState(false)
  const [BoxPlans, setBoxPlans ] = useState(false)
  const [BoxDate, setBoxDate] = useState(false)
  const [BoxHour, setBoxHour ] = useState(false)
  const [BoxStartTime, setBoxStartTime ] = useState(false)
  const [isFlexEtapasClicked, setIsFlexEtapasClicked] = useState(false);
  const [isFlexEtapasClicked2, setIsFlexEtapasClicked2] = useState(false);
  const [isFlexEtapasClicked3, setIsFlexEtapasClicked3] = useState(false);
  const [isFlexEtapasClicked4, setIsFlexEtapasClicked4] = useState(false);
  const router = useRouter()
  const { cardValues, region, selectedDate, selectedHour, inputUpdateHour } = router.query

  const handleFlexEtapasClick = () => {
    setIsFlexEtapasClicked(!isFlexEtapasClicked);
    setTimeout(() => {
      setIsFlexEtapasClicked(false);
    }, 100);
    
  }; 
  const handleFlexEtapasClick2 = () => {
    setIsFlexEtapasClicked2(!isFlexEtapasClicked2);
    setTimeout(() => {
      setIsFlexEtapasClicked2(false);
    }, 100);
    
  }; 
  const handleFlexEtapasClick3 = () => {
    setIsFlexEtapasClicked3(!isFlexEtapasClicked3);
    setTimeout(() => {
      setIsFlexEtapasClicked3(false);
    }, 100);
    
  }; 
  const handleFlexEtapasClick4 = () => {
    setIsFlexEtapasClicked4(!isFlexEtapasClicked4);
    setTimeout(() => {
      setIsFlexEtapasClicked4(false);
    }, 100);
    
  }; 
  const updatePlan = (newplan) => {
    setUpdatePlan(newplan)
    setBoxPlans(!BoxPlans)
  }
  const updateHour = (newHour) => {
    setUpdateHour(newHour)
    setBoxHour(!BoxHour)
  }
  const updateStatTime = (newStartTime) => {
    setUpdateStartTime(newStartTime)
    setBoxStartTime(!BoxStartTime)
  }
  const updateDate = (date) => {
    let getdate = `${date.$d.toDateString()} `
    setUpdateDate(getdate)
    setBoxDate(!BoxDate)
  }
  return(
    <Container>
      <DivEtapas>
        <FlexEtapas>
          <Etapas>{region}</Etapas>
          <SubEtapas>LOCATION</SubEtapas>
        </FlexEtapas>
        <Barra />
        <FlexEtapas isClicked={isFlexEtapasClicked} >
          <Etapas>{Updateplan ? Updateplan : cardValues}</Etapas>
          <SubEtapas>PLAN</SubEtapas>
        </FlexEtapas>
        <SetaDown 
        src="/setadown1.svg" 
        height="45px"
        width="30px"
        onClick={() => handleFlexEtapasClick(setBoxPlans(!BoxPlans))}
        isClicked={isFlexEtapasClicked}
        />
        <BoxPlan boxplan1={BoxPlans}>
              {listPlans.map((item,index) => (
                <ContOptions key={index} >
                  <TextOptions 
                  style={{backgroundColor :  Updateplan === item && '#80808058'}} 
                  onClick={() => updatePlan(`${item}`)}>{item}</TextOptions>
                  {index < 3 && <BarraAlt/>}               
                </ContOptions>
              ))}
        </BoxPlan>
        <Barra />
        <FlexEtapas isClicked={isFlexEtapasClicked2}>
          <Etapas>{UpdateDate ? UpdateDate : selectedDate}</Etapas>
          <SubEtapas>DATE</SubEtapas>
        </FlexEtapas>
        <SetaDown 
        src="/setadown1.svg" 
        height="45px"
        width="30px"
        onClick={() => handleFlexEtapasClick2(setBoxDate(!BoxDate))}
        isClicked={isFlexEtapasClicked2}
        />
        <BoxDate1 boxdate1={BoxDate}>
          <DateCalenderAlt  onChange={updateDate} />
        </BoxDate1>
        <Barra />
        <FlexEtapas isClicked={isFlexEtapasClicked3}>
          <Etapas>{UpdateHour ? UpdateHour : selectedHour}</Etapas>
          <SubEtapas>DURATION</SubEtapas>
        </FlexEtapas>
        <SetaDown 
        src="/setadown1.svg" 
        height="45px"
        width="30px"
        onClick={() => handleFlexEtapasClick3(setBoxHour(!BoxHour))}
        isClicked={isFlexEtapasClicked3}
        />
        <BoxHour1 boxhour1={BoxHour}>
          {listHours.map((item,index) => (
            <ContOptions key={index}>
                 <TextOptions 
                  style={{backgroundColor :  UpdateHour === `${item} hours` && '#80808058'}}
                  onClick={() => updateHour(`${item} hours`)}>{item} hours</TextOptions>
                 {index < 9 && <BarraAlt/>} 
            </ContOptions> 
          ))}
        </BoxHour1>
        <Barra />
        <FlexEtapas isClicked={isFlexEtapasClicked4}>
          <Etapas>{UpdateStartTime ? UpdateStartTime : inputUpdateHour}</Etapas>
          <SubEtapas>STARTING TIME</SubEtapas>
        </FlexEtapas>
        <SetaDown 
        src="/setadown1.svg" 
        height="45px"
        width="30px"
        onClick={() => handleFlexEtapasClick4(setBoxStartTime(!BoxStartTime))}
        isClicked={isFlexEtapasClicked4}
        />
        <BoxStartTime1 boxstarttime1={BoxStartTime}>
          {listStartTime.map((item,index) => (
            <ContOptions key={index}>
                 <TextOptions 
                 style={{backgroundColor :  UpdateStartTime === item && '#80808058'}}
                  onClick={() => updateStatTime(`${item}`)}>{item}</TextOptions>
                 {index < 24 && <BarraAlt/>} 
            </ContOptions>
          ))}
        </BoxStartTime1>
      </DivEtapas>
    </Container>
    
  )
}