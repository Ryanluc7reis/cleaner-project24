import styled, { keyframes } from 'styled-components'
import moment from 'moment'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect, useState } from 'react'

import Button from '../../components/form/Button'

const Form = styled.form`
  width: 100%;
  height: auto;
`
const Service = styled.div`
  width: 458px;
  height: 60px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%);
  background-color: #00cae3;
  color: #fff;
  margin: 0px 10px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  cursor: pointer;
  @media (max-width: 532px) {
    width: 372px;
    margin: 0 3px;
  }
  @media (max-width: 414px) {
    width: 366px;
  }
  @media (max-width: 390px) {
    width: 340px;
  }

  @media (max-width: 375px) {
    width: 330px;
    margin: 0px;
    padding: 0 5px;
  }
  @media (max-width: 360px) {
    width: 318px;
  }
  @media (max-width: 320px) {
    width: 279px;
  }
`
const DropInformations = styled.div`
  width: 458px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%);
  background-color: #001044eb;
  margin: 0px 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 4px;
  gap: 10px;
  padding: 10px;
  animation: ${(props) => (props.informations ? slideDown : slideUp)} 0.3s forwards;
  transform-origin: top;
  visibility: ${(props) => (props.informations ? 'visible' : 'hidden')};
  @media (max-width: 532px) {
    width: 372px;
    margin: 0 3px;
  }
  @media (max-width: 414px) {
    width: 366px;
  }

  @media (max-width: 390px) {
    width: 340px;
  }
  @media (max-width: 375px) {
    width: 330px;
    margin: 0px;
    padding: 5px 5px;
  }
  @media (max-width: 360px) {
    width: 318px;
  }
  @media (max-width: 320px) {
    width: 279px;
  }
`

const slideDown = keyframes`
  from {
    transform: scaleY(0);
    opacity: 0;
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
`

const slideUp = keyframes`
  from {
    transform: scaleY(1);
    opacity: 1;
  }
  to {
    transform: scaleY(0);
    opacity: 0;
  }
`

const Text = styled.h3`
  color: #fff;
`
const ArrowImage = styled.img`
  padding: 10px;
`
const ButtonAccept = styled(Button)`
  padding: 7px;
  width: 90px;
  font-size: 15px;
  background: #02dd02;
  :hover {
    background: darkcyan;
  }
`
const ButtonRefuse = styled.div`
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  text-align: center;
  color: #fff;
  font-weight: bold;
  transition: all 200ms ease-in-out;
  padding: 7px;
  border-radius: 8px;
  width: 90px;
  font-size: 15px;
  background: #dd0202;
  :hover {
    background: darkcyan;
  }
`
const ButtonFinish = styled.div`
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  text-align: center;
  color: #fff;
  font-weight: bold;
  transition: all 200ms ease-in-out;
  padding: 7px;
  width: 130px;
  font-size: 15px;
  background-color: #56648f;
  :hover {
    background: darkcyan;
  }
`
const StyledFlexButtons = styled.div`
  display: ${(props) => (props.hasUser ? 'none' : 'flex')};
  gap: 5px;
`

export default function CleaningServices({
  id,
  index,
  index2,
  plan,
  duration,
  startingTime,
  address,
  number,
  createdDate,
  totalCost,
  serviceDate,
  requester,
  cleaner,
  cleanerNumber,
  cleanAccepted,
  hasUser,
  isInformations,
  cleaning,
  cleanerUser,
  ...props
}) {
  const { handleSubmit } = useForm({
    mode: 'all'
  })

  const [cardData, setCardData] = useState({})
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const getCard = async () => {
    try {
      const response = await axios.get('https://cleaner-project-be.vercel.app/cleaner/getOneCard', {
        params: { cleaner: cleanerUser }
      })
      const data = response.data
      setCardData(data)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }

  const toggleInformations = () => {
    if (index !== -1 && typeof props.onIndex === 'function') {
      props.onIndex(index)
    } else if (typeof props.onIndex2 === 'function') {
      props.onIndex2(index2)
    }
  }

  const handleDeleteAndCreateHistoric = async (e) => {
    e.preventDefault()
    props.onRefresh()
    props.openReview()
    props.onFinish()

    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
      const config = {
        headers: {
          [AUTH_NAME]: token
        },
        data: { id: id }
      }
      const serviceDelete = await axios.delete(
        'https://cleaner-project-be.vercel.app/deleteService',
        config
      )
      const verifyCleaner = await axios.get(
        `https://cleaner-project-be.vercel.app/user/verify-cleaner`,
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )
      if (serviceDelete.status && verifyCleaner.status === 200) {
        try {
          const createHistoric = await axios.post(
            'https://cleaner-project-be.vercel.app/createHistoric',
            {
              for: cleaner,
              historicType: ` Limpeza (${plan}) realizada para ${requester} `
            },
            {
              headers: {
                [AUTH_NAME]: token
              }
            }
          )
          if (createHistoric.status === 201) {
            const createNotificationRating = await axios.post(
              'https://cleaner-project-be.vercel.app/createNotificationToRating',
              {
                for: requester
              },
              {
                headers: {
                  [AUTH_NAME]: token
                }
              }
            )
            if (createNotificationRating.status === 201) {
              const amount = cardData.amountCleaning + 1
              await axios.patch(
                'https://cleaner-project-be.vercel.app/cleaner/editamountCleaningCard',
                {
                  id: cardData._id,
                  creator: cardData.creator,
                  amountCleaning: amount
                },
                {
                  headers: {
                    [AUTH_NAME]: token
                  }
                }
              )
            }
          }
        } catch (err) {
          console.error(err.message)
        }
      }
    } catch (err) {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
      const createHistoric = await axios.post(
        'https://cleaner-project-be.vercel.app/createHistoric',
        {
          for: requester,
          historicType: ` Limpeza (${plan}) realizada por ${cleaner} `
        },
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )
      if (createHistoric.status === 201) {
        const amount = cardData.amountCleaning + 1
        await axios.patch(
          'https://cleaner-project-be.vercel.app/cleaner/editamountCleaningCard',
          {
            id: cardData._id,
            creator: cardData.creator,
            amountCleaning: amount
          },
          {
            headers: {
              [AUTH_NAME]: token
            }
          }
        )
      }

      console.error(err.message)
    }
  }

  const handleDeleteAndCreateNotification = async (e) => {
    e.preventDefault()
    props.onRefresh()

    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
      const config = {
        headers: {
          [AUTH_NAME]: token
        },
        data: { id: id }
      }

      const serviceDelete = await axios.delete(
        'https://cleaner-project-be.vercel.app/deleteService',
        config
      )
      if (serviceDelete.status === 200) {
        try {
          await axios.post(
            'https://cleaner-project-be.vercel.app/createNotification',
            {
              for: requester,
              notificationType: ` O cleaner (${cleaner}) recusou sua limpeza`
            },
            {
              headers: {
                [AUTH_NAME]: token
              }
            }
          )
        } catch (err) {
          console.error(err.message)
        }
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleForm = async () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    const config = {
      headers: {
        [AUTH_NAME]: token
      }
    }
    try {
      const responseCreateService = await axios.post(
        `https://cleaner-project-be.vercel.app/createServiceAccepted`,
        {
          plan: plan,
          duration: duration,
          startingTime: startingTime,
          serviceDate: serviceDate,
          totalCost: totalCost,
          requester: requester,
          address: address,
          number: number,
          cleaner: cleaner,
          cleaningType: cleaning
        },
        config
      )

      if (responseCreateService.status === 201) {
        props.onRefresh()
        try {
          const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
          const config2 = {
            headers: {
              [AUTH_NAME]: token
            },
            data: { id: id }
          }
          const responseDelete = await axios.delete(
            'https://cleaner-project-be.vercel.app/deleteService',
            config2
          )
          if (responseDelete.status === 200) {
            await axios.post(
              'https://cleaner-project-be.vercel.app/createNotification',
              {
                for: requester,
                notificationType: ` O cleaner (${cleaner}) aceitou sua limpeza`
              },
              {
                headers: {
                  [AUTH_NAME]: token
                }
              }
            )
          }
        } catch (err) {
          console.error(err.message)
        }
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    getCard()
  }, [cleanerUser, isInformations])
  return (
    <Form
      onClick={() => toggleInformations(index || index2)}
      onSubmit={handleSubmit(handleForm)}
      {...props}
    >
      <Service>
        <Text>
          Limpeza ({plan}) para {requester}
        </Text>
        {cleanAccepted ? (
          <Text style={{ fontSize: '11px' }}>
            {' '}
            Serviço aceito em : {moment(createdDate).format('DD/MM/YYYY')}
          </Text>
        ) : (
          <Text style={{ fontSize: '11px' }}>
            {' '}
            Solicitação feita em : {moment(createdDate).format('DD/MM/YYYY')}
          </Text>
        )}

        {isInformations ? (
          <ArrowImage src="/arrowcima.png" />
        ) : (
          <ArrowImage src="/arrowbaixo.png" />
        )}
      </Service>
      <DropInformations informations={isInformations}>
        {plan === 'Optional' ? (
          <Text>
            Plan : {plan} ({cleaning})
          </Text>
        ) : (
          <Text>Plan : {plan}</Text>
        )}
        <Text>Duration : {duration}</Text>
        <Text>Starting Time : {startingTime}</Text>
        <Text>Service to date : {serviceDate}</Text>
        <Text>Address : {address}</Text>
        <Text>Number of client : {number}</Text>
        <Text>Requester : {requester}</Text>

        {cleanAccepted ? (
          <Text>
            Cleaner: {cleaner} (Number of contact : {cleanerNumber})
          </Text>
        ) : (
          <Text>Cleaner: {cleaner}</Text>
        )}
        <Text>Total cost : {totalCost}</Text>
        {cleanAccepted ? (
          <ButtonFinish onClick={handleDeleteAndCreateHistoric}>Finish service</ButtonFinish>
        ) : (
          <div>
            {hasUser && (
              <Text style={{ color: '#f31818', fontSize: '13px' }}>
                {' '}
                Waiting for an answer from the cleaner...
              </Text>
            )}
            <StyledFlexButtons hasUser={hasUser}>
              <ButtonAccept type="submit">Accept</ButtonAccept>
              <ButtonRefuse onClick={handleDeleteAndCreateNotification}>Refuse</ButtonRefuse>
            </StyledFlexButtons>
          </div>
        )}
      </DropInformations>
    </Form>
  )
}
