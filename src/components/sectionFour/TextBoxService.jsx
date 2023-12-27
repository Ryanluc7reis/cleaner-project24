import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0; 
  }
  to {
    opacity: 6;
  }
`;
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
`;
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
`;
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
`;
export default function TextBoxService({ type }) {
  return (
    <StyledTextBoxService>
      {type === "1" && (
        <TitleTextBox>
          Wet Manual Cleaning
          <TextBox>
            Tenha sua casa limpa composta por uma geral nos móveis e pano úmido
            na casa toda.
          </TextBox>
        </TitleTextBox>
      )}
      {type === "2" && (
        <TitleTextBox>
          Dry Cleaning
          <TextBox>
            Tenha sua casa limpa composta por uma geral com vassoura na casa
            toda.
          </TextBox>
        </TitleTextBox>
      )}
      {type === "3" && (
        <TitleTextBox>
          Window Cleaning
          <TextBox>Tenha todas janelas da casa limpa com água.</TextBox>
        </TitleTextBox>
      )}
      {type === "4" && (
        <TitleTextBox>
          Home apliance cleaning
          <TextBox>
            Tenha todos eletrodomésticos da casa limpo com água e sabão.
          </TextBox>
        </TitleTextBox>
      )}
      {type === "5" && (
        <TitleTextBox>
          Wet manual cleaning (water)
          <TextBox>
            Tenha sua casa limpa composta por uma geral nos móveis e na casa
            toda com água + produtos de limpeza.
          </TextBox>
        </TitleTextBox>
      )}
    </StyledTextBoxService>
  );
}
