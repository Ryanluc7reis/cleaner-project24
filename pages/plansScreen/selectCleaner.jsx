import styled from 'styled-components'
import { useState, useContext } from 'react'
import { RegionContext } from '../../src/context/useContextRegion'

import ListCleaners from '../../src/components/listcleaners/ListCleaners'
import BoxFilter from '../../src/components/listcleaners/BoxFilter'
import BarraEtapas from '../../src/components/barraetapas/BarraEtapas'
import Navbar from '../../src/components/layout/Navbar'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
`

const ContBody = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  background: #edededaf;

  @media (max-width: 712px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 712px) {
    width: 115%;
  }
`
const NavBarAlt = styled(Navbar)`
  background: #edededaf;
  height: 115px;
  @media (max-width: 712px) {
    width: 115%;
  }
`

export default function SelectCleaner() {
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedClean, setSelectedClean] = useState(null)
  const [selectedStar, setSelectedStar] = useState(null)
  const [cleanersCount, setCleanersCount] = useState(0)
  const [region, setRegion] = useContext(RegionContext)

  return (
    <Container>
      <NavBarAlt type2 />
      <BarraEtapas />
      <ContBody>
        <BoxFilter
          onPriceSelect={setSelectedPrice}
          onStarSelect={setSelectedStar}
          onCleanSelect={setSelectedClean}
        />
        <ListCleaners
          selectedPrice={selectedPrice}
          selectedClean={selectedClean}
          selectedStar={selectedStar}
          region={region}
        />
      </ContBody>
    </Container>
  )
}
