import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
`
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

const Close = styled.img`
  padding: 2px;
  cursor: pointer;
  opacity: 0.6;
`

export default function PopUpMessage({
  notification,
  notificationMessage,
  messageToOkrequest,
  moreNotificationsCount,
  ...props
}) {
  const handleClose = () => {
    props.onClose()
  }
  return (
    <Container {...props}>
      {notification && (
        <BoxMessage notification={notificationMessage}>
          <h4>{notification}</h4>
          {moreNotificationsCount === false ? '' : <h4>{'+' + moreNotificationsCount}</h4>}
          <Close onClick={handleClose} src="/Xwhite.svg" />
        </BoxMessage>
      )}
      {messageToOkrequest && <BoxMessage>{messageToOkrequest}</BoxMessage>}
    </Container>
  )
}
