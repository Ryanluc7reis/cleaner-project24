import styled from 'styled-components'
import { useState, useEffect } from 'react'
import TextBoxService from './TextBoxService'

const StyledFlexImage = styled.div`
  display: flex;
  justify-content: center;
`
const StyledImage = styled.div`
  background-image: url('/imageCasal.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  width: 100%;
  min-height: 100%;
  margin: 100px 100px;
`

const StyledLimpezaImage = styled.img`
  background-repeat: no-repeat;
  width: 70px;
  height: 70px;
`
const StyledBoxServices = styled.div`
  background-color: #0d1d35ad;
  width: 415px;
  height: 485px;
  margin: 30px 20px;
  display: grid;
  grid-template-columns: 200px 200px;
  gap: 3px;
  padding-top: 4px;
  justify-content: space-around;
  @media (max-width: 1266px) {
    height: 495px;
  }
  @media (max-width: 638px) {
    height: 527px;
  }
  @media (max-width: 426px) {
    height: 595px;
    width: 423px;
  }
  @media (max-width: 376px) {
    height: 640px;
    width: 435px;
  }
  @media (max-width: 326px) {
    height: 610px;
    width: 610px;
    grid-template-columns: 200px 200px 200px;
  }
`
const StyledService = styled.div`
  border: 2px solid;
  border-color: #5222ffda;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px 0px;
  @media (max-width: 326px) {
    padding: 14px 15px;
  }
`
const StyledNameClean = styled.p`
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #f7f6f6;

  @media (max-width: 1265px) {
    font-size: 13px;
  }
  @media (max-width: 952px) {
    font-size: 15px;
  }
  @media (max-width: 756px) {
    font-size: 17px;
  }
  @media (max-width: 636px) {
    font-size: 19px;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 426px) {
    font-size: 21px;
  }
  @media (max-width: 376px) {
    font-size: 23px;
  }
  @media (max-width: 326px) {
    font-size: 33px;
  }
`
const StyledBiggerService = styled.div`
  width: 409px;
  height: 150px;
  border: 2px solid;
  border-color: #5222ffda;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 426px) {
    width: 405px;
    height: 170px;
  }
  @media (max-width: 326px) {
    width: 375px;
    min-height: 305px;
  }
  @media (max-width: 376px) {
    width: 414px;
    height: 182px;
  }
`
const StyledSaibaMais = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-decoration: underline;
  margin-top: 10px;
  color: #8a92ffe6;
  :hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
  @media (max-width: 902px) {
    font-size: 14px;
  }
  @media (max-width: 638px) {
    font-size: 16px;
  }
  @media (max-width: 427px) {
    font-size: 18px;
  }
  @media (max-width: 377px) {
    font-size: 22px;
  }
`

const StyledFlexServiceAndBoxText = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  @media (max-width: 426px) {
    gap: 20px;
    width: 100%;
  }
  @media (max-width: 374px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export default function ImageWithServices() {
  const [conteudo1, setConteudo1] = useState(false)
  const [conteudo2, setConteudo2] = useState(false)
  const [conteudo3, setConteudo3] = useState(false)
  const [conteudo4, setConteudo4] = useState(false)
  const [conteudo5, setConteudo5] = useState(false)

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (event.target.closest('conteudo') === null) {
        setConteudo1(false)
        setConteudo2(false)
        setConteudo3(false)
        setConteudo4(false)
        setConteudo5(false)
      }
    }
    document.addEventListener('click', handleClickOutSide, true)
  }, [])
  return (
    <StyledFlexImage>
      <StyledImage>
        <StyledFlexServiceAndBoxText>
          <StyledBoxServices>
            <StyledService>
              <StyledNameClean>Wet manual cleaning</StyledNameClean>
              <StyledLimpezaImage src="/limpezaManual.png" />
              <StyledSaibaMais onClick={() => setConteudo1(!conteudo1)}>know more</StyledSaibaMais>
            </StyledService>
            <StyledService>
              <StyledNameClean>Dry cleaning</StyledNameClean>
              <StyledLimpezaImage src="/vassoura.png" />
              <StyledSaibaMais onClick={() => setConteudo2(!conteudo2)}>know more</StyledSaibaMais>
            </StyledService>
            <StyledService>
              <StyledNameClean>Window cleaning</StyledNameClean>
              <StyledLimpezaImage src="/window.png" />
              <StyledSaibaMais onClick={() => setConteudo3(!conteudo3)}>know more</StyledSaibaMais>
            </StyledService>
            <StyledService>
              <StyledNameClean>Home apliance cleaning</StyledNameClean>
              <StyledLimpezaImage src="/homeApliance.png" />
              <StyledSaibaMais onClick={() => setConteudo4(!conteudo4)}>know more</StyledSaibaMais>
            </StyledService>
            <StyledBiggerService>
              <StyledNameClean>Wet manual cleaning (water)</StyledNameClean>
              <StyledLimpezaImage src="/limpezaManualWater.png" />
              <StyledSaibaMais onClick={() => setConteudo5(!conteudo5)}>know more</StyledSaibaMais>
            </StyledBiggerService>
          </StyledBoxServices>
          {conteudo1 && <TextBoxService type="1" />}
          {conteudo2 && <TextBoxService type="2" />}
          {conteudo3 && <TextBoxService type="3" />}
          {conteudo4 && <TextBoxService type="4" />}
          {conteudo5 && <TextBoxService type="5" />}
        </StyledFlexServiceAndBoxText>
      </StyledImage>
    </StyledFlexImage>
  )
}
