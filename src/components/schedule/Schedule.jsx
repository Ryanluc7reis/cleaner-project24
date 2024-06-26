import styled from 'styled-components'
import { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import { useRouter } from 'next/router'

import NavRoutesDash from '../layout/Navroutesdash'
import CalendarioReact from '../calendario/CalendarioReact'
import Button from '../form/Button'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 20px;
  background-color: #001044;
  @media (max-width: 949px) {
    height: 100%;
    padding-bottom: 0px;
  }
`
const BoxSchedule = styled.div`
  background: #fdfdfd;
  width: 90%;
  height: 88%;
  margin: 0px 35px;
  padding: 20px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    margin: 0px 15px;
  }
  @media (max-width: 768px) {
    margin: 0px 35px;
  }
  @media (max-width: 430px) {
    margin: 0px 20px;
  }
  @media (max-width: 425px) {
    width: 90%;
    margin: 0px 21px;
  }
  @media (max-width: 444px) {
    padding: 15px 10px;
  }
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
  padding: 15px 45px;
  @media (max-width: 1338px) {
    gap: 9px;
    padding: 20px;
  }
  @media (max-width: 949px) {
    flex-direction: column;
  }
`
const FlexTextDate = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 35px;
  @media (max-width: 949px) {
    margin-bottom: 0px;
  }
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
  gap: 10px;
  margin: 15px 0px;
`
export default function Schedule({ ...props }) {
  const router = useRouter()
  const [isBlocked, setIsBlocked] = useState(false)
  const [selectedMaxDate, setSelectedMaxDate] = useState(null)
  const [editSchedule, setEditSchedule] = useState(false)
  const [card, setCard] = useState(null)
  const [lastDate, setLastDate] = useState(null)
  const handleDash = () => {
    props.isDash()
  }
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const config = {
    headers: {
      [AUTH_NAME]: token
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
        'https://cleaner-project-be.vercel.app/cleaner/editScheduleBlockedCleaner',
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
        'https://cleaner-project-be.vercel.app/cleaner/editScheduleCleaner',
        {
          scheduleBlocked: String(isBlocked),
          availableDate: String(calendarDates)
        },
        config
      )
      if (editSchedule.status === 200) {
        try {
          const card = await axios.get(
            'https://cleaner-project-be.vercel.app/cleaner/findCard',
            config
          )
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
      const cardCurrent = await axios.get(
        'https://cleaner-project-be.vercel.app/cleaner/findCard',
        config
      )
      const data = cardCurrent.data

      setCard(data)
    } catch (err) {
      console.error(err.message)
    }
  }
  const verifyUser = async () => {
    try {
      await axios.get('https://cleaner-project-be.vercel.app/user/verify-session', {
        headers: {
          [AUTH_NAME]: token
        }
      })
    } catch (error) {
      router.push('/')
      console.error('Erro ao verificar sessão:', error)
    }
  }

  useEffect(() => {
    if (editSchedule) {
      setSelectedMaxDate(null)
      setLastDate(null)
    }
    verifyUser()
  }, [editSchedule])
  useEffect(() => {
    getCard()
    verifyUser()
  }, [])
  useEffect(() => {
    if (card && card.availableDate && card.availableDate.length > 0) {
      const datesArray = card.availableDate[0].split(',')
      setLastDate(moment(datesArray[datesArray.length - 1]))
    }
    verifyUser()
  }, [card])

  return (
    <Container>
      <NavRoutesDash onClickDash={handleDash} schedule type1 />
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

            <div style={{ display: 'flex', gap: '10px', marginTop: '7px' }}>
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
                  {card !== null &&
                  card.availableDate &&
                  card.availableDate.length > 0 &&
                  card.availableDate[0] !== '-'
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
