import styled from "styled-components";

const StyledSelect = styled.select`
padding: 8px;
color: #474747c2;
font-weight: 600;
border-radius: 7px;
font-size: 16px;
:focus{
  outline: none;
}
@media (max-width: 635px){
  padding: 10px;
}
`
const Selecter = ({...props}) => {
  return(       
          <StyledSelect {...props}>              
              <option value="" disabled>Select your region</option>
              <option value="norte">North</option>
              <option value="sul">South</option>
              <option value="oeste">East</option>
              <option value="leste">West</option>
          </StyledSelect>
  )
      
     
} 
export default Selecter