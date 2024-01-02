import styled from 'styled-components'
import { StyledFlexNavBar } from '.'
import { DivEtapas } from '.'
import dynamic from 'next/dynamic'
import React from 'react'
import { useRouter } from 'next/router'
import Logo from '../../src/components/logo/Logo'
import ListCleaners from '../../src/components/listcleaners/ListCleaners'
import Button from '../../src/components/form/Button'
import { useState } from 'react'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const LogoAlt = styled(Logo)`
  margin-left: 40px;
  font-size: 34px;
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
  font-size: 19px;
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
const DivEtapasAlt = styled(DivEtapas)`
  box-shadow:
    rgba(255, 255, 255, 0.19) 0px 2px 1px,
    rgba(237, 237, 237, 0.09) 0px 4px 2px,
    rgba(204, 204, 204, 0.09) 0px 8px 4px,
    rgba(211, 211, 211, 0.09) 0px 16px 8px,
    rgba(218, 218, 218, 0.09) 0px 32px 16px;
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
const ContBody = styled.div`
  background: #edededaf;
  width: 100%;
  height: 100vh;
  display: flex;
`
const BoxFilter = styled.div`
  width: 450px;
  height: 375px;
  padding: 20px 35px;
  background-color: #fff;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  margin-top: 1px;
  margin-left: 40px;
`
const Header = styled.h1`
  font-size: 25px;
  color: #0101018e;
  font-weight: 500;
  display: flex;
  gap: 10px;
`
const HeaderAlt = styled(Header)`
  font-size: 26px;
  color: #0101018e;
  font-weight: 600;
`
const HeaderAlt1 = styled(Header)`
  font-size: 19px;
  color: #0101018e;
  font-weight: 400;
`
const HedarSub = styled.p`
  font-size: 13px;
  margin: 20px 0px;
`
const BarraFilter = styled.div`
  width: 98%;
  height: 1px;
  margin-top: 15px;
  background-color: #2020204f;
`
const BarraSelectedCleaner = styled.div`
  width: 600px;
  height: 80px;
  margin: 0px 370px;
  background: #fafafa;
  position: fixed;
  bottom: 0;
  padding: 0px 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-shadow:
    rgba(54, 54, 54, 0.777) 0px 2px 1px,
    rgba(82, 82, 82, 0.337) 0px 4px 2px,
    rgba(70, 70, 70, 0.25) 0px 8px 4px,
    rgba(85, 85, 85, 0.09) 0px 16px 8px,
    rgba(95, 95, 95, 0.339) 0px 32px 16px;
`
const ButtonAlt = styled(Button)`
  width: 165px;
  height: 47px;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
`
const BolaCleaner = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 55px;
  height: 55px;
  border-radius: 30px;
  background-color: #cacaca31;
  border: 4px solid #8b8bfff5;
  margin-bottom: 70px;
  z-index: 100;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: 50% 50%;
`
const Star = styled.img`
  height: 13px;
  width: 17px;
`
const Flexfilters = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  //color: #04047b97;
`
const SelectPriceAndCleans = styled.div`
  width: 70px;
  height: 35px;
  background-color: #e1e1e192;
  border: 2px solid #04047b97;
  border-radius: 5px;
  display: flex;
  justify-content: end;
  align-items: center;
`
const BolaImg = styled.img`
  //width: 100%;
  //height: 100%;
`

function SelectCleaner(props) {
  const router = useRouter()
  const { cardValues, region, selectedDate, selectedHour, inputUpdateHour } = router.query

  //useStates
  const [cleanerSelected, setCleanerSelected] = useState('')

  const handleCleanerSelect = (cleaner) => {
    setCleanerSelected(cleaner)
  }

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
      <DivEtapasAlt>
        <FlexEtapas>
          <Etapas>{region}</Etapas>
          <SubEtapas>LOCATION</SubEtapas>
        </FlexEtapas>
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
      </DivEtapasAlt>
      <ContBody>
        <BoxFilter>
          <Header />
          <HeaderAlt>Filter: 1</HeaderAlt>
          <HeaderAlt1>cleaners available</HeaderAlt1>
          <Flexfilters>
            <HedarSub>Price</HedarSub>
            <SelectPriceAndCleans>
              <SetaDown src="/setadown1.svg" height="25px" width="20px" />
            </SelectPriceAndCleans>
          </Flexfilters>
          <BarraFilter />
          <Flexfilters>
            <HedarSub>Minimum rating</HedarSub>
            <div style={{ display: 'flex', gap: '5px' }}>
              <Star src="/star.png" />
              <Star src="/star.png" />
              <Star src="/star.png" />
              <Star src="/star.png" />
              <Star src="/star.png" />
            </div>
          </Flexfilters>
          <BarraFilter />
          <Flexfilters>
            <HedarSub>Minimum cleans</HedarSub>
            <SelectPriceAndCleans>
              <SetaDown src="/setadown1.svg" height="25px" width="20px" />
            </SelectPriceAndCleans>
          </Flexfilters>
        </BoxFilter>
        <ListCleaners onCleanerSelect={handleCleanerSelect} />
        <BarraSelectedCleaner>
          <Etapas>Selected Cleaner</Etapas>
          <BolaCleaner image={cleanerSelected.img}>
            <h2 style={{ marginTop: '60px' }}>{cleanerSelected.name}</h2>
          </BolaCleaner>
          <ButtonAlt valor="Proceed to booking" />
        </BarraSelectedCleaner>
      </ContBody>
    </Container>
  )
}
export default dynamic(() => Promise.resolve(SelectCleaner), { ssr: false })
