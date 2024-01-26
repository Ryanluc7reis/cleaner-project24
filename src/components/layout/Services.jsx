import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: auto;
`
const DivNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`

const NavBarText = styled.p`
  font-size: 2rem;
  cursor: pointer;
`

const DivNavBarSearch = styled.div`
  margin: 0 100px 0 0;
`

const NavBarSearch = styled.input`
  width: 150px;
`

const NavBarSearchButton = styled.button`
  cursor: pointer;
  margin: 0 0 0 10px;
  width: fit-content;
  height: fit-content;
`

const DivCard = styled.div`
  margin: 0 0 0 100px;
  width: 999px;
`
const CardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`
const DivCardHeader = styled.div`
  margin-top: 50px;
  width: 100%;
  padding-bottom: 50px;
  background-color: blue;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const DivCardBody = styled.div`
  padding-bottom: 500px;
  width: 100%;
  background-color: rgba(0, 128, 0, 0.2);
`
const TableRow = styled.tr`
  text-align: left;
  margin-left: 200px;
  font-size: 16px;
`
export default function Services() {
  return (
    <Container>
      <DivNavBar>
        <NavBarText>Services</NavBarText>
        <DivNavBarSearch>
          <NavBarSearch type="text" />
          <NavBarSearchButton type="submit">SEARCH</NavBarSearchButton>
        </DivNavBarSearch>
      </DivNavBar>

      {/* LISTA DE SERVICOS CONFIRMADOS */}

      <DivCard>
        <DivCardHeader>
          <h1>SERVICES</h1>
        </DivCardHeader>
        <DivCardBody>
          <CardTable>
            {/*  */}
            <tbody>
              {/* tbody incluso por bug do next.js, não modificar ou gerar componente */}
              <TableRow>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
              </TableRow>
              <TableRow>
                <td>1</td>
                <td>joao</td>
                <td>45$</td>
                <td>26/07/02</td>
              </TableRow>
              <TableRow>
                <td>1</td>
                <td>joao</td>
                <td>45$</td>
                <td>26/07/02</td>
              </TableRow>
            </tbody>
          </CardTable>
        </DivCardBody>
      </DivCard>

      <DivCard>
        <DivCardHeader>
          <h1>SERVICES</h1>
        </DivCardHeader>
        <DivCardBody>
          <CardTable>
            <tbody>
              <TableRow>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
              </TableRow>
              <TableRow>
                <td>1</td>
                <td>Gabriel</td>
                <td>50$</td>
                <td>21/02/23</td>
              </TableRow>
            </tbody>
          </CardTable>
        </DivCardBody>
      </DivCard>
    </Container>
  )
}
