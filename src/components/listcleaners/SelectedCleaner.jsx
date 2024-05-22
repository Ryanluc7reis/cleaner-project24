import styled from 'styled-components'
import { useRouter } from 'next/router'

import Button from '../form/Button'

const BarraSelectedCleaner = styled.div`
  width: 600px;
  height: 80px;
  background: #fafafa;
  position: fixed;
  bottom: 0;
  padding: 0px 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(54, 54, 54, 0.777) 0px 2px 1px, rgba(82, 82, 82, 0.337) 0px 4px 2px,
    rgba(70, 70, 70, 0.25) 0px 8px 4px, rgba(85, 85, 85, 0.09) 0px 16px 8px,
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
  :hover {
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

const Etapas = styled.h5`
  color: #212020d2;
  font-size: 16px;
`
export default function SelectedCleaner({ name, price, selected, img, ...props }) {
  const router = useRouter()
  const handleProceedToBooking = () => {
    router.push('/booking/booking-one')
    localStorage.setItem('PriceH', price)
  }
  return (
    <BarraSelectedCleaner {...props}>
      <Etapas>Selected Cleaner</Etapas>
      <BolaCleaner image={img}>
        <h2 style={{ marginTop: '60px' }}>{name}</h2>
      </BolaCleaner>
      <ButtonAlt
        isDisabled={selected ? false : true}
        valor="Proceed to booking"
        onClick={handleProceedToBooking}
      />
    </BarraSelectedCleaner>
  )
}
