import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'

import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Notifications from '../../src/components/notificaçao/Notifications'
import ErrorMessage from '../../src/components/errormessage/ErrorMessage'
import NavRoutesDash from '../../src/components/layout/Navroutesdash'

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #001044;
`
const StyledFlex = styled.div`
  display: flex;
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ErrorMessageAlt = styled(ErrorMessage)`
  padding: 150px 360px;
`
const BoxNotifications = styled.div`
  background: #fff;
  width: 94%;
  height: 90%;
  margin: 0px 35px;
  padding: 20px;
  border-radius: 10px;
  overflow-y: scroll;
`
const GridNotifications = styled.div`
  display: grid;
  grid-template-columns: 470px 450px;
`
const TitleText = styled.h1`
  font-weight: 500;
  color: #a4a4a4f5;
  padding: 9px 0px;
`

export default function NotificationsPage() {
  const [notificationsData, setNotificationsData] = useState([])
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const getNotifications = async () => {
    try {
      const notifications = await axios.get('http://localhost:3333/getNotifications', {
        headers: {
          authorization: token
        }
      })
      const data = notifications.data
      setNotificationsData(data)
    } catch (err) {
      console.error(err.message)
    }
  }
  const deleteRefresh = async () => {
    const notificationsRefresh = await axios.get('http://localhost:3333/getNotifications', {
      headers: {
        authorization: token
      }
    })
    if (notificationsData.length === 0) {
      setNotificationsData([])
    }
    const data = notificationsRefresh.data
    setNotificationsData(data)
  }
  useEffect(() => {
    getNotifications()
  }, [])
  return (
    <Container>
      <StyledFlex>
        <NavBarDashboard isNotifications />
        <FlexContainer>
          <NavRoutesDash notifications type2 />
          <BoxNotifications>
            <TitleText>New notifications</TitleText>
            {notificationsData.length === 0 ? (
              <ErrorMessageAlt message={'Nenhuma notificação encontrada...'} />
            ) : (
              <>
                <GridNotifications>
                  {notificationsData.length > 0 &&
                    notificationsData.map((notification) => (
                      <Notifications
                        onDelete={deleteRefresh}
                        id={notification._id}
                        key={notification._id}
                        notificationType={notification.notificationType}
                      />
                    ))}
                </GridNotifications>
              </>
            )}
          </BoxNotifications>
        </FlexContainer>
      </StyledFlex>
    </Container>
  )
}
