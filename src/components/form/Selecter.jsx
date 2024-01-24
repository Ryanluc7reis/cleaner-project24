import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledSelect = styled.select`
padding: 8px;
color: #474747c2;
font-weight: 600;
border-radius: 7px;
font-size: 15px;
:focus{
  outline: none;
}
@media (max-width: 635px){
  padding: 10px;
}
`
const StyledSelectAlt = styled(StyledSelect)`
 width: 100%;
 margin: 10px 0px;
`
const Selecter = ({region, year, month, parcelas,  ...props}) => {
  return(  
    <Container {...props}>
         {region &&
            <StyledSelect >              
                <option value="" disabled>Select your region</option>
                <option value="norte">North</option>
                <option value="sul">South</option>
                <option value="oeste">East</option>
                <option value="leste">West</option>
            </StyledSelect>
         }
         {year &&
            <StyledSelectAlt > 
                Ano
                <option value="Ano" disabled >Ano</option>
                <option value="">2022</option>
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
            </StyledSelectAlt>
         }
         {month &&
            <StyledSelectAlt >
                Mês          
                <option value="Mês" disabled>Mês</option>
                <option value="">Janeiro</option>
                <option value="">Fevereiro</option>
                <option value="">Março</option>
                <option value="">Abril</option>
                <option value="">Maio</option>
                <option value="">Junho</option>
                <option value="">Julho</option>
                <option value="">Agosto</option>
                <option value="">Setembro</option>
                <option value="">Outubro</option>
                <option value="">Novembro</option>
                <option value="">Dezembro</option>
            </StyledSelectAlt>
         }
         {parcelas &&
            <StyledSelectAlt >
                1x de R$290,00         
                <option value="Pacelas" disabled>Parcelas</option>
                <option value="">1x de R$290,00  </option>
                <option value="">3x de R$290,00  </option>
                <option value="">6x de R$290,00  </option>
                <option value="">12x de R$290,00  </option>
            </StyledSelectAlt>
         }
    </Container>     
         
  )
      
     
} 
export default Selecter