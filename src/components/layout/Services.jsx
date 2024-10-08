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
  @media (max-width: 1034px) {
    grid-template-columns: 460px;
  }
`
const ErrorMessageAlt = styled(ErrorMessage)`
  padding: 100px 360px;
  @media (max-width: 768px) {
    padding: 100px 270px;
  }
  @media (max-width: 540px) {
    padding: 100px 137px;
  }
  @media (max-width: 430px) {
    padding: 100px 100px;
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
const StyledLoader = styled.div`
  padding: 100px 450px;
  display: flex;
  align-items: center;
`

const PopUpMessageAlt = styled(PopUpMessage)`
  position: fixed;
  top: 2%;
  right: 30%;
  @media (max-width: 1024px) {
    right: 35%;
  }
  @media (max-width: 768px) {
    right: 30%;
  }

  @media (max-width: 425px) {
    right: 15%;
  }
  @media (max-width: 375px) {
    right: 10%;
  }
  @media (max-width: 320px) {
    right: 3%;
  }
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
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME

  const getServiceCleaner = async () => {
    try {
      const verifyCleaner = await axios.get(
        `https://cleaner-project-be.vercel.app/user/verify-cleaner`,
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )
      if (verifyCleaner.status === 200) {
        try {
          const serviceCleaner = await axios.get(
            `https://cleaner-project-be.vercel.app/getService-cleaner`,
            {
              headers: {
                [AUTH_NAME]: token
              }
            }
          )

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
      const serviceUser = await axios.get(`https://cleaner-project-be.vercel.app/getService-user`, {
        headers: {
          [AUTH_NAME]: token
        }
      })

      const dataServiceUser = serviceUser.data
      setServiceUser(dataServiceUser)
      if (serviceUser.status === 200) {
        const response = await axios.post(
          `https://cleaner-project-be.vercel.app/user/findCleanerName`,
          {
            cleanerName: dataServiceUser.cleaner
          },
          {
            headers: { [AUTH_NAME]: token }
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
      const serviceUserAccepted = await axios.get(
        `https://cleaner-project-be.vercel.app/getServiceAccepted-user`,
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )

      const dataServiceUserAccepted = serviceUserAccepted.data
      setServiceUserAccepted(dataServiceUserAccepted)
      if (serviceUserAccepted.status === 200) {
        const response = await axios.post(
          `https://cleaner-project-be.vercel.app/user/findCleanerName`,
          {
            cleanerName: dataServiceUserAccepted[index].cleaner
          },
          {
            headers: { [AUTH_NAME]: token }
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
        `https://cleaner-project-be.vercel.app/getServiceAccepted-cleaner`,
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )

      const dataServiceCleanerAccepted = serviceCleanerAccepted.data
      setServiceCleanerAccepted(dataServiceCleanerAccepted)
      if (serviceCleanerAccepted.status === 200) {
        const response = await axios.post(
          `https://cleaner-project-be.vercel.app/user/findCleanerName`,
          {
            cleanerName: dataServiceCleanerAccepted[index].cleaner
          },
          {
            headers: { [AUTH_NAME]: token }
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
      const notification = await axios.get(
        'https://cleaner-project-be.vercel.app/getOneNotificationRating',
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )
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
        'https://cleaner-project-be.vercel.app/user/findCleanerName',
        {
          cleanerName: nameCleaner
        },
        {
          headers: {
            [AUTH_NAME]: token
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
            Request made successfully
          </PopUpMessageAlt>
        )}
        {popUpMessage2 && (
          <PopUpMessageAlt messageToOkrequest={popUpMessage2}>
            Service completed successfully
          </PopUpMessageAlt>
        )}
        <Title>Pending Services</Title>
        {!serviceUser || !serviceCleaner ? (
          <StyledLoader>
            <img width="30px" height="28px" src="/loadingGif.png" />
            <h2>Loading</h2>
          </StyledLoader>
        ) : (
          <>
            {serviceCleaner.length === 0 && serviceUser.length === 0 ? (
              <ErrorMessageAlt message={'No services found...'} />
            ) : (
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
            )}
          </>
        )}
      </BoxServices>
      <BoxServices>
        <Title>Accepted Services</Title>
        {!serviceUserAccepted || !serviceCleanerAccepted ? (
          <StyledLoader>
            <img width="30px" height="28px" src="/loadingGif.png" />
            <h2>Loading</h2>
          </StyledLoader>
        ) : (
          <>
            {serviceCleanerAccepted.length === 0 && serviceUserAccepted.length === 0 ? (
              <ErrorMessageAlt message={'No services found...'} />
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
                          cleaning={service.cleaningType}
                          cleanerUser={cleaner.user}
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
                          cleaning={service.cleaningType}
                          openReview={() => setOpenReview(!openReview)}
                          onFinish={handleFinishService}
                          cleanerUser={cleaner.user}
                          cleanAccepted
                        />
                      ))}
                </GridServices>
              </>
            )}
          </>
        )}

        {openReview && (
          <ReviewCleaner
            cleanerUser={cleaner?.user}
            forCleaner={cleaner?.fullName}
            onClose={() => setOpenReview(false)}
            review1
          />
        )}
        {openReview2 && (
          <ReviewCleaner
            cleanerUser={userCleaner?.user}
            forCleaner={notificationData?.cleaner}
            onClose={() => setOpenReview2(false)}
            review2
          />
        )}
      </BoxServices>
    </Container>
  )
}
