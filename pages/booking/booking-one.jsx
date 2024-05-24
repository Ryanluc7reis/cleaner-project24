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
import PopUpMessage from '../../src/components/popupmessage/PopUpMessage'

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
  @media (max-width: 425px) {
    padding-top: 85px;
  }
  @media (max-width: 320px) {
    padding-top: 90px;
  }
`
const ButtonAlt = styled(Button)`
  padding: 10px;
  @media (max-width: 543px) {
    font-size: 14px;
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
  border-radius: 10px;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 25px;
`
const PayToCleaner = styled(Button)`
  padding: 9px;
  width: 230px;
  position: absolute;
  bottom: 12%;
  right: 42%;
  @media (max-width: 543px) {
    font-size: 14px;
  }
  @media (min-width: 2560px) {
    bottom: 50%;
    right: 46%;
  }
  @media (min-width: 1440px) {
    bottom: 9%;
  }
  @media (max-width: 1365px) {
    bottom: 8%;
  }

  @media (max-width: 1024px) {
    bottom: -1%;
    right: 39%;
  }
  @media (max-width: 768px) {
    bottom: 12%;
    right: 17%;
  }
  @media (max-width: 540px) {
    bottom: 15%;
    right: 27%;
  }
  @media (max-width: 430px) {
    bottom: 33%;
    right: 22%;
  }

  @media (max-width: 425px) {
    bottom: -12%;
    right: 22%;
  }
  @media (max-width: 414px) {
    bottom: 30%;
  }

  @media (max-width: 390px) {
    bottom: 26%;
    right: 20%;
  }

  @media (max-width: 375px) {
    bottom: 7%;
    right: 19%;
  }
  @media (max-width: 344px) {
    bottom: 28%;
    right: 15%;
  }
  @media (max-width: 320px) {
    bottom: -11%;
    right: 13%;
  }
`
const PayToCleanerAlt = styled(PayToCleaner)`
  bottom: 17%;
  @media (min-width: 2560px) {
    bottom: -10%;
    right: 46%;
  }
  @media (min-width: 1440px) {
    bottom: 14%;
  }
  @media (max-width: 1365px) {
    bottom: 8%;
  }

  @media (max-width: 1024px) {
    bottom: 3%;
    right: 39%;
  }
  @media (max-width: 768px) {
    bottom: 21%;
    right: 17%;
  }
  @media (max-width: 540px) {
    bottom: 24%;
    right: 27%;
  }
  @media (max-width: 430px) {
    bottom: 40%;
    right: 23%;
  }
  @media (max-width: 425px) {
    bottom: -1%;
    right: 22%;
  }
  @media (max-width: 414px) {
    bottom: 37%;
  }
  @media (max-width: 390px) {
    bottom: 34%;
    right: 20%;
  }

  @media (max-width: 375px) {
    bottom: 15%;
    right: 17%;
  }
  @media (max-width: 344px) {
    bottom: 36%;
  }
  @media (max-width: 320px) {
    bottom: 2%;
    right: 13%;
  }
`
const StyledFlexButtons = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  padding-right: 227px;
  padding-bottom: 2px;
  @media (max-width: 543px) {
    flex-direction: column;
    padding-right: 0px;
    padding-bottom: 0px;
  }
`
const StyledFlexChooseCleaning = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media (max-width: 543px) {
    flex-direction: column;
  }
`
const StyledTextAddress = styled.h1`
  @media (max-width: 543px) {
    font-size: 15px;
  }
`
const PopUpMessageAlt = styled(PopUpMessage)`
  @media (max-width: 768px) {
    right: 30%;
  }
  @media (max-width: 425px) {
    left: 15%;
    z-index: 103;
  }
  @media (max-width: 375px) {
    left: 10%;
  }
  @media (max-width: 320px) {
    left: 3%;
  }
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
  const [error, setError] = useState(false)
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
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
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
      if (Plan === 'Optional' && cleaning === '') {
        setError(true)
      }
      if (Plan === 'Optional') {
        serviceData.cleaningType = cleaning
      } else {
        serviceData.cleaningType = 'none'
      }
      if (error) {
        null
      } else {
        const serviceResponse = await axios.post(
          `https://cleaner-project-be.vercel.app/createService`,
          serviceData,
          {
            headers: {
              [AUTH_NAME]: token
            }
          }
        )

        if (serviceResponse.status === 201) {
          const notificationResponse = await axios.post(
            'https://cleaner-project-be.vercel.app/createNotification',
            {
              for: cleanerNameData,
              notificationType: 'Nova requisição de limpeza'
            },
            {
              headers: {
                [AUTH_NAME]: token
              }
            }
          )

          if (notificationResponse.status === 201) {
            router.push('/dashboard/')
            setPopUpMessage(true)
          }
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
      const response = await axios.get(`https://cleaner-project-be.vercel.app/user/findUser`, {
        headers: { [AUTH_NAME]: token }
      })

      const data = response.data
      setCurrentUserData(data)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }

  const getCard = async () => {
    try {
      const response = await axios.get('https://cleaner-project-be.vercel.app/cleaner/getOneCard', {
        params: { cardId }
      })
      const data = response.data
      setCleanerSelectedData(data)

      if (response.status === 200) {
        const cleaner = await axios.post(
          `https://cleaner-project-be.vercel.app/user/findCleanerName`,
          {
            cleanerName: data.creator
          },
          {
            headers: { [AUTH_NAME]: token }
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
    if (Plan === 'Optional' && cleaning !== '') {
      setError(false)
    }
    findUser()
    getCard()
  }, [user, showEditAddress, setCleanerSelectedData, cleaning])

  const handleCleaning = (event) => {
    setCleaning(event.target.value)
  }

  const handleClickOutsideEditAddress = () => {
    if (showEditAddress) {
      setShowEditAddress(false)
    }
  }
  const handleSaveEdit = () => {
    mutate(`https://cleaner-project-be.vercel.app/cleaner/editAbout`)
  }
  const { handleSubmit } = useForm({
    mode: 'all'
  })

  useEffect(() => {
    setTimeout(() => {
      setPopUpMessage(false)
    }, 4000)
  }, [popUpMessage])
  return (
    <Container onClick={handleClickOutsideEditAddress}>
      {popUpMessage && (
        <PopUpMessageAlt messageToOkrequest={popUpMessage}>
          Endereço editado com sucesso
        </PopUpMessageAlt>
      )}
      <NavBarAlt type2 />
      <Steps type1 />
      <PaymentAndRegister style={userData ? { gap: '25px' } : { gap: '18px' }}>
        {userData ? (
          <ConfirmationToPay>
            <h1>Olá, {user}</h1>
            {Plan === 'Optional' && (
              <StyledFlexChooseCleaning>
                <StyledTextAddress>Escolha qual limpeza você deseja :</StyledTextAddress>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {error && <h2 style={{ color: 'red' }}>Selecione uma limpeza</h2>}
                  <Selecter onChange={handleCleaning} value={cleaning} typeCleaningCreate />
                </div>
              </StyledFlexChooseCleaning>
            )}
            <StyledTextAddress>
              Seu serviço será no endereço ({userCurrentUserData.address}) ?
            </StyledTextAddress>

            <ButtonAlt onClick={() => setShowEditAddress(!showEditAddress)}>
              {' '}
              No, i want to change my address
            </ButtonAlt>
            <StyledFlexButtons>
              <ButtonAlt onClick={() => router.push('/booking/booking-two')}>
                {' '}
                Yes! Pay with card now
              </ButtonAlt>
              <h1>Or</h1>
            </StyledFlexButtons>
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
            <>
              {Plan === 'Optional' ? (
                <PayToCleaner type="submit" loading={loading}>
                  Yes! Pay directly to cleaner
                </PayToCleaner>
              ) : (
                <PayToCleanerAlt type="submit" loading={loading}>
                  Yes! Pay directly to cleaner
                </PayToCleanerAlt>
              )}
            </>
          )}
        </Form>
      </PaymentAndRegister>
    </Container>
  )
}

// eslint-disable-next-line no-undef
export default dynamic(() => Promise.resolve(Booking), { ssr: false })
