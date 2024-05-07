import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { PopUpContext } from '../../context/useContextPopUp'

import CleaningServices from '../cleaningservices/CleaningServices'
import ErrorMessage from '../errormessage/ErrorMessage'
import PopUpMessage from '../popupmessage/PopUpMessage'
import ReviewCleaner from '../reviewcleaner/ReviewCleaner'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #001044;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`
const BoxServices = styled.div`
  width: 93%;
  min-height: 400px;
  background: white;
  border-radius: 10px;
  padding: 10px;
  overflow-y: scroll;
`
const Title = styled.h1`
  font-weight: 500;
  color: #a4a4a4f5;
  padding: 9px 0px;
`
const GridServices = styled.div`
  display: grid;
  grid-template-columns: 460px 400px;
  gap: 10px;
`
const ErrorMessageAlt = styled(ErrorMessage)`
  padding: 100px 360px;
`
const PopUpMessageAlt = styled(PopUpMessage)`
  position: fixed;
  top: 0%;
  right: 0%;
`
export default function Services({ ...props }) {
  const [serviceCleaner, setServiceCleaner] = useState([])
  const [serviceUser, setServiceUser] = useState([])
  const [cleaner, setCleaner] = useState({})
  const [serviceCleanerAccepted, setServiceCleanerAccepted] = useState([])
  const [serviceUserAccepted, setServiceUserAccepted] = useState([])
  const [index, setIndex] = useState(-1)
  const [informations, setInformations] = useState(null)
  const [informations2, setInformations2] = useState(null)
  const [refreshService, setRefreshService] = useState(false)
  const [popUpMessage, setPopUpMessage] = useContext(PopUpContext)
  const [popUpMessage2, setPopUpMessage2] = useState(false)
  const [openReview, setOpenReview] = useState(false)
  const [openReview2, setOpenReview2] = useState(false)
  const [notificationData, setNotificationData] = useState({})
  const [userCleaner, setUserCleaner] = useState({})
  const [nameCleaner, setNameCleaner] = useState(null)

  const handleInformationsSelect = (index) => {
    setInformations(index === informations ? null : index)
    setIndex(index === informations ? null : index)
  }
  const handleInformationsSelect2 = (index2) => {
    setInformations2(index2 === informations2 ? null : index2)
    setIndex(index2 === informations2 ? null : index2)
  }

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const getServiceCleaner = async () => {
    try {
      const verifyCleaner = await axios.get(`http://localhost:3333/user/verify-cleaner`, {
        headers: {
          authorization: token
        }
      })
      if (verifyCleaner.status === 200) {
        try {
          const serviceCleaner = await axios.get(`http://localhost:3333/getService-cleaner`, {
            headers: {
              authorization: token
            }
          })

          const dataServiceCleaner = serviceCleaner.data
          setServiceCleaner(dataServiceCleaner)
        } catch (err) {
          console.error(err.message)
        }
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  const getServiceUser = async () => {
    try {
      const serviceUser = await axios.get(`http://localhost:3333/getService-user`, {
        headers: {
          authorization: token
        }
      })

      const dataServiceUser = serviceUser.data
      setServiceUser(dataServiceUser)
      if (serviceUser.status === 200) {
        const response = await axios.post(
          `http://localhost:3333/user/findCleanerName`,
          {
            cleanerName: dataServiceUser.cleaner
          },
          {
            headers: { authorization: token }
          }
        )
        const datacleaner = response.data
        setCleaner(datacleaner)
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  const getServiceUserAccepted = async () => {
    try {
      const serviceUserAccepted = await axios.get(`http://localhost:3333/getServiceAccepted-user`, {
        headers: {
          authorization: token
        }
      })

      const dataServiceUserAccepted = serviceUserAccepted.data
      setServiceUserAccepted(dataServiceUserAccepted)
      if (serviceUserAccepted.status === 200) {
        const response = await axios.post(
          `http://localhost:3333/user/findCleanerName`,
          {
            cleanerName: dataServiceUserAccepted[index].cleaner
          },
          {
            headers: { authorization: token }
          }
        )

        const datacleaner = response.data
        setCleaner(datacleaner)
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  const getServiceCleanerAccepted = async () => {
    try {
      const serviceCleanerAccepted = await axios.get(
        `http://localhost:3333/getServiceAccepted-cleaner`,
        {
          headers: {
            authorization: token
          }
        }
      )

      const dataServiceCleanerAccepted = serviceCleanerAccepted.data
      setServiceCleanerAccepted(dataServiceCleanerAccepted)
      if (serviceCleanerAccepted.status === 200) {
        const response = await axios.post(
          `http://localhost:3333/user/findCleanerName`,
          {
            cleanerName: dataServiceCleanerAccepted[index].cleaner
          },
          {
            headers: { authorization: token }
          }
        )

        const datacleaner = response.data
        setCleaner(datacleaner)
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  const getOneNotification = async () => {
    try {
      const notification = await axios.get('http://localhost:3333/getOneNotificationRating', {
        headers: {
          authorization: token
        }
      })
      const data = notification.data
      setNotificationData(data)
      setNameCleaner(data.cleaner)
      if (notification.status === 200) {
        setTimeout(() => {
          setOpenReview2(true)
        }, 2000)
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  const getUserName = async () => {
    try {
      const user = await axios.post(
        'http://localhost:3333/user/findCleanerName',
        {
          cleanerName: nameCleaner
        },
        {
          headers: {
            authorization: token
          }
        }
      )
      const data = user.data
      setUserCleaner(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleRefresh = async () => {
    if (serviceCleaner.length === 1) {
      setServiceCleaner([])
    }
    if (serviceCleanerAccepted.length === 1) {
      setServiceCleanerAccepted([])
    }
    if (serviceUserAccepted.length === 1) {
      setServiceUserAccepted([])
      setOpenReview(true)
    }
    setRefreshService(!refreshService)
  }
  const handleFinishService = () => {
    setPopUpMessage2(true)
    setTimeout(() => {
      setPopUpMessage2(false)
    }, 2000)
  }
  useEffect(() => {
    getServiceCleaner()
    getServiceUser()
    getServiceUserAccepted()
    getServiceCleanerAccepted()
    getOneNotification()
    getUserName()
    setTimeout(() => {
      setPopUpMessage(false)
    }, 4000)
  }, [index, informations, informations2, refreshService, openReview, openReview2])

  return (
    <Container {...props}>
      <BoxServices>
        {popUpMessage && (
          <PopUpMessageAlt messageToOkrequest={popUpMessage}>
            Requisição feita com sucesso
          </PopUpMessageAlt>
        )}
        {popUpMessage2 && (
          <PopUpMessageAlt messageToOkrequest={popUpMessage2}>
            Serviço finalizado com sucesso
          </PopUpMessageAlt>
        )}
        <Title>Pending Services</Title>
        {serviceCleaner.length === 0 && serviceUser.length === 0 ? (
          <ErrorMessageAlt message={'Nenhum serviço encontrado...'} />
        ) : (
          <>
            <GridServices>
              {serviceCleaner.length > 0
                ? serviceCleaner.map((service, index) => (
                    <CleaningServices
                      onIndex={() => handleInformationsSelect(index)}
                      isInformations={index === informations}
                      onRefresh={handleRefresh}
                      index={index}
                      key={service._id}
                      id={service._id}
                      plan={service.plan}
                      duration={service.duration}
                      startingTime={service.startingTime}
                      serviceDate={service.serviceDate}
                      createdDate={service.createdDate}
                      totalCost={service.totalCost}
                      address={service.address}
                      number={service.number}
                      requester={service.requester}
                      cleaner={service.cleaner}
                      cleaning={service.cleaningType}
                    />
                  ))
                : serviceUser.map((service, index) => (
                    <CleaningServices
                      onIndex={() => handleInformationsSelect(index)}
                      isInformations={index === informations}
                      index={index}
                      key={service._id}
                      id={service._id}
                      plan={service.plan}
                      duration={service.duration}
                      startingTime={service.startingTime}
                      serviceDate={service.serviceDate}
                      createdDate={service.createdDate}
                      totalCost={service.totalCost}
                      address={service.address}
                      number={service.number}
                      requester={service.requester}
                      cleaner={service.cleaner}
                      cleaning={service.cleaningType}
                      hasUser
                    />
                  ))}
            </GridServices>
          </>
        )}
      </BoxServices>
      <BoxServices>
        <Title>Accepted Services</Title>
        {serviceCleanerAccepted.length === 0 && serviceUserAccepted.length === 0 ? (
          <ErrorMessageAlt message={'Nenhum serviço encontrado...'} />
        ) : (
          <>
            <GridServices>
              {serviceCleanerAccepted.length > 0
                ? serviceCleanerAccepted.map((service, index) => (
                    <CleaningServices
                      onIndex2={() => handleInformationsSelect2(index)}
                      isInformations={index === informations2}
                      onRefresh={handleRefresh}
                      index2={index}
                      key={service._id}
                      id={service._id}
                      plan={service.plan}
                      duration={service.duration}
                      startingTime={service.startingTime}
                      serviceDate={service.serviceDate}
                      createdDate={service.createdDate}
                      totalCost={service.totalCost}
                      address={service.address}
                      number={service.number}
                      requester={service.requester}
                      cleaner={service.cleaner}
                      cleanerNumber={cleaner.number}
                      openReview={() => setOpenReview(false)}
                      onFinish={handleFinishService}
                      cleanAccepted
                    />
                  ))
                : serviceUserAccepted.map((service, index) => (
                    <CleaningServices
                      onIndex2={() => handleInformationsSelect2(index)}
                      isInformations={index === informations2}
                      index2={index}
                      onRefresh={handleRefresh}
                      key={service._id}
                      id={service._id}
                      plan={service.plan}
                      duration={service.duration}
                      startingTime={service.startingTime}
                      serviceDate={service.serviceDate}
                      createdDate={service.createdDate}
                      totalCost={service.totalCost}
                      address={service.address}
                      number={service.number}
                      requester={service.requester}
                      cleaner={service.cleaner}
                      cleanerNumber={cleaner.number}
                      openReview={() => setOpenReview(!openReview)}
                      onFinish={handleFinishService}
                      cleanAccepted
                    />
                  ))}
            </GridServices>
          </>
        )}
        {openReview && (
          <ReviewCleaner
            cleanerUser={cleaner.user}
            forCleaner={cleaner.fullName}
            onClose={() => setOpenReview(false)}
            review1
          />
        )}
        {openReview2 && (
          <ReviewCleaner
            cleanerUser={userCleaner.user}
            forCleaner={notificationData.cleaner}
            onClose={() => setOpenReview2(false)}
            review2
          />
        )}
      </BoxServices>
    </Container>
  )
}
