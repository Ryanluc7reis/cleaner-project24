import styled from 'styled-components'
import Input from '../form/Input'
import Button from '../form/Button'

const Form = styled.form`
  display: flex;
  //flex-wrap: wrap;
  flex-direction: column;
`
const InputAlt = styled(Input)`
  width: 270px;
  padding: 10px;
  background: transparent;
  border: none;
`
const Barra = styled.div`
  height: 1px;
  width: 100%;
  background-color: #2a2af3d3;
`
const ButtonAlt = styled(Button)`
  height: 45px;
  width: 170px;
  margin: 45px;
`

export default function EditCard() {
  return (
    <Form>
      <InputAlt placeholder="name" />
      <Barra />
      <InputAlt placeholder="rating" />
      <Barra />
      <InputAlt placeholder="price" />
      <Barra />
      <InputAlt placeholder="amountOfCleaning" />
      <Barra />
      <InputAlt placeholder="experience" />
      <Barra />
      <ButtonAlt>Save changes</ButtonAlt>
    </Form>
  )
}
