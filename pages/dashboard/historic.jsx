import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'

import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Historics from '../../src/components/historic/Historic'
import NavRoutesDash from '../../src/components/layout/Navroutesdash'
import Button from '../../src/components/form/Button'
import ErrorMessage from '../../src/components/errormessage/ErrorMessage'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #001044;
  display: flex;
`

const BoxHistoric = styled.div`
  background: #fff;
  width: 94%;
  height: 90%;
  margin: 0px 35px;
  padding: 20px;
  border-radius: 15px;
  overflow-y: scroll;
  @media (max-width: 900px) {
    margin: 0px 15px;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
  @media (max-width: 444px) {
    padding: 15px 10px;
  }
`
const FlexTitleText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
  align-items: center;
`
const TitleText = styled.h1`
  font-weight: 500;
  color: #a4a4a4f5;
`
const GridHistoric = styled.div`
  display: grid;
  grid-template-columns: 480px 420px;
  @media (max-width: 1034px) {
    grid-template-columns: 460px;
  }
  @media (max-width: 425px) {
    gap: 10px;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ButtonAlt = styled(Button)`
  border: 1px solid #959eb6;
  color: #fff;
  padding: 7px;
  width: 130px;
  font-size: 14px;
`
const ErrorMessageAlt = styled(ErrorMessage)`
  padding: 150px 360px;
  @media (max-width: 768px) {
    padding: 100px 270px;
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
const NavBarDashboardAlt = styled(NavBarDashboard)`
  @media (max-width: 1306px) {
    display: ${(props) => (props.show ? 'flex' : 'none')};
    width: 287px;
    min-height: 100%;
    position: fixed;
    animation: ${(props) => (props.show ? slideRight : slideLeft)} 0.3s forwards;
    transform-origin: left;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  }
`

const slideRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

export default function HistoricPage() {
  const [historicData, setHistoricData] = useState([])
  const [refreshHistoric, setRefreshHistoric] = useState(false)
  const [showDash, setShowDash] = useState(false)

  const handleDash = () => {
    setShowDash(!showDash)
  }

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const getHistoric = async () => {
    try {
      const historics = await axios.get('http://localhost:3333/getHistorics', {
        headers: {
          [AUTH_NAME]: token
        }
      })
      const data = historics.data
      setHistoricData(data)
    } catch (err) {
      console.error(err.message)
    }
  }
  const cleanHistoric = async () => {
    try {
      const historicIds = historicData.map((historic) => historic._id)
      await axios.delete('http://localhost:3333/cleanHistoric', {
        headers: {
          [AUTH_NAME]: token
        },
        data: {
          ids: historicIds
        }
      })
      setHistoricData([])
      setRefreshHistoric(!refreshHistoric)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getHistoric()
  }, [refreshHistoric])
  return (
    <Container>
      <NavBarDashboardAlt onDash={handleDash} showDashBoard={showDash} show={showDash} isHistoric />
      <FlexContainer>
        <NavRoutesDash onClickDash={handleDash} historic type1 />
        <BoxHistoric>
          <FlexTitleText>
            <TitleText>Latest services</TitleText>
            <ButtonAlt onClick={cleanHistoric}>Clean historic</ButtonAlt>
          </FlexTitleText>
          {historicData.length === 0 ? (
            <ErrorMessageAlt message={'Historic não encontrado...'} />
          ) : (
            <>
              <GridHistoric>
                {historicData.length > 0 &&
                  historicData.map((historic) => (
                    <Historics
                      id={historic._id}
                      key={historic._id}
                      historicType={historic.historicType}
                      createdDate={historic.createdDate}
                    />
                  ))}
              </GridHistoric>
            </>
          )}
        </BoxHistoric>
      </FlexContainer>
    </Container>
  )
}
