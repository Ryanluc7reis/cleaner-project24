import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'

import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Historics from '../../src/components/historic/Historic'
import NavRoutesDash from '../../src/components/layout/Navroutesdash'
import Button from '../../src/components/form/Button'
import ErrorMessage from '../../src/components/errormessage/ErrorMessage'

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #001044;
`
const StyledFlex = styled.div`
  display: flex;
`
const BoxHistoric = styled.div`
  background: #fff;
  width: 93%;
  height: 80%;
  margin: 61px 50px 0px 50px;
  padding: 20px;
  border-radius: 15px;
  overflow-y: scroll;
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
const GridHistoric = styled.div`
  display: grid;
  grid-template-columns: 480px 420px;
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`
export default function HistoricPage() {
  const [historicData, setHistoricData] = useState([])
  const [refreshHistoric, setRefreshHistoric] = useState(false)

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const getHistoric = async () => {
    try {
      const historics = await axios.get('http://localhost:3333/getHistorics', {
        headers: {
          authorization: token
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
          authorization: token
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
      <StyledFlex>
        <NavBarDashboard isHistoric />
        <FlexContainer>
          <NavRoutesDash historic type1 />
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
      </StyledFlex>
    </Container>
  )
}
