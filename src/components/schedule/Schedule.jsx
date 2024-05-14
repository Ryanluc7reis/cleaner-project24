import styled from 'styled-components'
import { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'

import NavRoutesDash from '../layout/Navroutesdash'
import CalendarioReact from '../calendario/CalendarioReact'
import Button from '../form/Button'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #001044;
`
const BoxSchedule = styled.div`
  background: #fdfdfd;
  min-width: 90%;
  height: 520px;
  margin: 10px 50px 25px 50px;
  padding: 20px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
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
const TextSub = styled.h2`
  font-weight: 500;
  display: flex;
  gap: 4px;
  align-items: center;
  color: #3f3fe4;
  font-size: 18px;
`
const TextSubBlocked = styled(TextSub)`
  color: red;
`
const Text = styled.h1`
  font-weight: 500;
  color: #4f4f4ff5;
  font-size: 21px;
`
const ButtonAlt = styled(Button)`
  color: #fff;
  padding: 7px;
  width: 130px;
  font-size: 14px;
  background-color: ${(props) => (props.isBlocked ? '#01b601' : '#ff0000')};
`
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 45px;
`
const FlexTextDate = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 35px;
`
const ResetSchedule = styled.h1`
  cursor: pointer;
  font-size: 19px;
  font-weight: 500;
  padding: 10px;
  background: #3f3fe4;
  border-radius: 10px;
  color: white;
  :hover {
    background-color: #1f1f4b;
  }
`
const FlexCalendarAndResetSchedule = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const ColorBall = styled.div`
  width: 10px;
  height: 10px;
  background: #ffff5f;
  border-radius: 15px;
`
const StyledFlexColorBalls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
const ColorBallAlt = styled(ColorBall)`
  background: #2233cadc;
`
const TextColorBall = styled.h2`
  color: #4f4f4ff5;
`
const StyledContainerBalls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 7px 0px;
`
export default function Schedule() {
  const [isBlocked, setIsBlocked] = useState(false)
  const [selectedMaxDate, setSelectedMaxDate] = useState(null)
  const [editSchedule, setEditSchedule] = useState(false)
  const [card, setCard] = useState(null)
  const [lastDate, setLastDate] = useState(null)
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const config = {
    headers: {
      Authorization: token
    }
  }
  const handleDateChange = (date) => {
    let formattedDate = moment(date).format('ddd DD MMM YYYY')
    setEditSchedule(false)
    setSelectedMaxDate(formattedDate)
  }
  const minDate = moment().startOf('day')
  const maxDate = moment(selectedMaxDate, 'ddd DD MMM YYYY').endOf('day')
  let calendarDates = []

  const tileDisabled = ({ date }) => {
    if (selectedMaxDate === null) {
      return false
    } else {
      const isDisabled = !moment(date).isBetween(minDate, maxDate, null, '[]')
      if (!isDisabled) {
        const formattedDate = moment(date).format('ddd DD MMM YYYY')
        calendarDates.push(formattedDate)
      }
      return isDisabled
    }
  }

  const editCleanerScheduleButton = async () => {
    setIsBlocked(!isBlocked)
    const newBlocked = !isBlocked
    try {
      await axios.patch(
        'http://localhost:3333/cleaner/editScheduleBlockedCleaner',
        {
          scheduleBlocked: String(newBlocked)
        },
        config
      )
    } catch (err) {
      console.error(err.message)
    }
  }

  const editCleanerSchedule = async () => {
    try {
      const editSchedule = await axios.patch(
        'http://localhost:3333/cleaner/editScheduleCleaner',
        {
          scheduleBlocked: String(isBlocked),
          availableDate: String(calendarDates)
        },
        config
      )
      if (editSchedule.status === 200) {
        try {
          const card = await axios.get('http://localhost:3333/cleaner/findCard', config)
          const data = card.data
          setCard(data)
        } catch (err) {
          console.error(err.message)
        }
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  const getCard = async () => {
    try {
      const cardCurrent = await axios.get('http://localhost:3333/cleaner/findCard', config)
      const data = cardCurrent.data

      setCard(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    if (editSchedule) {
      setSelectedMaxDate(null)
      setLastDate(null)
    }
  }, [editSchedule])
  useEffect(() => {
    getCard()
  }, [])
  useEffect(() => {
    if (card !== null) {
      const datesArray = card.availableDate[0].split(',')
      setLastDate(moment(datesArray[datesArray.length - 1]))
    }
  }, [card])

  return (
    <Container>
      <NavRoutesDash schedule type1 />
      <BoxSchedule>
        <FlexTitleText>
          <TitleText>Set your available schedule</TitleText>

          <ButtonAlt isBlocked={isBlocked} onClick={editCleanerScheduleButton}>
            {isBlocked ? 'Unlock schedule' : 'Block schedule'}
          </ButtonAlt>
        </FlexTitleText>
        <StyledFlex>
          <FlexCalendarAndResetSchedule>
            <CalendarioReact
              maxDateCss={lastDate !== null ? lastDate.toDate() : undefined}
              minDate={minDate.toDate()}
              maxDate={lastDate !== null ? lastDate.toDate() : undefined}
              tileDisabled={tileDisabled}
              onChange={handleDateChange}
              isBlocked={isBlocked}
            />
            <StyledContainerBalls>
              <StyledFlexColorBalls>
                <ColorBall />
                <TextColorBall>Current-day</TextColorBall>
              </StyledFlexColorBalls>

              <StyledFlexColorBalls>
                <ColorBallAlt />
                <TextColorBall>Last-day available</TextColorBall>
              </StyledFlexColorBalls>
            </StyledContainerBalls>

            <div style={{ display: 'flex', gap: '10px' }}>
              <ResetSchedule onClick={() => setEditSchedule(!editSchedule)}>
                Reset schedule
              </ResetSchedule>
              <ResetSchedule onClick={editCleanerSchedule}>Save</ResetSchedule>
            </div>
          </FlexCalendarAndResetSchedule>
          <FlexTextDate>
            <Text>Schedule available:</Text>
            <TextSub>
              {isBlocked ? (
                <TextSubBlocked>Schedule Blocked</TextSubBlocked>
              ) : (
                <>
                  {card !== null
                    ? (() => {
                        const datesArray = card.availableDate[0].split(',')
                        const firstDate = datesArray[0]
                        const lastDate = datesArray[datesArray.length - 1]
                        return `${firstDate} - ${lastDate}`
                      })()
                    : 'Select dates'}
                </>
              )}
            </TextSub>
          </FlexTextDate>
        </StyledFlex>
      </BoxSchedule>
    </Container>
  )
}
