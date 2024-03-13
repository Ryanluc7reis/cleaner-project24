import styled from 'styled-components'
import NavRoutesDash from '../layout/Navroutesdash'

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #efefef;
`
const BoxNotifications = styled.div`
  background: #fff;
  min-width: 90%;
  height: 80%;
  margin: 61px 50px 0px 50px;
  padding: 20px;
  border-radius: 15px;
`
const ConatinerNotificaçao = styled.div`
  display: grid;
  grid-template-columns: 480px 420px;
`
const Notificaçao = styled.div`
  width: 448px;
  height: 60px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%);
  background-color: #00cae3;
  color: #fff;
  margin-bottom: 18px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
`
const Close = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  opacity: 0.6;
`
const TitleText = styled.h1`
  font-weight: 500;
  color: #a4a4a4f5;
  padding: 9px 0px;
`

export default function Notifications() {
  return (
    <Container>
      <NavRoutesDash notifications type2 />
      <BoxNotifications>
        <TitleText>New notifications</TitleText>
        <ConatinerNotificaçao>
          <Notificaçao>
            <h3>Nova requisição para limpeza</h3>
            <Close src="/Xwhite.svg" />
          </Notificaçao>
          <Notificaçao>
            <h3>Nova requisição para limpeza</h3>
            <Close src="/Xwhite.svg" />
          </Notificaçao>
          <Notificaçao>
            <h3>Nova requisição para limpeza</h3>
            <Close src="/Xwhite.svg" />
          </Notificaçao>
          <Notificaçao>
            <h3>Nova requisição para limpeza</h3>
            <Close src="/Xwhite.svg" />
          </Notificaçao>
        </ConatinerNotificaçao>
      </BoxNotifications>
    </Container>
  )
}
