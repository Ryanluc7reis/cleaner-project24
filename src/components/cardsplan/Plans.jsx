import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
`
const StyledTitleCard = styled.h1`
  background-image: linear-gradient(15deg, #242c99, #25a0a8, #242c99);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  margin-left: 10px;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 769px) {
    font-size: 25px;
  }
  @media (max-width: 426px) {
    font-size: 21px;
  }
  @media (max-width: 376px) {
    font-size: 26px;
  }
`
const StyledReadyImage = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 6px;
  margin-right: 8px;
`
const StyledNameCleaning = styled.p`
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: 19px;
  width: 100%;
  margin-left: 10px;
  margin-top: 10px;
  height: 15%;
  font-weight: 800;

  @media (max-width: 426px) {
    font-size: 20px;
  }
  @media (max-width: 376px) {
    font-size: 23px;
  }
`
const StyledDescription = styled.p`
  color: ${(props) => props.theme.colors.primaryColor};
  font-size: 14px;
  margin-left: 5px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-bottom: -10px;
  }
  @media (max-width: 769px) {
    font-size: 19px;
  }
  @media (max-width: 426px) {
    font-size: 21px;
    font-weight: 600;
  }
  @media (max-width: 376px) {
    font-size: 23px;
  }
`
const StyledBarra = styled.div`
  width: 100%;
  height: 2px;
  margin: 0px 0px;
  border-radius: 4px;
  background-color: black;
`
const StyledBarrAlt = styled(StyledBarra)`
  margin-top: 50px;
`
const StyledBarrAlt1 = styled(StyledBarra)`
  margin-top: 75px;
`

const StyledContAll = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledNameCleaningAlt = styled(StyledNameCleaning)`
  height: 100%;
`
export default function Plans({ plan }) {
  return (
    <Container>
      {plan === '1' && (
        <StyledContAll>
          <StyledTitleCard>OPTIONAL</StyledTitleCard>
          <StyledDescription>R$ 21.90/month after the offer period</StyledDescription>
          <StyledNameCleaning>- Choose your Cleaning</StyledNameCleaning>
          <StyledBarrAlt1 />
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Wet Manual Cleaning
          </StyledDescription>
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Dry Cleaning
          </StyledDescription>
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Window Cleaning
          </StyledDescription>
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Home Apliance Cleaning
          </StyledDescription>
        </StyledContAll>
      )}
      {plan === '2' && (
        <StyledContAll>
          <StyledTitleCard>BASIC</StyledTitleCard>
          <StyledDescription>R$27.90/month after the offer period</StyledDescription>
          <StyledNameCleaning>- Wet Manual Cleaning - Dry Cleaning</StyledNameCleaning>
          <StyledBarrAlt />
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Have your furniture cleaned with a damp cloth
          </StyledDescription>
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Have your floor swept with a broom{' '}
          </StyledDescription>
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Have your floor cleaned with a damp cloth
          </StyledDescription>
        </StyledContAll>
      )}
      {plan === '3' && (
        <StyledContAll>
          <StyledTitleCard>MEDIUM</StyledTitleCard>
          <StyledDescription>R$34.90/month after the offer period</StyledDescription>
          <StyledNameCleaning>- Wet Manual Cleaning - Window Cleanin</StyledNameCleaning>
          <StyledBarrAlt />
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Have your furniture cleaned with a damp cloth
          </StyledDescription>
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Have your floor cleaned with water + cleaning products{' '}
          </StyledDescription>
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Have your window cleaned with water and cleaning products
          </StyledDescription>
        </StyledContAll>
      )}
      {plan === '4' && (
        <StyledContAll>
          <StyledTitleCard>COMPLETE</StyledTitleCard>
          <StyledDescription>R$34.90/month after the offer period</StyledDescription>
          <StyledNameCleaningAlt>
            - Wet Manual Cleaning(with water) - Home Apliance Cleaning and Window Cleaning
          </StyledNameCleaningAlt>
          <StyledBarra />
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Have your furniture cleaned with a damp cloth
          </StyledDescription>
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Have your floor cleaned with water + cleaning products{' '}
          </StyledDescription>
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Have your window cleaned with water and cleaning products
          </StyledDescription>
          <StyledDescription>
            <StyledReadyImage src="/checkIconB.png" />
            Have your appliances cleaned{' '}
          </StyledDescription>
        </StyledContAll>
      )}
    </Container>
  )
}
