import styled from 'styled-components'
import dynamic from 'next/dynamic'

import ListCleaners from '../../src/components/listcleaners/ListCleaners'
import BoxFilter from '../../src/components/listcleaners/BoxFilter'
import BarraEtapas from '../../src/components/barraetapas/BarraEtapas'
import Navbar from '../../src/components/layout/Navbar'

const Container = styled.div`
  width: 100%;
  height: auto;
`

const ContBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #edededaf;
  @media (max-width: 712px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 712px) {
    min-width: 115%;
  }
`

function SelectCleaner() {
  return (
    <Container>
      <Navbar style={{ background: '#edededaf' }} type2 />
      <BarraEtapas />
      <ContBody>
        <BoxFilter />
        <ListCleaners />
      </ContBody>
    </Container>
  )
}
export default dynamic(() => Promise.resolve(SelectCleaner), { ssr: false })
