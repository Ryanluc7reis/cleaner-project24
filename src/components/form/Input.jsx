import styled from "styled-components"
import { useState } from "react"


const InputContainer = styled.div`
  width: auto;

`
const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 7px;
`

const StyledInput = styled.input`
  width: 240px;
  border: 1px solid  ${props => props.theme.colors.inputBorder};
  background-color: ${props => props.theme.colors.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box ;
  border-radius : 10px;
  :focus {
    outline: none;
  }
  @media (max-width: 430px) {
    font-size: 25px;
    font-weight: 700;
    width: 255px;
  }
`



const Input = ({label, ...props }) => {                                                
  return (                                                     
     <InputContainer>
         <StyledLabel> {label}</StyledLabel>
         <StyledInput  {...props}   />
     </InputContainer>
  )
  
}

export default Input