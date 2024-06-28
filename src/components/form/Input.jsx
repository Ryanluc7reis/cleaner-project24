import styled from 'styled-components'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 7px;
`
const StyledLabelAlt = styled(StyledLabel)`
  font-size: 22px;
`

const StyledInput = styled.input`
  width: 240px;
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  background-color: ${(props) => props.theme.colors.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  :focus {
    outline: none;
  }
  @media (max-width: 430px) {
    font-size: 25px;
    font-weight: 700;
    width: 255px;
  }
`

const Input = ({ label, colorlabel, password, type1, ...props }) => {
  return (
    <InputContainer>
      {type1 ? (
        <StyledLabelAlt style={{ ...(colorlabel && { color: 'white' }) }}> {label}</StyledLabelAlt>
      ) : (
        <StyledLabel style={{ ...(colorlabel && { color: 'white' }) }}> {label}</StyledLabel>
      )}
      <StyledInput
        type={password ? 'password' : 'text'}
        autoComplete={password ? 'auto-complete' : null}
        {...props}
      />
    </InputContainer>
  )
}

export default Input
