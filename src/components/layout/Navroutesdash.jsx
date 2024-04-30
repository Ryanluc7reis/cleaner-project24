import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/useContext'
import { useRouter } from 'next/router'
import axios from 'axios'

import Input from '../form/Input'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const ContainerBox = styled.div`
  padding: 25px;
  display: flex;
  background-color: #001044;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1306px) {
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
const InputAlt = styled(Input)`
  background: transparent;
  padding: 6px;
  border: none;
  width: 200px;
  ::placeholder {
    color: white;
  }
`
const Barra = styled.hr`
  width: 100%;
`
const Lupa = styled.img`
  padding: 5px;
  border: 1px solid silver;
  border-radius: 30px;
  box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background: #fff;
`
const FlexInput = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledFlexSearch = styled.div`
  display: flex;
`
const Hamburguer = styled.img`
  display: none;
  width: 60px;
  height: 45px;
  @media (max-width: 1306px) {
    display: flex;
  }
`
const NotificationCount = styled.div`
  width: 17px;
  height: 14px;
  margin-right: 3px;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  background: red;
  justify-content: center;
  display: flex;
  align-self: center;
  position: absolute;
  top: 8%;
  right: 7%;
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
  const [clicked, setClicked] = useState(false)
  const [notificationsCount, setNotificationsCount] = useState([])
  const { user, userId } = userData
  const handleClick = (click) => {
    props.onClickDash(click === setClicked(!clicked))
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
      const response = await axios.get('http://localhost:3333/user/verify-session', {
        headers: {
          authorization: token
        }
      })
      setUserData(response.data)
    } catch (error) {
      console.error('Erro ao verificar sessão:', error)
    }
  }
  const verifyNotificationsCount = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:3333/getNotificationsCount', {
        headers: {
          authorization: token
        }
      })
      setNotificationsCount(response.data.count)
    } catch (error) {
      console.error('Erro ao verificar sessão:', error)
    }
  }
  useEffect(() => {
    verifyUser()
    verifyNotificationsCount()
  }, [])
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: token
        }
      }
      const response = await axios.post('http://localhost:3333/user/logout', {}, config)
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
          <Hamburguer onClick={handleClick} src={clicked ? '/x.png' : '/hamburgericon.png'} />
          <TypeRouteTitle>{getTypeRouteValue()}</TypeRouteTitle>
          <StyledFlex>
            <h1 style={{ color: 'white' }}>Olá, {user}</h1>
            <ImgAvatar src="/avatar.png" />
            <ImgNotifications
              onClick={() => router.push('/dashboard/notifications')}
              src="/bell1.png"
            />
            <LogOut onClick={handleLogout}>Logout</LogOut>
          </StyledFlex>
        </ContainerBox>
      )}
      {type2 && (
        <ContainerBox>
          <Hamburguer onClick={handleClick} src={clicked ? '/x.png' : '/hamburgericon.png'} />
          <TypeRouteTitle>{getTypeRouteValue()}</TypeRouteTitle>
          <StyledFlex>
            <StyledFlexSearch>
              <FlexInput>
                <InputAlt placeholder="Search..." />
                <Barra />
              </FlexInput>
              <Lupa src="/lupa.png" />
            </StyledFlexSearch>
            <h1 style={{ color: 'white' }}>Olá, {user}</h1>
            <ImgAvatar src="/avatar.png" />

            {notificationsCount.length === 0 || whithoutNotification ? (
              <ImgNotifications
                onClick={() => router.push('/dashboard/notifications')}
                src="/bell1.png"
              />
            ) : (
              <div>
                <ImgNotifications
                  onClick={() => router.push('/dashboard/notifications')}
                  src="/bell1.png"
                />
                <NotificationCount>{notificationsCount}</NotificationCount>
              </div>
            )}

            <LogOut onClick={handleLogout}>Logout</LogOut>
          </StyledFlex>
        </ContainerBox>
      )}
    </Container>
  )
}
