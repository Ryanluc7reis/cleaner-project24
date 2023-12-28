import styled from 'styled-components'
import { StyledFlexNavBar } from '.'
import { DivEtapas } from '.'
import dynamic from 'next/dynamic'
import React from 'react'
import { useRouter } from 'next/router'
import Logo from '../../src/components/logo/Logo'
import CardsCleaner from '../../src/components/cleaner/CardCleaner'
import Cards from '../../src/components/cardsplan/Cards'
const Container = styled.div`
  width: 100%;
  height: auto;
`
const LogoAlt = styled(Logo)`
  margin-left: 40px;
  color: #242c99b7;
  @media (max-width: 670px) {
    margin: 0;
    padding-top: 10px;
  }
`
const Barra = styled.div`
  width: 2px;
  height: 45px;
  margin-top: 7px;
  background-color: #20202096;
  @media (max-width: 600px) {
    width: 45px;
    height: 2px;
    display: none;
  }
`
const StyledLogin = styled.h5`
  cursor: pointer;
  font-size: 22px;
  color: #242c99b7;
  margin-right: 15px;
  margin-top: 18px;
  font-weight: 600;
  transition: all 200ms ease-in-out;
  :hover {
    color: #677cb76d;
  }
`
const CardsLogo = styled.img`
  margin-top: 8px;
`
const SetaDown = styled.img`
  //margin-left: 10px;
`
const FlexLogin = styled.div`
  display: flex;
  gap: 13px;
`
const FlexEtapas = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 35px;
  gap: 4px;
  @media (max-width: 745px) {
    margin: 0;
  }
`
const Etapas = styled.h5`
  color: #212020d2;
  font-size: 16px;
`
const SubEtapas = styled.h5`
  font-size: 15px;
  color: #2c2c2c57;
  font-weight: 700;
`

function SelectCleaner() {
  const router = useRouter()
  const { cardValues, region, selectedDate, selectedHour, inputUpdateHour } = router.query
  return (
    <Container>
      <StyledFlexNavBar>
        <LogoAlt />
        <FlexLogin>
          <CardsLogo src="/metodosPay.JPG" height="45px" width="133px" />
          <Barra />
          <StyledLogin onClick={() => router.push('/login')}>LOG-IN</StyledLogin>
        </FlexLogin>
      </StyledFlexNavBar>
      <DivEtapas>
        <FlexEtapas>
          <Etapas>{region}</Etapas>
          <SubEtapas>LOCATION</SubEtapas>
        </FlexEtapas>
        <SetaDown src="/setadown1.svg" height="45px" width="30px" />
        <Barra />
        <FlexEtapas>
          <Etapas>{cardValues}</Etapas>
          <SubEtapas>PLAN</SubEtapas>
        </FlexEtapas>
        <SetaDown src="/setadown1.svg" height="45px" width="30px" />
        <Barra />
        <FlexEtapas>
          <Etapas>{selectedDate}</Etapas>
          <SubEtapas>DATE</SubEtapas>
        </FlexEtapas>
        <SetaDown src="/setadown1.svg" height="45px" width="30px" />
        <Barra />
        <FlexEtapas>
          <Etapas>{selectedHour}</Etapas>
          <SubEtapas>DURATION</SubEtapas>
        </FlexEtapas>
        <SetaDown src="/setadown1.svg" height="45px" width="30px" />
        <Barra />
        <FlexEtapas>
          <Etapas>{inputUpdateHour}</Etapas>
          <SubEtapas>STARTING TIME</SubEtapas>
        </FlexEtapas>
        <SetaDown src="/setadown1.svg" height="45px" width="30px" />
      </DivEtapas>
      <CardsCleaner />
    </Container>
  )
}
export default dynamic(() => Promise.resolve(SelectCleaner), { ssr: false })
