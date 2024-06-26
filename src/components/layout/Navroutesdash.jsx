import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/useContext'
import { useRouter } from 'next/router'

import axios from 'axios'

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #001044;
`
const ContainerBox = styled.div`
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 638px) {
    flex-direction: column;
    justify-content: space-around;
  }
`
const TypeRouteTitle = styled.h1`
  color: white;
  font-size: 22px;
  font-weight: 400;
`
const ImgAvatar = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid silver;
  border-radius: 20px;
  background: #fff;
`
const ImgNotifications = styled.img`
  padding: 1px;
  cursor: pointer;
  :hover {
    scale: 1.1;
  }
`
const StyledFlex = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`
const LogOut = styled.a`
  color: white;
  cursor: pointer;
  font-size: 17px;
  display: flex;
  :hover {
    color: darkred;
  }
`

const Hamburguer = styled.img`
  display: none;
  width: 60px;
  height: 45px;
  @media (max-width: 1306px) {
    display: flex;
  }
`
const StyledNotificationCount = styled.div`
  display: flex;
`
const NotificationCount = styled.div`
  width: 17px;
  height: 14px;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  background: red;
  justify-content: center;
  display: flex;
  position: absolute;
  z-index: 100;
`
export default function NavRoutesDash({
  dash,
  profile,
  notifications,
  schedule,
  historic,
  type1,
  type2,
  whithoutNotification,
  ...props
}) {
  const router = useRouter()
  const [userData, setUserData] = useContext(UserContext)
  const [notificationsCount, setNotificationsCount] = useState([])
  const { user, userId } = userData
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const handleClick = () => {
    props.onClickDash()
  }
  const getTypeRouteValue = () => {
    if (profile) {
      return 'Profile'
    } else if (notifications) {
      return 'Notifications'
    } else if (schedule) {
      return 'Schedule'
    } else if (historic) {
      return 'Historic'
    } else if (dash) {
      return 'Services'
    }
  }
  const verifyUser = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(
        'https://cleaner-project-be.vercel.app/user/verify-session',
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )
      setUserData(response.data)
    } catch (error) {
      router.push('/')
      console.error('Erro ao verificar sessão:', error)
    }
  }
  const verifyNotificationsCount = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(
        'https://cleaner-project-be.vercel.app/getNotificationsCount',
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )
      setNotificationsCount(response.data.count)
    } catch (error) {
      console.error('Erro ao verificar sessão:', error)
    }
  }
  useEffect(() => {
    verifyUser()
    verifyNotificationsCount()
  }, [user, notificationsCount])
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          [AUTH_NAME]: token
        }
      }
      const response = await axios.post(
        'https://cleaner-project-be.vercel.app/user/logout',
        {},
        config
      )
      if (response.status === 200) {
        router.push('/')
        setUserData(false)
        setShowLogin(false)
      }
    } catch (error) {
      console.error('Erro durante o logout:', error)
    }
  }
  return (
    <Container {...props}>
      {type1 && (
        <ContainerBox>
          <Hamburguer onClick={handleClick} src="/hamburgericon.png" />
          <TypeRouteTitle>{getTypeRouteValue()}</TypeRouteTitle>
          <StyledFlex>
            <h1 style={{ color: 'white' }}>Hello, {user}</h1>
            <ImgAvatar src="/avatar.png" />

            {notificationsCount.length === 0 || whithoutNotification ? (
              <ImgNotifications
                onClick={() => router.push('/dashboard/notifications')}
                src="/bell1.png"
              />
            ) : (
              <StyledNotificationCount>
                <ImgNotifications
                  onClick={() => router.push('/dashboard/notifications')}
                  src="/bell1.png"
                />
                <NotificationCount>{notificationsCount}</NotificationCount>
              </StyledNotificationCount>
            )}
            <LogOut onClick={handleLogout}>Logout</LogOut>
          </StyledFlex>
        </ContainerBox>
      )}
    </Container>
  )
}
