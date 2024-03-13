import styled from 'styled-components'
import NavRoutesDash from '../layout/Navroutesdash'
import Button from '../form/Button'

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #efefef;
`
const BoxHistoric = styled.div`
  background: #fff;
  min-width: 90%;
  height: 80%;
  margin: 61px 50px 0px 50px;
  padding: 20px;
  border-radius: 15px;
`
const ConatinerHistoric = styled.div`
  display: grid;
  grid-template-columns: 480px 420px;
`
const Historic = styled.div`
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
const FlexTitleText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 0px;
  align-items: center;
`
const TitleText = styled.h1`
  font-weight: 500;
  color: #a4a4a4f5;
`
const ButtonAlt = styled(Button)`
  border: 1px solid #959eb6;
  color: #fff;
  padding: 7px;
  width: 130px;
  font-size: 14px;
`
const Date = styled.div`
  font-size: 1.3rem;
`

export default function Historics() {
  return (
    <Container>
      <NavRoutesDash historic type2 />
      <BoxHistoric>
        <FlexTitleText>
          <TitleText>Latest services</TitleText>
          <ButtonAlt>Clean historic</ButtonAlt>
        </FlexTitleText>
        <ConatinerHistoric>
          <Historic>
            <h3>Limpeza (complete) feita para Maria joana</h3>
            <Date>27/05/2024</Date>
          </Historic>
          <Historic>
            <h3>Limpeza (complete) feita para Ryam</h3>
            <Date>27/05/2024</Date>
          </Historic>
          <Historic>
            <h3>Limpeza (complete) feita para Gabs</h3>
            <Date>27/05/2024</Date>
          </Historic>
          <Historic>
            <h3>Limpeza (complete) feita para Joao</h3>
            <Date>27/05/2024</Date>
          </Historic>
        </ConatinerHistoric>
      </BoxHistoric>
    </Container>
  )
}
