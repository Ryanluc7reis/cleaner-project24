import styled from 'styled-components'

import CleaningServices from '../cleaningservices/CleaningServices'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  //background-color: #eaeaea;
  background-color: #001044eb;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`
const BoxServices = styled.div`
  width: 93%;
  min-height: 400px;
  background: white;
  border-radius: 10px;
  padding: 10px;
  overflow-y: scroll;
`
const Title = styled.h1`
  font-weight: 500;
  color: #a4a4a4f5;
  padding: 9px 0px;
`
const GridServices = styled.div`
  display: grid;
  grid-template-columns: 450px 400px;
  gap: 10px;
`
export default function Services() {
  return (
    <Container>
      <BoxServices>
        <Title>Pending Services</Title>
        <GridServices>
          <CleaningServices />
          <CleaningServices />
          <CleaningServices />
          <CleaningServices />
        </GridServices>
      </BoxServices>
      <BoxServices>
        <Title>Accepted Services</Title>
        <GridServices>
          <CleaningServices cleanAccepted />
          <CleaningServices cleanAccepted />
          <CleaningServices cleanAccepted />
          <CleaningServices cleanAccepted />
        </GridServices>
      </BoxServices>
    </Container>
  )
}
