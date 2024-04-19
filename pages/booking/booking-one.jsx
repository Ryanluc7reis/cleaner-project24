import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../../src/context/useContext'
import dynamic from 'next/dynamic'
import axios from 'axios'

import Navbar from '../../src/components/layout/Navbar'
import Button from '../../src/components/form/Button'
import Steps from '../../src/components/steps/Steps'
import SignupByBooking from '../../src/components/signupbybooking/SignupByBooking'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #f3f3f3;
  display: ${(props) => (props.isNone ? 'none' : 'block')};
`

const TitleSub = styled.h1`
  color: black;
  text-align: center;
  font-weight: 500;
  margin-top: 26px;
  margin-right: 10px;
`

const BoxSummary = styled.div`
  width: 270px;
  min-height: 340px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
const PaymentAndRegister = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  padding-bottom: 50px;
  @media (max-width: 936px) {
    align-items: center;
    flex-direction: column;
  }
`

const DescText = styled.div`
  margin: 8px 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`
const TitleText = styled.h3`
  font-weight: 500;
  font-size: 15px;
`
const DataText = styled.h3`
  color: #222222;
`
const DataTextAlt = styled(DataText)`
  color: #2b4df3;
  font-size: 17px;
`
const TitleTextAlt = styled(TitleText)`
  font-size: 19px;
`
const Barra = styled.hr`
  width: 100%;
`

const NavBarAlt = styled(Navbar)`
  background: #f3f3f3;
`
const FlexSecInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media (max-width: 612px) {
    justify-content: center;
    align-items: center;
  }
`

const Text = styled.h2`
  color: gray;
  display: flex;
  font-weight: 500;
  align-items: center;
  cursor: default;
  gap: 7px;
  margin: 15px;
`
const TextAlt = styled(Text)`
  font-size: 12px;
`
const Smileimg = styled.img``
const ConfirmationToPay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
  padding-right: 175px;
`
function Booking() {
  const [userData, setUserData] = useContext(UserContext)
  const { user, userId } = userData
  const [userCurrentUserData, setCurrentUserData] = useState({})

  const router = useRouter()
  const Plan = typeof window !== 'undefined' ? localStorage.getItem('Plan') : null
  const Date = typeof window !== 'undefined' ? localStorage.getItem('Date') : null
  const Duration = typeof window !== 'undefined' ? localStorage.getItem('Duration') : null
  const Time = typeof window !== 'undefined' ? localStorage.getItem('Time') : null
  const PriceH = typeof window !== 'undefined' ? localStorage.getItem('PriceH') : null
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const rate = 8.5
  const totalPrice = PriceH ? (parseFloat(PriceH) * parseFloat(Duration) + rate).toFixed(2) : null

  const findUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3333/user/findUser`, {
        headers: { authorization: token }
      })
      const data = response.data
      setCurrentUserData(data)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }
  useEffect(() => {
    findUser()
  }, [user])
  return (
    <Container>
      <NavBarAlt type2 />
      <Steps type1 />
      <PaymentAndRegister>
        {userData ? (
          <ConfirmationToPay>
            <h1>Olá, {user}</h1>
            <h1>Seu serviço será no endereço ({userCurrentUserData.address}) ?</h1>
            <Button onClick={() => router.push('/booking/booking-two')}> Yes! Pay now</Button>
            <Button onClick={() => router.push('/booking/booking-two')}>
              {' '}
              No! I want to change my address
            </Button>
          </ConfirmationToPay>
        ) : (
          <SignupByBooking />
        )}
        <FlexSecInfos>
          <TitleSub>Your booking summary</TitleSub>
          <BoxSummary>
            <DescText>
              <TitleText>Plan:</TitleText>
              <DataText>{Plan}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleText>Duration:</TitleText>
              <DataText>{Duration}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleText>Date:</TitleText>
              <DataText>{Date}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleText>Starting Time:</TitleText>
              <DataText>{Time}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleText>Price per hour:</TitleText>
              <DataText>{PriceH}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleText>Total price:</TitleText>
              <DataText>{totalPrice}</DataText>
            </DescText>
            <Barra />
            <DescText>
              <TitleTextAlt>Total cost:</TitleTextAlt>
              <DataTextAlt>{totalPrice}</DataTextAlt>
            </DescText>
            <Barra />
            <TextAlt>
              <Smileimg src="/smile.png" />
              The rate of the first cleaner who accepts your booking is what you will be charged.
            </TextAlt>
          </BoxSummary>
        </FlexSecInfos>
      </PaymentAndRegister>
    </Container>
  )
}

// eslint-disable-next-line no-undef
export default dynamic(() => Promise.resolve(Booking), { ssr: false })
