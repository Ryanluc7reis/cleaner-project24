import styled from 'styled-components'
import NavRoutesDash from './Navroutesdash'

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #eaeaea;
`

const DivCard = styled.div`
  margin: 50px 15px 0px 25px ;
  //padding: 20px;
  width: 999px;
`

const CardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHeader = styled.th`
  text-align: center;
  border: 1px solid black;
  height: 35px;
  font-weight: 700;
`
const TableRow = styled.tr`
  text-align: left;
  font-size: 16px;
  :hover {
    td {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`
const TableData = styled.td`
  height: 35px;
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
`
const DivCardBody = styled.div`
  padding-bottom: 200px;
  width: 100%;
  border-radius: 15px;
  background-color: white;
  color: black;
  overflow-y: scroll;
`
const TitleText = styled.h1`
  font-weight: 500;
  color: #a4a4a4f5;
  padding: 13px 10px;
`
export default function Services() {
  return (
    <Container>
      {/* LISTA DE SERVICOS CONFIRMADOS */}
      <NavRoutesDash dash type2 />
      <DivCard>
        <DivCardBody>
          <TitleText>Pending Services</TitleText>
          <CardTable>
            {/*  */}
            <tbody>
              {/* tbody incluso por bug do next.js, não modificar ou gerar componente */}
              <TableRow>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader>Date</TableHeader>
              </TableRow>
              <TableRow>
                <TableData>1</TableData>
                <TableData>joao</TableData>
                <TableData>45$</TableData>
                <TableData>26/07/02</TableData>
              </TableRow>
              <TableRow>
                <TableData>1</TableData>
                <TableData>joao</TableData>
                <TableData>45$</TableData>
                <TableData>26/07/02</TableData>
              </TableRow>
            </tbody>
          </CardTable>
        </DivCardBody>
        </DivCard>
        <DivCard>
        <DivCardBody>
          <TitleText>Scheduled Services</TitleText>
          <CardTable>
            {/*  */}
            <tbody>
              {/* tbody incluso por bug do next.js, não modificar ou gerar componente */}
              <TableRow>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader>Date</TableHeader>
              </TableRow>
              <TableRow>
                <TableData>1</TableData>
                <TableData>joao</TableData>
                <TableData>45$</TableData>
                <TableData>26/07/02</TableData>
              </TableRow>
              <TableRow>
                <TableData>1</TableData>
                <TableData>joao</TableData>
                <TableData>45$</TableData>
                <TableData>26/07/02</TableData>
              </TableRow>
            </tbody>
          </CardTable>
        </DivCardBody>
      </DivCard>
    </Container>
  )
}
