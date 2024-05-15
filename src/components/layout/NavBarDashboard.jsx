import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import ImageNavdash from './imagenavdashboard/ImageNavdash'
import Logo from '../logo/Logo'

const Container = styled.div`
  padding: 10px 19px;
`
const BoxShadow = styled.div`
  background-color: #0d1d35ad;
  min-height: 100%;
  @media (max-width: 1306px) {
    width: 100%;
  }
`
const StyledLogo = styled(Logo)`
  margin: 10px 40px;
  font-size: 32px;
  font-weight: 500;
`
const Barra = styled.hr`
  opacity: 0.5;
  margin: 2px;
`
const FlexOption = styled.div`
  display: flex;
  width: 230px;
  height: 50px;
  padding: 6px 10px;
  background: transparent;
  gap: 6px;
  align-items: center;
  margin: 15px;
  :hover {
    cursor: pointer;
    background-color: #e9e9e9e3;
    transition: 0.3s;
  }
`
const FlexOptionAlt = styled(FlexOption)`
  display: ${(props) => (props.noneCleaner ? 'none' : 'flex')};
`
const Option = styled.h1`
  color: #9e9e9e;
  font-weight: 500;
  font-size: 16px;
`
const ImgOption = styled.img`
  padding: 1px;
`

export default function NavBarDashboard({
  isDash,
  isProfile,
  isSchedule,
  isNotifications,
  isHistoric,
  children,
  ...props
}) {
  const router = useRouter()
  const [userCleaner, setUserCleaner] = useState(null)
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const findCleaner = async () => {
    try {
      const response = await axios.get('http://localhost:3333/user/verify-cleaner', {
        headers: { [AUTH_NAME]: token }
      })
      const cleaner = response.data
      setUserCleaner(cleaner)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }

  useEffect(() => {
    findCleaner()
  }, [])
  return (
    <ImageNavdash {...props}>
      <BoxShadow>
        <Container>
          <StyledLogo />
          <Barra />
          <FlexOption
            style={{
              ...(isDash && {
                backgroundColor: '#2735b0',
                boxShadow: '0 4px 20px 0 rgb(0 0 0 / 18%), 0 7px 10px -5px rgb(0 178 212 / 50%)'
              })
            }}
            onClick={() => router.push('/dashboard/')}
          >
            <ImgOption src={isDash ? '/dashwhite.png' : '/dash.png'} />
            <Option style={{ ...(isDash && { color: '#fff' }) }}>Dashboard </Option>
          </FlexOption>
          <FlexOption
            isProfile={isProfile}
            style={{
              ...(isProfile && {
                backgroundColor: '#2735b0',
                boxShadow: '0 4px 20px 0 rgb(0 0 0 / 18%), 0 7px 10px -5px rgb(0 178 212 / 50%)'
              })
            }}
            onClick={() => router.push('/dashboard/profile')}
          >
            <ImgOption src={isProfile ? '/userwhite.png' : '/user.png'} />
            <Option style={{ ...(isProfile && { color: '#fff' }) }}>Profile </Option>
          </FlexOption>

          <FlexOptionAlt
            style={{
              ...(isSchedule && {
                backgroundColor: '#2735b0',
                boxShadow: '0 4px 20px 0 rgb(0 0 0 / 18%), 0 7px 10px -5px rgb(0 178 212 / 50%)'
              })
            }}
            noneCleaner={userCleaner ? false : true}
            onClick={() => router.push('/dashboard/schedule')}
          >
            <ImgOption src={isSchedule ? '/agendawhite.png' : '/agenda.png'} />
            <Option style={{ ...(isSchedule && { color: '#fff' }) }}>Schedule </Option>
          </FlexOptionAlt>

          <FlexOption
            style={{
              ...(isNotifications && {
                backgroundColor: '#2735b0',
                boxShadow: '0 4px 20px 0 rgb(0 0 0 / 18%), 0 7px 10px -5px rgb(0 178 212 / 50%)'
              })
            }}
            onClick={() => router.push('/dashboard/notifications')}
          >
            <ImgOption src={isNotifications ? '/bellwhite.png' : '/bell.png'} />
            <Option style={{ ...(isNotifications && { color: '#fff' }) }}>Notifications</Option>
          </FlexOption>
          <FlexOption
            style={{
              ...(isHistoric && {
                backgroundColor: '#2735b0',
                boxShadow: '0 4px 20px 0 rgb(0 0 0 / 18%), 0 7px 10px -5px rgb(0 178 212 / 50%)'
              })
            }}
            onClick={() => router.push('/dashboard/historic')}
          >
            <ImgOption src={isHistoric ? '/historywhite.png' : '/history.png'} />
            <Option style={{ ...(isHistoric && { color: '#fff' }) }}>Historic</Option>
          </FlexOption>
        </Container>
      </BoxShadow>
    </ImageNavdash>
  )
}
