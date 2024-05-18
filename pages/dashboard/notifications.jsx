import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Notifications from '../../src/components/notificaçao/Notifications'
import ErrorMessage from '../../src/components/errormessage/ErrorMessage'
import NavRoutesDash from '../../src/components/layout/Navroutesdash'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #001044;
  display: flex;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ErrorMessageAlt = styled(ErrorMessage)`
  padding: 150px 360px;
  @media (max-width: 768px) {
    padding: 100px 270px;
  }
  @media (max-width: 425px) {
    padding: 100px 120px;
  }
  @media (max-width: 375px) {
    padding: 100px;
  }
  @media (max-width: 320px) {
    padding: 75px;
  }
`
const BoxNotifications = styled.div`
  background: #fff;
  width: 94%;
  height: 90%;
  margin: 0px 35px;
  padding: 20px;
  border-radius: 10px;
  overflow-y: scroll;
  @media (max-width: 900px) {
    margin: 0px 15px;
  }
  @media (max-width: 444px) {
    padding: 15px 10px;
  }
`
const GridNotifications = styled.div`
  display: grid;
  grid-template-columns: 470px 450px;
  @media (max-width: 1034px) {
    grid-template-columns: 460px;
  }
  @media (max-width: 375px) {
    gap: 10px;
  }
`
const TitleText = styled.h1`
  font-weight: 500;
  color: #a4a4a4f5;
  padding: 9px 0px;
`
const StyledLoader = styled.div`
  padding: 160px 450px;
  display: flex;
  color: white;
  align-items: center;
`
const NavBarDashboardAlt = styled(NavBarDashboard)`
  @media (max-width: 1306px) {
    display: ${(props) => (props.show ? 'flex' : 'none')};
    width: 287px;
    min-height: 100%;
    position: fixed;
    animation: ${(props) => (props.show ? slideRight : slideLeft)} 0.3s forwards;
    transform-origin: left;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  }
`

const slideRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

export default function NotificationsPage() {
  const router = useRouter()
  const [notificationsData, setNotificationsData] = useState([])
  const [refreshNotification, setRefreshNotification] = useState(false)
  const [showDash, setShowDash] = useState(false)

  const handleDash = () => {
    setShowDash(!showDash)
  }

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const config = {
    headers: {
      [AUTH_NAME]: token
    }
  }
  const getNotifications = async () => {
    try {
      const notifications = await axios.get('http://localhost:3333/getNotifications', config)
      const data = notifications.data
      setNotificationsData(data)
      if (notifications.status === 200) {
        await axios.get('http://localhost:3333/notificationsAsRead', config)
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleRefresh = () => {
    if (notificationsData.length === 1) {
      setNotificationsData([])
      setRefreshNotification(!refreshNotification)
    }
    setRefreshNotification(!refreshNotification)
  }
  const verifyUser = async () => {
    try {
      await axios.get('http://localhost:3333/user/verify-session', {
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
    getNotifications()
    verifyUser()
  }, [refreshNotification, showDash])
  return (
    <Container>
      <NavBarDashboardAlt
        onDash={handleDash}
        showDashBoard={showDash}
        show={showDash}
        isNotifications
      />
      <FlexContainer>
        <NavRoutesDash onClickDash={handleDash} notifications type1 whithoutNotification />
        <BoxNotifications>
          <TitleText>New notifications</TitleText>
          {!notificationsData ? (
            <StyledLoader>
              <img width="30px" height="28px" src="/loadingGif.png" />
              <h2>Carregando</h2>
            </StyledLoader>
          ) : (
            <>
              {notificationsData.length === 0 ? (
                <ErrorMessageAlt message={'Nenhuma notificação encontrada...'} />
              ) : (
                <>
                  <GridNotifications>
                    {notificationsData.length > 0 &&
                      notificationsData.map((notification) => (
                        <Notifications
                          onDelete={handleRefresh}
                          id={notification._id}
                          key={notification._id}
                          notificationType={notification.notificationType}
                        />
                      ))}
                  </GridNotifications>
                </>
              )}
            </>
          )}
        </BoxNotifications>
      </FlexContainer>
    </Container>
  )
}
