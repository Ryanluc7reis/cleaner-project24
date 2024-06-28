import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0; 
  }
  to {
    opacity: 6;
  }
`
const StyledTextBoxService = styled.div`
  width: 400px;
  height: 200px;
  border: 3px solid;
  border-color: #7891f3;
  background: #f7f7ffe8;
  animation: ${fadeIn} 0.4s ease-in-out;
  @media (max-width: 376px) {
    height: 255px;
    margin-top: 18px;
  }
`
const TitleTextBox = styled.h3`
  align-items: center;
  font-size: 17px;
  color: #242c99e9;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 426px) {
    font-size: 20px;
    font-weight: 700;
  }
  @media (max-width: 374px) {
    font-size: 25px;
    font-weight: 700;
  }
`
const TextBox = styled.h4`
  align-items: center;
  background-image: linear-gradient(15deg, #242c9999, #25a0a8, #242c9998);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  width: 80%;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 30px;
  margin-right: 10px;
`
export default function TextBoxService({ type }) {
  return (
    <StyledTextBoxService>
      {type === '1' && (
        <TitleTextBox>
          Wet Manual Cleaning
          <TextBox>
            Keep your house clean with a thorough cleaning of the furniture and damp mopping
            throughout the entire house.
          </TextBox>
        </TitleTextBox>
      )}
      {type === '2' && (
        <TitleTextBox>
          Dry Cleaning
          <TextBox>
            Keep your house clean with a thorough sweeping throughout the entire house.
          </TextBox>
        </TitleTextBox>
      )}
      {type === '3' && (
        <TitleTextBox>
          Window Cleaning
          <TextBox>Keep all the windows of the house clean with water.</TextBox>
        </TitleTextBox>
      )}
      {type === '4' && (
        <TitleTextBox>
          Home apliance cleaning
          <TextBox>Keep all the appliances in the house clean with water and soap.</TextBox>
        </TitleTextBox>
      )}
      {type === '5' && (
        <TitleTextBox>
          Wet manual cleaning (water)
          <TextBox>
            Keep your house clean with a thorough cleaning of the furniture and the entire house
            with water and cleaning products.
          </TextBox>
        </TitleTextBox>
      )}
    </StyledTextBoxService>
  )
}
