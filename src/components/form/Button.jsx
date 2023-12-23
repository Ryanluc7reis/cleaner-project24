import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #56648f;
  padding: 15px 20px;
  border-radius: 10px;
  display: ${(props) => props.none && 'none'};
  border: 0;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  width: 200px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  :hover {
    background-color: #677db7;
  }
  @media (max-width: 430px) {
    font-size: 25px;
    font-weight: 700;
  }
`;
export default function Button(props) {
  return (
    <StyledButton {...props}>
      {/* Se receber props.valor, ele exibe a props como texto dentro do componente */}
      {props.valor ? props.valor : "Let's go"}
    </StyledButton>
  );
}
