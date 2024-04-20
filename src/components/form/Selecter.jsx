import styled from 'styled-components'
import React from 'react'

const StyledContainer = styled.div``
const StyledSelect = styled.select`
  padding: 10px;
  width: 190px;
  height: 47px;
  color: #474747c2;
  font-weight: 600;
  border-radius: 7px;
  font-size: 15px;
  :focus {
    outline: none;
  }
  @media (max-width: 635px) {
    padding: 10px;
  }
  @media (max-width: 426px) {
    margin-top: 4px;
    height: 53px;
    font-size: 18px;
    width: 212px;
  }
  @media (max-width: 375px) {
    font-size: 19px;
  }
`
const StyledSelectAlt = styled(StyledSelect)`
  width: 100%;
  margin: 10px 0px;
`
const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0px;
`
const InputContainer = styled.div`
  width: auto;
  height: auto;
`
const StyledSelecterAlt1 = styled.select`
  background-color: ${(props) => props.theme.colors.inputBackground};

  width: 240px;
  font-size: 12px;
  padding: 13px 8px;
  box-sizing: border-box;
  border-radius: 10px;
  :focus {
    outline: none;
  }
  @media (max-width: 1025px) {
    padding: 10px 17px;
  }
  @media (max-width: 900px) {
    padding: 6px 13px;
  }
`
const StyledSelectAlt2 = styled.select`
  width: 240px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  background-color: ${(props) => props.theme.colors.inputBackground};
  padding: 13px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  :focus {
    outline: none;
  }
`

const Selecter = ({
  region,
  year,
  month,
  parcelas,
  typeCleaning,
  typeCleaningCreate,
  cleaning,
  cleaning2,
  cleaning3,
  region2,
  label,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      {region && (
        <StyledSelect>
          <option value="" disabled="">
            Select your region
          </option>
          <option value="north">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </StyledSelect>
      )}
      {region2 && (
        <StyledSelectAlt2>
          <option value="" disabled="">
            select your region
          </option>
          <option style={{ color: 'black' }} value="North">
            North
          </option>
          <option style={{ color: 'black' }} value="South">
            South
          </option>
          <option style={{ color: 'black' }} value="East">
            East
          </option>
          <option style={{ color: 'black' }} value="West">
            West
          </option>
        </StyledSelectAlt2>
      )}
      {year && (
        <StyledSelectAlt>
          <option value="" disabled="">
            Ano
          </option>
          <option value="22">2022</option>
          <option value="23">2023</option>
          <option value="24">2024</option>
          <option value="25">2025</option>
          <option value="26">2026</option>
        </StyledSelectAlt>
      )}
      {month && (
        <StyledSelectAlt>
          <option value="" disabled="">
            Mês
          </option>
          <option value="Janeiro">Janeiro</option>
          <option value="Fevereiro">Fevereiro</option>
          <option value="Março">Março</option>
          <option value="Abril">Abril</option>
          <option value="Maio">Maio</option>
          <option value="Junho">Junho</option>
          <option value="Julho">Julho</option>
          <option value="Agosto">Agosto</option>
          <option value="Setembro">Setembro</option>
          <option value="Outubro">Outubro</option>
          <option value="Novembro">Novembro</option>
          <option value="Dezembro">Dezembro</option>
        </StyledSelectAlt>
      )}
      {parcelas && (
        <StyledSelectAlt>
          1x de R$290,00
          <option value="Pacelas" disabled>
            Parcelas
          </option>
          <option value="1x de R$290,00 ">1x de R$290,00 </option>
          <option value="3x de R$290,00 ">3x de R$290,00 </option>
          <option value="6x de R$290,00">6x de R$290,00 </option>
          <option value="12x de R$290,00">12x de R$290,00 </option>
        </StyledSelectAlt>
      )}
      {typeCleaning && (
        <StyledSelecterAlt1>
          {cleaning ? (
            <option style={{ fontSize: '12px' }} disabled="">
              {cleaning}
            </option>
          ) : null}
          {cleaning2 ? (
            <option style={{ fontSize: '12px' }} disabled="">
              {cleaning2}
            </option>
          ) : null}
          {cleaning3 ? (
            <option style={{ fontSize: '12px' }} disabled="">
              {cleaning3}
            </option>
          ) : null}
          <option style={{ fontSize: '14px' }} value="Wet manual cleaning">
            Wet manual cleaning
          </option>
          <option style={{ fontSize: '14px' }} value="Window cleaning ">
            Window cleaning
          </option>
          <option style={{ fontSize: '14px' }} value="Home apliance cleaning">
            Home apliance cleaning{' '}
          </option>
          <option style={{ fontSize: '14px' }} value="Dry cleaning">
            Dry cleaning{' '}
          </option>
          <option style={{ fontSize: '14px' }} value="Wet manual cleaning (water)">
            Wet manual cleaning (water){' '}
          </option>
        </StyledSelecterAlt1>
      )}
      {typeCleaningCreate && (
        <StyledSelecterAlt1>
          <option style={{ fontSize: '12px' }} disabled="">
            Select your cleaning
          </option>
          <option style={{ fontSize: '14px' }} value="Wet manual cleaning">
            Wet manual cleaning
          </option>
          <option style={{ fontSize: '14px' }} value="Window cleaning ">
            Window cleaning
          </option>
          <option style={{ fontSize: '14px' }} value="Home apliance cleaning">
            Home apliance cleaning{' '}
          </option>
          <option style={{ fontSize: '14px' }} value="Dry cleaning">
            Dry cleaning{' '}
          </option>
          <option style={{ fontSize: '14px' }} value="Wet manual cleaning (water)">
            Wet manual cleaning (water){' '}
          </option>
        </StyledSelecterAlt1>
      )}
    </StyledContainer>
  )
}
export default Selecter
