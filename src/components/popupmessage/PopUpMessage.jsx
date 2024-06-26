import styled, { keyframes } from 'styled-components'

const BoxMessage = styled.div`
  width: 400px;
  height: 60px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%);
  background-color: #00cae3;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  position: absolute;
  right: 2%;
  bottom: 8%;
  animation: ${(props) => props.notification && slideLeft} 0.3s forwards;
  transform-origin: right;
  visibility: ${(props) => (props.notification ? 'visible' : 'hidden')};
  @media (max-width: 1024px) {
    bottom: 0;
    right: -20%;
  }
  @media (max-width: 768px) {
    bottom: 0;
    right: -30%;
  }
  @media (max-width: 425px) {
    bottom: 0;
    right: -85%;
  }
  @media (max-width: 375px) {
    bottom: 0;
    right: -100%;
  }
  @media (max-width: 320px) {
    bottom: 0;
    right: -120%;
  }
`
const BoxMessageToRequest = styled.div`
  width: 300px;
  height: 90px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%);
  background-color: #ffffff;
  color: #383838;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 25px;
  position: absolute;
  top: 2%;
  right: 38%;
  animation: ${(props) => props.notificationRequest && slideDown} 0.3s forwards;
  transform-origin: top;
  visibility: ${(props) => (props.notificationRequest ? 'visible' : 'hidden')};
`
const slideLeft = keyframes`
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
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

const Close = styled.img`
  padding: 2px;
  cursor: pointer;
  opacity: 0.6;
`
const Check = styled.img`
  width: 32px;
  height: 30px;
`
export default function PopUpMessage({
  notification,
  notificationMessage,
  messageToOkrequest,
  moreNotificationsCount,
  error,
  children,
  ...props
}) {
  const handleClose = () => {
    props.onClose()
  }
  return (
    <>
      {notification && (
        <BoxMessage {...props} notification={notificationMessage}>
          <h4>{notification}</h4>
          {moreNotificationsCount === false ? '' : <h4>{'+' + moreNotificationsCount}</h4>}
          <Close onClick={handleClose} src="/Xwhite.svg" />
        </BoxMessage>
      )}
      {messageToOkrequest && (
        <BoxMessageToRequest {...props} notificationRequest={messageToOkrequest}>
          {children}
          {error ? <Check src="/erro.png" /> : <Check src="/check.png" />}
        </BoxMessageToRequest>
      )}
    </>
  )
}
