import styled, { keyframes } from 'styled-components'
import Logo from '../../src/components/logo/Logo'
import { useEffect, useState } from 'react'
import Cards from '../../src/components/cardsplan/Cards'
import Navbar from '../../src/components/layout/Navbar'
import BasicDateCalendar from '../../src/components/calendario/Calendario'
import { useRouter } from 'next/router'
import Button from '../../src/components/form/Button'
import React from 'react'
import { Link } from 'react-scroll'
import dynamic from 'next/dynamic'
const fadeIn = keyframes`
  from {
    opacity: 0;
   
  }
  to {
    opacity: 6;
    
  }
`
const DateCalendarAlt = styled(BasicDateCalendar)`
  background: #ebf0f3;
  border-radius: 9px;
  font-size: 32rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 1px, rgba(68, 62, 62, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  > div {
    font-size: 42rem;
    > .css-cyfsxc-MuiPickersCalendarHeader-labelContainer {
      color: #212020d2;
      font-size: 2rem;
      font-weight: 700;
    }
  }
  span {
    font-size: 16px;
    font-weight: 700;
    color: #212020d2;
  }
  button {
    color: #091397e4;
    font-size: 14px;
    font-weight: 700;
    .MuiButtonBase-root {
    }
    > svg {
      background-color: #1c10a59f;
      color: #fff;
    }
    :hover {
      background-color: #5050b3;
    }
    :active {
      transition: ease-in-out;
      color: #242c9981;
    }
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
`
const LogoAlt = styled(Logo)`
  margin-left: 40px;
  color: #242c99b7;
  @media (max-width: 670px) {
    margin: 0;
    padding-top: 10px;
  }
`
const StyledLogin = styled.h5`
  cursor: pointer;
  font-size: 22px;
  color: #242c99b7;
  margin-right: 15px;
  margin-top: 18px;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  :hover {
    color: #677cb76d;
  }
`

const FlexLogin = styled.div`
  display: flex;
  gap: 13px;
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
  background-color: #80808050;
  height: 37px;
  margin-left: 8px;
  margin-top: 0px;
  @media (max-width: 462px) {
    width: auto;
    height: 2px;
  }
`
export const StyledFlexNavBar = styled.div`
  background: #edededaf;
  @media (max-width: 712px) {
    width: 115%;
  }
  @media (max-width: 670px) {
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    padding-bottom: 8px;
  }
  @media (max-width: 426px) {
    width: 115%;
  }
`
const CardsLogo = styled.img`
  margin-top: 8px;
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

const ProgressEtapas = styled.div`
  height: 5px;
  background: #242c9981;
`
const ContainerPlans = styled.div`
  background: #edededaf;
  width: 100%;
  height: auto;
  @media (max-width: 426px) {
    height: 100%;
    width: 115%;
    padding-bottom: 50px;
  }
`
const ContainerTimes = styled.div`
  background: #edededaf;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  @media (max-width: 462px) {
    height: 100vh;
  }
  @media (max-width: 426px) {
    width: 115%;
  }
`
const ContainerCalender = styled.div`
  height: 80vh;
  @media (max-width: 426px) {
    width: 115%;
  }
`
const ContainerButton = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (max-width: 426px) {
    width: 115%;
  }
`
const TilteText = styled.h5`
  font-size: 23px;
  padding: 25px;
  color: #0101018e;
  text-align: center;
`
const SubTitle = styled.p`
  font-size: 20px;
  padding-bottom: 40px;
  color: #0101014c;
  text-align: center;
`
const CardsAlt = styled(Cards)`
  :hover {
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    transform: scale(1.1);
  }
  @media (max-width: 426px) {
    width: 299px;
    margin-bottom: 50px;
    font-size: 10px;
    :hover {
      transition: all 0.1s ease-in-out;
      transform: none;
    }
  }
`
const FlexCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 767px) {
    gap: 13px;
  }
`

const SelectHour = styled.div`
  height: 70px;
  width: 440px;
  margin: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 1px, rgba(68, 62, 62, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(33, 32, 32, 0.08) 0px 16px 8px,
    rgba(8, 8, 8, 0.08) 0px 20px 16px;

  @media (max-width: 646px) {
    width: 400px;
    margin: 9px;
  }
  @media (max-width: 515px) {
    width: 350px;
    margin: 7px;
  }
  @media (max-width: 462px) {
    width: 100px;
    height: 215px;
    display: grid;
    grid-template-columns: 100px;
  }
`
const ButtonAlt = styled(Button)`
  width: 400px;
  border-radius: 25px;

  @media (max-width: 426px) {
    width: 370px;
    font-size: 18px;
  }
  @media (max-width: 350px) {
    width: 300px;
  }
`
const Seta = styled.img`
  padding: 3px;
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.isDisabled ? '0.5' : '1')};
  background-color: ${(props) => (props.isDisabled ? '#80808050' : 'transparent')};
  border-radius: 10px;
  transition: background-color 0.5s;
`
const FlexSeta = styled.div`
  display: flex;
  align-items: center;
`
const OptionHour = styled.ol`
  font-size: 18px;
  font-weight: 700;
  margin-left: 7px;
  display: flex;
  color: #020837;
`
const Hours = styled.p`
  display: flex;
  font-size: 12px;
`
const ContHour = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? '#091397b8' : 'rgb(255, 255, 255)')};
  gap: 3px;
  transition: 0.5s;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  @media (max-width: 515px) {
    padding: 2px;
  }
`
const InputHour = styled.div`
  width: 110px;
  font-size: 15px;
  height: 45px;
  display: flex;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  background-color: ${(props) => props.theme.colors.inputBackground};
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #5176da, -2px 2px 2px #5176da;
  border-color: #5176da;
  :hover {
    cursor: pointer;
    inset-inline: none;
  }
`
const BoxHours = styled.div`
  height: 490px;
  width: 600px;
  background-color: #e3e7fd;
  border-radius: 3px;
  display: ${(props) => (props.showBoxHour ? 'grid' : 'none')};
  transform: translate(-36%, 5%);
  grid-template-columns: 150px 150px 150px 150px;
  position: absolute;
  align-items: center;
  left: 44%;
  animation: ${fadeIn} 0.1s ease-in-out;
  gap: 2px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    left: 40%;
    width: 470px;
    grid-template-columns: 150px 150px 150px;
  }
  @media (max-width: 525px) {
    width: 370px;
    grid-template-columns: 100px 100px 100px;
  }
  @media (max-width: 426px) {
    width: 320px;
    grid-template-columns: 100px 100px 100px;
    transform: translate(-28%, 10%);
  }
  @media (max-width: 340px) {
    transform: translate(-32%, 10%);
  }
`
const TypesHours = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin-right: 9px;
  height: 50%;
  cursor: pointer;
  :hover {
    border-radius: 10px;
    background-color: #5757f5c4;
  }
  @media (max-width: 767px) {
    color: black;
  }
`
const listHours = ['2', '2.5', '3', '3.5', '4']
const listHours2 = ['5', '5.5', '6', '7', '8']
const ListStartHours = [
  '07:00 AM',
  '07:30 AM',
  '08:00 AM',
  '08:30 AM',
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 AM',
  '12:30 AM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
  '07:00 PM'
]

function HomePlansScreen() {
  const [planChosen, setPlanChosen] = useState(false)
  const [dateChosen, setDateChosen] = useState(false)
  const [hourChosen, setHourChosen] = useState(false)
  const [startHourChosen, setStartHourChosen] = useState(false)
  const [inputUpdateHour, setinputUpdateHour] = useState('')
  const [showBoxHour, setshowBoxHour] = useState(false)
  const [listHour2, setListHour2] = useState(null)
  const [isRightArrowDisabled, setRightArrowDisabled] = useState(false)
  const [isLeftArrowDisabled, setLeftArrowDisabled] = useState(true)
  const [selectedHour, setSelectedHour] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [activeCard, setActiveCard] = useState(null)
  const [progress, setProgress] = useState(0)
  const [cardValues, setCardValues] = useState({
    0: 'Optional',
    1: 'Basic',
    2: 'Medium',
    3: 'Complete'
  })

  const handleSubmit = () => {
    if (cardValues && region && selectedDate && selectedHour && inputUpdateHour.length > 0) {
      const queryParams = new URLSearchParams({
        cardValues: cardValues[activeCard],
        region: region,
        selectedDate: selectedDate,
        selectedHour: selectedHour,
        inputUpdateHour: inputUpdateHour
      })
      localStorage.setItem('Plan', cardValues[activeCard])
      localStorage.setItem('Duration', inputUpdateHour)
      localStorage.setItem('Date', selectedDate)
      localStorage.setItem('Hour', selectedHour) //Lembrar de excluir os cookies depois
      router.push(`/plansScreen/selectCleaner?${queryParams.toString()}`)
    }
  }
  const totalSteps = 5

  const updateInputHour = (clickedWord) => {
    setinputUpdateHour(clickedWord)
    setshowBoxHour(!showBoxHour)
    setStartHourChosen(true)
    updateProgress()
  }
  const handleClickCard = (cardId) => {
    if (activeCard === cardId) {
      return
    }
    setActiveCard(cardId)
    setPlanChosen(true)
    updateProgress()
  }
  const handleClickHour = (hour) => {
    setSelectedHour((prevHour) => (prevHour === hour ? null : hour))
    setHourChosen(true)
    updateProgress()
  }

  const handleClickSetaD = () => {
    setLeftArrowDisabled(false)
    setRightArrowDisabled(true)
    setListHour2(!listHour2)
  }

  const handleClickSetaE = () => {
    setRightArrowDisabled(false)
    setLeftArrowDisabled(true)
    setListHour2(!listHour2)
  }
  const handleDateChange = (date) => {
    let getdate = `${date.$d.toDateString()} `
    setSelectedDate(getdate)
    setDateChosen(true)
    updateProgress()
  }

  const router = useRouter()
  const { region } = router.query
  const updateProgress = () => {
    const stepsCompleted = [planChosen, dateChosen, hourChosen, startHourChosen, region].filter(
      Boolean
    ).length
    const calculatedProgress = (stepsCompleted / totalSteps) * 100
    setProgress(calculatedProgress)
  }

  useEffect(() => {
    updateProgress()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planChosen, dateChosen, hourChosen, startHourChosen, region])

  return (
    <Container>
      <StyledFlexNavBar>
        <Navbar type2 />
      </StyledFlexNavBar>
      <FlexDivEtapas>
        <DivEtapas>
          <FlexEtapas>
            <Etapas>{region}</Etapas>
            <SubEtapas>LOCATION</SubEtapas>
          </FlexEtapas>
          <Barra />
          <FlexEtapas>
            <Etapas>{cardValues[[activeCard]] || '-'}</Etapas>
            <SubEtapas>PLAN</SubEtapas>
          </FlexEtapas>
          <Barra />
          <FlexEtapas>
            <Etapas>{selectedDate || '-'}</Etapas>
            <SubEtapas>DATE</SubEtapas>
          </FlexEtapas>
          <Barra />
          <FlexEtapas>
            <Etapas>{selectedHour || '-'}</Etapas>
            <SubEtapas>DURATION</SubEtapas>
          </FlexEtapas>
          <Barra />
          <FlexEtapas>
            <Etapas>{inputUpdateHour || '-'}</Etapas>
            <SubEtapas>STARTING TIME</SubEtapas>
          </FlexEtapas>
        </DivEtapas>
        <ProgressEtapas style={{ width: `${progress}%` }} />
      </FlexDivEtapas>
      <ContainerPlans>
        <TilteText>What plan do you need ?</TilteText>
        <SubTitle>Click on the plan you want</SubTitle>
        <FlexCards>
          <CardsAlt id={0} isActive={activeCard === 0} onClick={handleClickCard} type="1" />
          <CardsAlt id={1} isActive={activeCard === 1} onClick={handleClickCard} type="2" />
          <CardsAlt id={2} isActive={activeCard === 2} onClick={handleClickCard} type="3" />
          <CardsAlt id={3} isActive={activeCard === 3} onClick={handleClickCard} type="4" />
        </FlexCards>
      </ContainerPlans>
      <ContainerCalender>
        <TilteText id="calendar">When should your first booking be?</TilteText>
        <Link to="hours" spy={true} smooth={true} offset={-100} duration={500}>
          <DateCalendarAlt onChange={handleDateChange} />
        </Link>
      </ContainerCalender>
      <ContainerTimes>
        <TilteText id="hours">How long do you need your cleaner for?</TilteText>
        <FlexSeta>
          <Seta
            src="setaEsquerda.png"
            height="45px"
            width="45px"
            onClick={handleClickSetaE}
            isDisabled={isLeftArrowDisabled}
          />
          <SelectHour>
            {isRightArrowDisabled
              ? listHours2.map((item, index) => (
                  <React.Fragment key={index}>
                    {' '}
                    <ContHour
                      isSelected={selectedHour === `${item} hours`}
                      onClick={() => handleClickHour(`${item} hours`)}
                    >
                      <OptionHour>{item}</OptionHour>
                      <Hours>hours</Hours>
                    </ContHour>
                    {index < 4 ? <BarraAlt /> : null}
                  </React.Fragment>
                ))
              : listHours.map((item, index) => (
                  <React.Fragment key={index}>
                    {' '}
                    <ContHour
                      isSelected={selectedHour === `${item} hours`}
                      onClick={() => handleClickHour(`${item} hours`)}
                    >
                      <OptionHour>{item}</OptionHour>
                      <Hours>hours</Hours>
                    </ContHour>
                    {index < 4 ? <BarraAlt /> : null}
                  </React.Fragment>
                ))}
          </SelectHour>
          <Seta
            src="setaDireita.png"
            height="45px"
            width="45px"
            onClick={handleClickSetaD}
            isDisabled={isRightArrowDisabled}
          />
        </FlexSeta>
        <TilteText>Starts at</TilteText>
        <SubTitle>Click and choose your startint time</SubTitle>
        <InputHour onClick={() => setshowBoxHour(!showBoxHour)}>{inputUpdateHour || '-'}</InputHour>
        <BoxHours showBoxHour={showBoxHour}>
          {ListStartHours.map((item, indice) => (
            <TypesHours key={indice} onClick={() => updateInputHour(`${item} `)}>
              {item}
            </TypesHours>
          ))}
        </BoxHours>
      </ContainerTimes>
      <ContainerButton>
        <ButtonAlt
          onClick={handleSubmit}
          disabled={
            cardValues && region && selectedDate && selectedHour && inputUpdateHour ? false : true
          }
          valor="NEXT"
        />
      </ContainerButton>
    </Container>
  )
}

export default dynamic(() => Promise.resolve(HomePlansScreen), { ssr: false })
