import styled from 'styled-components'

const CleanerImg = styled.img`
  border-radius: 25px;
  background-color: #ff00001a;
  width: 50px;
  height: 50px;
`
const CleanerName = styled.h2`
  color: black;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: underline;
`

const CleanerPrice = styled.h2`
  font-size: 2rem;
  font-weight: lighter;
  color: red;
`
const CleanerRating = styled.img`
  width: 4rem;
  height: 3rem;
`
const CleanerCleanings = styled.h1`
  font-size: 2rem;
`
const CleanerExp = styled.h1`
  color: red;
`

const ContainerCard = styled.div`
  display: grid;
  grid-template-areas:
    'CleanerImg CleanerName CleanerPrice'
    'CleanerRating CleanerCleanings CleanerExp';
  background-color: #ccc;
  max-width: 200px;
  min-height: 200px;
`

export default function CardCleaner() {
  return (
    <ContainerCard>
      <CleanerImg src="/imageCasal.jpg" />
      <CleanerName> olá </CleanerName>
      <CleanerPrice> 40R$ </CleanerPrice>
      <CleanerRating src="/checkiconB.png" />
      <CleanerCleanings>12px</CleanerCleanings>
      <CleanerExp>olá</CleanerExp>
    </ContainerCard>
  )
}
