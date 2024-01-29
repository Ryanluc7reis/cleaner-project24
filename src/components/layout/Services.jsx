import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: auto;
`

const DivCard = styled.div`
  margin: 50px 0 0 100px;
  width: 999px;
`
//////////////////////////////////////////////////////
const CardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`

const TableHeader = styled.th`
  // ESTILOS AQUI
  text-align: center;
  border: 2px solid #f2f2f2;
  height: 35px;
  font-weight: 700;
`
const TableRow = styled.tr`
  text-align: left;
  font-size: 16px;
  :hover {
    //opacity: 0.5;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
const TableData = styled.td`
  // ESTILOS AQUI
  height: 35px;
  border: 1px solid red;
  text-align: center;
  vertical-align: middle;
`
//////////////////////////////////////////////////////
const DivCardHeader = styled.div`
  display: flex;
  //margin-top: 50px;
  width: 100%;
  height: 75px;
  border-radius: 8px;
  background-color: blue;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  letter-spacing: 4px;
`

const DivCardBody = styled.div`
  padding-bottom: 500px;
  width: 100%;
  //background-color: rgba(0, 128, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
`
const DivShadowHeader = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 14px 8px 4px 8px;
  border-radius: 4px;

  /* box-shadow:
    -4px -4px 4px rgba(0, 0, 0, 1),
    2px 2px 2px rgba(0, 0, 0, 1); */
`
export default function Services() {
  return (
    <Container>
      {/* LISTA DE SERVICOS CONFIRMADOS */}

      <DivCard>
        <DivShadowHeader>
          <DivCardHeader>
            <h1>SERVICES</h1>
          </DivCardHeader>
        </DivShadowHeader>
        <DivCardBody>
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
        <DivShadowHeader>
          <DivCardHeader>
            <h1>SERVICES</h1>
          </DivCardHeader>
        </DivShadowHeader>
        <DivCardBody>
          <CardTable>
            <tbody>
              <TableRow>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader>Date</TableHeader>
              </TableRow>
              <TableRow>
                <TableData>1</TableData>
                <TableData>Gabriel</TableData>
                <TableData>50$</TableData>
                <TableData>21/02/23</TableData>
              </TableRow>
            </tbody>
          </CardTable>
        </DivCardBody>
      </DivCard>
      <DivCardHeader>
        <h1>SERVICES</h1>
      </DivCardHeader>
    </Container>
  )
}
