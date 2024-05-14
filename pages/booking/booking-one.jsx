import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../../src/context/useContext'
import { CardIdContext } from '../../src/context/useContextCardId'
import { PopUpContext } from '../../src/context/useContextPopUp'
import dynamic from 'next/dynamic'
import axios from 'axios'
import useSWRConfig from 'swr'
import { useForm } from 'react-hook-form'

import Navbar from '../../src/components/layout/Navbar'
import Button from '../../src/components/form/Button'
import Steps from '../../src/components/steps/Steps'
import SignupByBooking from '../../src/components/signupbybooking/SignupByBooking'
import EditAddress from '../../src/components/profile/EditAddress'
import Selecter from '../../src/components/form/Selecter'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #f3f3f3;
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media (max-width: 612px) {
    justify-content: center;
    align-items: center;
  }
`
const ButtonAlt = styled(Button)`
  padding: 10px;
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
  border-radius: 10px;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 25px;
`
const PayToCleaner = styled(Button)`
  padding: 10px;
  width: 230px;
  position: absolute;
  bottom: 8%;
  right: 43%;
`
const StyledFlexButtons = styled.div`
  display: flex;
  gap: 17px;
  align-items: center;
  position: absolute;
  bottom: 8%;
  right: 61%;
`
function Booking() {
  const [popUpMessage, setPopUpMessage] = useContext(PopUpContext)
  const [userData, setUserData] = useContext(UserContext)
  const { user, userId } = userData
  const [userCurrentUserData, setCurrentUserData] = useState({})
  const [showEditAddress, setShowEditAddress] = useState(false)
  const [cardId, setCardId] = useContext(CardIdContext)
  const [cleanerSelectedData, setCleanerSelectedData] = useState({})
  const [cleanerNameData, setCleanerNameData] = useState({})
  const [loading, setLoading] = useState(false)
  const [cleaning, setCleaning] = useState('')
  const { mutate } = useSWRConfig()
  const router = useRouter()
  const Plan = typeof window !== 'undefined' ? localStorage.getItem('Plan') : null
  const Date = typeof window !== 'undefined' ? localStorage.getItem('Date') : null
  const Duration = typeof window !== 'undefined' ? localStorage.getItem('Duration') : null
  const Time = typeof window !== 'undefined' ? localStorage.getItem('Time') : null
  const PriceH = typeof window !== 'undefined' ? localStorage.getItem('PriceH') : null
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const rate = 8.5

  const totalPrice = PriceH ? (parseFloat(PriceH) * parseFloat(Duration) + rate).toFixed(2) : null
  const handleFormSubmit = async () => {
    try {
      setLoading(true)

      const serviceData = {
        plan: Plan,
        duration: Duration,
        startingTime: Time,
        totalCost: totalPrice,
        serviceDate: Date,
        address: userCurrentUserData.address,
        number: userCurrentUserData.number,
        cleaner: cleanerNameData
      }

      if (Plan === 'Optional') {
        serviceData.cleaningType = cleaning
      } else {
        serviceData.cleaningType = 'none'
      }

      const serviceResponse = await axios.post(`http://localhost:3333/createService`, serviceData, {
        headers: {
          authorization: token
        }
      })

      if (serviceResponse.status === 201) {
        const notificationResponse = await axios.post(
          'http://localhost:3333/createNotification',
          {
            for: cleanerNameData,
            notificationType: 'Nova requisição de limpeza'
          },
          {
            headers: {
              authorization: token
            }
          }
        )

        if (notificationResponse.status === 201) {
          router.push('/dashboard/')
          setPopUpMessage(true)
        }
      }
    } catch (err) {
      console.error('Erro ao criar serviço ou notificação:', err.message)
    } finally {
      setLoading(false)
    }
  }

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

  const getCard = async () => {
    try {
      const response = await axios.get('http://localhost:3333/cleaner/getOneCard', {
        params: { cardId }
      })
      const data = response.data
      setCleanerSelectedData(data)

      if (response.status === 200) {
        const cleaner = await axios.post(
          `http://localhost:3333/user/findCleanerName`,
          {
            cleanerName: data.creator
          },
          {
            headers: { authorization: token }
          }
        )
        const datacleaner = cleaner.data
        setCleanerNameData(datacleaner.fullName)
      }
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }

  useEffect(() => {
    findUser()
    getCard()
  }, [user, showEditAddress, setCleanerSelectedData])

  const handleCleaning = (event) => {
    setCleaning(event.target.value)
  }

  const handleClickOutsideEditAddress = () => {
    if (showEditAddress) {
      setShowEditAddress(false)
    }
  }
  const handleSaveEdit = () => {
    mutate(`http://localhost:3333/cleaner/editAbout`)
  }
  const { handleSubmit } = useForm({
    mode: 'all'
  })

  return (
    <Container onClick={handleClickOutsideEditAddress}>
      <NavBarAlt type2 />
      <Steps type1 />
      <PaymentAndRegister style={userData ? { gap: '25px' } : { gap: '18px' }}>
        {userData ? (
          <ConfirmationToPay>
            <h1>Olá, {user}</h1>
            {Plan === 'Optional' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <h1>Escolha qual limpeza você deseja :</h1>
                <Selecter onChange={handleCleaning} value={cleaning} typeCleaningCreate />
              </div>
            )}
            <h1>Seu serviço será no endereço ({userCurrentUserData.address}) ?</h1>

            <ButtonAlt onClick={() => setShowEditAddress(!showEditAddress)}>
              {' '}
              No, i want to change my address
            </ButtonAlt>
            {showEditAddress && (
              <EditAddress
                onButtonClose={() => setShowEditAddress(!showEditAddress)}
                onClose={() => setShowEditAddress(!showEditAddress)}
                id={userId}
                fullName={userCurrentUserData.fullName}
                user={user}
                email={userCurrentUserData.email}
                password={userCurrentUserData.password}
                address={userCurrentUserData.address}
                number={userCurrentUserData.number}
                onSave={handleSaveEdit}
              />
            )}
            <StyledFlexButtons>
              <ButtonAlt onClick={() => router.push('/booking/booking-two')}>
                {' '}
                Yes! Pay with card now
              </ButtonAlt>
              <h1>Or</h1>
            </StyledFlexButtons>
          </ConfirmationToPay>
        ) : (
          <SignupByBooking />
        )}
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
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
          {userData && (
            <PayToCleaner type="submit" loading={loading}>
              Yes! Pay directly to cleaner
            </PayToCleaner>
          )}
        </Form>
      </PaymentAndRegister>
    </Container>
  )
}

// eslint-disable-next-line no-undef
export default dynamic(() => Promise.resolve(Booking), { ssr: false })
