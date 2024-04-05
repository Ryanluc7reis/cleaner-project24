import styled from 'styled-components'
import ImageSectionOne from './ImageSectionOne'
import Selecter from '../form/Selecter'
import Button from '../form/Button'
import Navbar from '../layout/Navbar'

import H2 from '../typography/H2'
import H5 from '../typography/H5'
import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/useContext'

const BoxShadow = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: 10;
`

const StyledContainer1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 340px;
  padding-bottom: 240px;
  z-index: 3;
  color: #fff;
  @media (max-width: 905px) {
    padding-left: 0;
    padding-bottom: 50px;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding-left: 60px;
    padding-bottom: 100px;
  }
  @media (max-width: 475px) {
    padding-left: 10px;
    padding-bottom: 100px;
  }
`
const StyledH5 = styled.div`
  padding: 20px;
  margin-top: 25px;
  @media (max-width: 768px) {
    padding: 15px;
    margin-right: 60px;
  }
`
const StyledForm = styled.form`
  display: flex;
  gap: 40px;
  padding-top: 40px;
  align-items: center;
`

export const ErrorMessage = styled.span`
  position: absolute;
  color: #000;
  background-color: #ffffffb7;
  border: 1.2px solid #ff0000;
  width: 180px;
  height: 74px;
  text-align: center;
  border-radius: 10px;
  padding: 18px 36px;
  font-weight: bolder;
  font-size: 14px;
  transform: translate(-0%, 70%);
  @media (max-width: 768px) {
    font-size: 17px;
    padding: 10px 36px;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: -22%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #ffffffdd;
  }

  @media (max-width: 900px) {
    transform: translate(-70%, 70%);
  }
`

export default function SectionOne() {
  const router = useRouter()
  const [valor, setValor] = useState('')
  const [error, setError] = useState(false)
  const [userData, setUserData] = useContext(UserContext)

  const handleInputChange = (event) => {
    setValor(event.target.value)
  }
  const handleSubmit = () => {
    if (valor.length < 3 || valor.length < 4) {
      setError(true)
    } else {
      setError(false)
      router.push(`/plansScreen?region=${encodeURIComponent(valor)}`)
    }
  }

  return (
    <ImageSectionOne>
      <BoxShadow>
        {userData ? <Navbar username={userData} /> : <Navbar type1 />}
        <StyledContainer1>
          <H2>Find Top Rated Cleaners!</H2>
          <StyledH5 id="input1">
            <H5>• Change Your Cleaner at Anytime</H5>
            <H5>• Dedicated Customer Service</H5>
            <H5>• Liability Insured Up to £4M</H5>
          </StyledH5>
          {error && <ErrorMessage>That region is invalid.</ErrorMessage>}
          <StyledForm onSubmit={(e) => e.preventDefault()}>
            <Selecter region value={valor} onChange={handleInputChange} />
            <Button type="button" onClick={handleSubmit}>
              Let´s go
            </Button>
          </StyledForm>
        </StyledContainer1>
      </BoxShadow>
    </ImageSectionOne>
  )
}
