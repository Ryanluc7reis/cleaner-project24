import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'

import CleaningServices from '../cleaningservices/CleaningServices'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #001044eb;
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
  grid-template-columns: 450px 400px;
  gap: 10px;
`

export default function Services({ ...props }) {
  const [serviceCleaner, setServiceCleaner] = useState(null)
  const [serviceUser, setServiceUser] = useState({})
  const [cleaner, setCleaner] = useState({})

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const getCleanerByName = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3333/user/findCleanerName`,
        {
          cleanerName: serviceUser.cleaner
        },
        {
          headers: { authorization: token }
        }
      )
      const datacleaner = response.data
      setCleaner(datacleaner)
    } catch (err) {
      console.error(err.message)
    }
  }
  const getServiceCleaner = async () => {
    try {
      const verifyCleaner = await axios.get(`http://localhost:3333/user/verify-cleaner`, {
        headers: {
          authorization: token
        }
      })
      if (verifyCleaner.status === 200) {
        const serviceCleaner = await axios.get(`http://localhost:3333/getService-cleaner`, {
          headers: {
            authorization: token
          }
        })
        const dataServiceCleaner = serviceCleaner.data
        setServiceCleaner(dataServiceCleaner)
        if (serviceCleaner.status === 200) {
          const response = await axios.post(
            `http://localhost:3333/user/findCleanerName`,
            {
              cleanerName: dataServiceCleaner.cleaner
            },
            {
              headers: { authorization: token }
            }
          )
          const datacleaner = response.data
          setCleaner(datacleaner)
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

  useEffect(() => {
    getServiceCleaner()
    getServiceUser()
    getCleanerByName()
  }, [setServiceCleaner, setServiceUser])
  return (
    <Container {...props}>
      <BoxServices>
        <Title>Pending Services</Title>
        <GridServices>
          {serviceCleaner !== null ? (
            <CleaningServices
              plan={serviceCleaner.plan}
              duration={serviceCleaner.duration}
              startingTime={serviceCleaner.startingTime}
              serviceDate={serviceCleaner.serviceDate}
              createdDate={serviceCleaner.createdDate}
              totalCost={serviceCleaner.totalCost}
              requester={serviceCleaner.requester}
              cleaner={serviceCleaner.cleaner}
            />
          ) : (
            <CleaningServices
              plan={serviceUser.plan}
              duration={serviceUser.duration}
              startingTime={serviceUser.startingTime}
              serviceDate={serviceUser.serviceDate}
              createdDate={serviceUser.createdDate}
              totalCost={serviceUser.totalCost}
              requester={serviceUser.requester}
              cleaner={serviceUser.cleaner}
              address={serviceUser.address}
              number={serviceUser.number}
              hasUser
            />
          )}
        </GridServices>
      </BoxServices>
      <BoxServices>
        <Title>Accepted Services</Title>
        <GridServices>
          {serviceCleaner ? (
            <CleaningServices
              plan={serviceCleaner.plan}
              duration={serviceCleaner.duration}
              startingTime={serviceCleaner.startingTime}
              serviceDate={serviceCleaner.serviceDate}
              createdDate={serviceCleaner.createdDate}
              totalCost={serviceCleaner.totalCost}
              requester={serviceCleaner.requester}
              cleaner={serviceCleaner.cleaner}
              cleanerNumber={cleaner.number}
              cleanAccepted
            />
          ) : (
            <CleaningServices
              plan={serviceUser.plan}
              duration={serviceUser.duration}
              startingTime={serviceUser.startingTime}
              serviceDate={serviceUser.serviceDate}
              createdDate={serviceUser.createdDate}
              totalCost={serviceUser.totalCost}
              requester={serviceUser.requester}
              cleaner={serviceUser.cleaner}
              address={serviceUser.address}
              number={serviceUser.number}
              cleanerNumber={cleaner.number}
              cleanAccepted
            />
          )}
        </GridServices>
      </BoxServices>
    </Container>
  )
}
