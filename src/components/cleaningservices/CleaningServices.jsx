import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import moment from 'moment'

import Button from '../../components/form/Button'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const Service = styled.div`
  width: 448px;
  height: 60px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%);
  background-color: #00cae3;
  color: #fff;
  margin: 0px 10px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  cursor: pointer;
`
const DropInformations = styled.div`
  width: 448px;
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
const ButtonRefuse = styled(Button)`
  padding: 7px;
  width: 90px;
  font-size: 15px;
  background: #dd0202;
  :hover {
    background: darkcyan;
  }
`
const ButtonAlt = styled(Button)`
  padding: 7px;
  width: 130px;
  font-size: 15px;
  :hover {
    background: darkcyan;
  }
`
const StyledFlexButtons = styled.div`
  display: ${(props) => (props.hasUser ? 'none' : 'flex')};
  gap: 5px;
  //color: #f31818;
`

export default function CleaningServices({
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
  ...props
}) {
  const [informations, setInformations] = useState(false)

  const toggleInformations = () => {
    setInformations(!informations)
  }

  return (
    <Container {...props}>
      <Service onClick={toggleInformations}>
        <Text>
          Limpeza ({plan}) para {requester}
        </Text>
        <Text>Solicitação feita em: {moment(createdDate).format('LLL')}</Text>
        {informations ? <ArrowImage src="/arrowcima.png" /> : <ArrowImage src="/arrowbaixo.png" />}
      </Service>
      <DropInformations informations={informations}>
        <Text>Plan : {plan}</Text>
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
          <ButtonAlt>Finish service</ButtonAlt>
        ) : (
          <div>
            {hasUser && (
              <Text style={{ color: '#f31818', fontSize: '13px' }}>
                {' '}
                Waiting for an answer from the cleaner...
              </Text>
            )}
            <StyledFlexButtons hasUser={hasUser}>
              <ButtonAccept>Accept</ButtonAccept>
              <ButtonRefuse>Refuse</ButtonRefuse>
            </StyledFlexButtons>
          </div>
        )}
      </DropInformations>
    </Container>
  )
}
