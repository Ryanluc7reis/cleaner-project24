import styled from 'styled-components'
import Input from '../form/Input'
import Button from '../form/Button'

const Form = styled.form`
  display: grid;
  grid-template-columns: 250px 250px;
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
  width: 85%;
  background-color: #2a2af3d3;
`
const ButtonAlt = styled(Button)`
  height: 45px;
  width: 170px;
  margin: 45px 150px;
`
const FlexCont = styled.div`
  display: flex;
  flex-direction: column;
`

export default function EditCard({ ...props }) {
  return (
    <Form {...props}>
      <FlexCont>
        <InputAlt placeholder="Name" />
        <Barra />
      </FlexCont>
      <FlexCont>
        <InputAlt placeholder="Rating" />
        <Barra />
      </FlexCont>
      <FlexCont>
        <InputAlt placeholder="Price" />
        <Barra />
      </FlexCont>
      <FlexCont>
        <InputAlt placeholder="Amount of cleaning" />
        <Barra />
      </FlexCont>
      <FlexCont>
        <InputAlt placeholder="Experience" />
        <Barra />
      </FlexCont>
      <FlexCont>
        <InputAlt placeholder="Region" />
        <Barra />
      </FlexCont>

      <ButtonAlt>Save changes</ButtonAlt>
    </Form>
  )
}
