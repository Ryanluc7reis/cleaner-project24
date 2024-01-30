import styled from 'styled-components'
import { StyledFlexNavBar } from '.'
import dynamic from 'next/dynamic'
import React from 'react'
import Logo from '../../src/components/logo/Logo'
import ListCleaners from '../../src/components/listcleaners/ListCleaners'
import Button from '../../src/components/form/Button'
import { useState } from 'react'
import BoxFilter from '../../src/components/listcleaners/BoxFilter'
import BarraEtapas from '../../src/components/barraetapas/BarraEtapas'
import Navbar from '../../src/components/layout/Navbar'
import { useRouter } from 'next/router'
const Container = styled.div`
  width: 100%;
  height: auto;
`

const Etapas = styled.h5`
  color: #212020d2;
  font-size: 16px;
`

const ContBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #edededaf;
  @media (max-width: 712px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 712px) {
    min-width: 115%;
  }
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
  @media (max-width: 1100px) {
    left: 20%;
    margin: 0;
  }
  @media (max-width: 840px) {
    left: 10%;
  }
  @media (max-width: 705px) {
    left: auto;
  }
  @media (max-width: 668px) {
    width: 450px;
    padding: 0px 30px;
  }
  @media (max-width: 478px) {
    width: 100%;
    margin: 0;
    padding: 0 10px;
    left: 0%;
  }
`
const ButtonAlt = styled(Button)`
  width: 165px;
  height: 47px;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  background-color: ${(props) => (props.isDisabled ? 'grey' : props.theme.colors.ultravio)};
  cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
  :hover{
    background-color: ${(props) => (props.isDisabled ? 'grey' : '#677db7')};
  }
  @media (max-width: 668px) {
    margin: 0;
  }
  @media (max-width: 400px) {
    width: 135px;
  }
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
  margin-left: 10px;
  z-index: 100;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: 50% 50%;
`

function SelectCleaner(props) {
  const [cleanerSelected, setCleanerSelected] = useState('')
  const router = useRouter()
  const handleCleanerSelect = (cleaner) => {
    setCleanerSelected(cleaner)
  }

  return (
    <Container>
      <StyledFlexNavBar>
        <Navbar type2 />
      </StyledFlexNavBar>
      <BarraEtapas />
      <ContBody>
        <BoxFilter />
        <ListCleaners onCleanerSelect={handleCleanerSelect} selectedCleaner={cleanerSelected} />
        <BarraSelectedCleaner>
          <Etapas>Selected Cleaner</Etapas>
          <BolaCleaner image={cleanerSelected?.img}>
            <h2 style={{ marginTop: '60px' }}>{cleanerSelected?.name}</h2>
          </BolaCleaner>
          <ButtonAlt
            isDisabled={cleanerSelected  ? false : true}
            valor="Proceed to booking"
            onClick={() => {
              router.push('/booking/booking-one')
              localStorage.setItem('PriceH', cleanerSelected.price)
            }}
          />
        </BarraSelectedCleaner>
      </ContBody>
    </Container>
  )
}
export default dynamic(() => Promise.resolve(SelectCleaner), { ssr: false })
