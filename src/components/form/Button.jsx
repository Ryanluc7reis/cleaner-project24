import styled from 'styled-components'

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
`
const SetaButton = styled.img`
  width: 12px;
  height: 12px;
  position: absolute;
  transform: translate(20%, 12%);
`
const RightButton = styled.img`
  width: 17px;
  height: 16px;
  position: absolute;
  transform: translate(20%, -6%);
`
export default function Button({ children, disabled, arrowButton, ...props }) {
  return (
    <StyledButton disabled={props.isDisabled} {...props}>
      {children}
      {props.valor ? props.valor : ''}
      {arrowButton === true && <SetaButton src="/arrowrightWhite.png" />}
      {arrowButton === false && <RightButton src="/Whitecheck.png" />}
    </StyledButton>
  )
}
