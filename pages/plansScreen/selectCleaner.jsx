import styled from "styled-components";
import { StyledFlexNavBar } from ".";
import { DivEtapas } from ".";
import dynamic from "next/dynamic";
import React from 'react'; 
import { useRouter } from 'next/router'

const Container = styled.div`
  width: 100%;
  height: auto;
  
`

const Etapas = styled.h5`
  color: #212020d2;
  font-size: 16px;
`

function SelectCleaner() {
  const router = useRouter();
  const { cardValues, region, selectedDate, selectedHour, inputUpdateHour } = router.query;
  return (
    <Container>
        <StyledFlexNavBar></StyledFlexNavBar>
      <DivEtapas >
        <Etapas>{cardValues}</Etapas>
        <Etapas>{region}</Etapas>
        <Etapas>{selectedDate}</Etapas>
        <Etapas>{selectedHour}</Etapas>
        <Etapas>{inputUpdateHour}</Etapas>
      </DivEtapas>
     

 
    </Container>
  )
}
export default dynamic(() => Promise.resolve(SelectCleaner), { ssr: false })