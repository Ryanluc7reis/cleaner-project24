import styled from 'styled-components'
import ReviewScreen from '../listcleaners/ReviewScreen'
import Button from '../form/Button'
import { useState } from 'react'

const Card = styled.div`
  min-width: 327px;
  height: 210px;
  border-radius: 7px;
  background: white;
  margin-top: 15px;
  align-items: center;
  background: ${({ isSelected }) => (isSelected ? '#8383c565' : 'white')};
  border: ${({ isSelected }) => (isSelected ? '2px solid blue' : 'none')};
`
const ContAbout = styled.div`
  display: flex;
  margin: 0px 12px;
  justify-content: space-around;
`
const About = styled.h3`
  color: #808080e1;
`
const AboutSub = styled.h4`
  color: black;
`
const FlexAbout = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  margin: 13px 5px;
`
const ButtonAlt = styled(Button)`
  width: 145px;
  height: 40px;
  margin: 10px;
  padding: 8px;
  font-size: 12px;
`
const FlexButtons = styled.div`
  display: flex;
  justify-content: space-around;
`

const NameandPric = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-around;
`
const NameCleaner = styled.h2`
  color: #5d5d5dd4;
  margin-top: 9px;
`
const PriceCleaner = styled.h2`
  font-size: 17px;
  color: #0f1564bb;
  margin-top: 9px;
  margin-left: 7px;
`
const MaleIcon = styled.img`
  height: 40px;
  width: 55px;
`
const Star = styled.img`
  height: 11px;
  width: 15px;
`
const ButtonAltStyled = styled(Button)`
  width: 145px;
  height: 40px;
  margin: 10px;
  padding: 8px;
  font-size: 12px;
`
const Barra = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 15px;
  background-color: #808080af;
`
const BarraAlt = styled(Barra)`
  margin-top: 11px;
  height: 43px;
  width: 1px;
`
const cleanersData = [
  {
    img: '/maleicon.png',
    name: 'Ryan Lucas',
    price: '$18.90 /h',
    rating: 4.6,
    cleaningCount: 10,
    experience: '6 months'
  }
]

export default function CardCleaner({
  index,
  name,
  price,
  rating,
  amountCleaning,
  experience,
  none,
  ...props
}) {
  const [showReview, setshowReview] = useState(false)
  const [selectedCleaner, setSelectedCleaner] = useState(null)
  const handleReviews = () => {
    setshowReview(!showReview)
    const body = document.querySelector('body')

    if (showReview === true) {
      body.classList.add('no-scroll')
    } else {
      body.classList.remove('no-scroll')
    }
  }
  const handleCleanerSelected = () => {
    setSelectedCleaner(index === selectedCleaner ? null : index)
  }
  const CleanerSelectByReview = () => {
    setSelectedCleaner(!selectedCleaner)
    setshowReview(!showReview)
  }
  return (
    <Card
      style={{ ...(none && { height: '180px' }) }}
      isSelected={selectedCleaner === index}
      {...props}
    >
      {showReview && (
        <ReviewScreen
          onClose={() => setshowReview(!showReview)}
          onSelectCleaner={CleanerSelectByReview}
          cleaner={index === !selectedCleaner ? false : true}
        />
      )}

      <NameandPric>
        <div style={{ gap: '3px', display: 'flex' }}>
          <MaleIcon src="/maleicon.png" />
          <NameCleaner>{name || '-'}</NameCleaner>
        </div>
        <PriceCleaner>{'$' + '-' + 'p/h' || '$' + price + 'p/h'}</PriceCleaner>
      </NameandPric>
      <Barra />
      <ContAbout>
        <FlexAbout>
          <About>Rating</About>
          <AboutSub>
            <Star src="/star.png" />
            {rating || '-'}
          </AboutSub>
        </FlexAbout>
        <BarraAlt />
        <FlexAbout>
          <About>Cleaning</About>
          <AboutSub>{amountCleaning || '-'}</AboutSub>
        </FlexAbout>
        <BarraAlt />
        <FlexAbout>
          <About>Experience</About>
          <AboutSub>{experience || '-'}</AboutSub>
        </FlexAbout>
      </ContAbout>
      <FlexButtons style={{ ...(none && { display: 'none' }) }}>
        <ButtonAlt
          valor="REVIEWS"
          style={{
            backgroundColor: 'white',
            color: '#999999',
            border: '1PX solid #5e5ef5af'
          }}
          onClick={handleReviews}
        />

        <ButtonAltStyled
          valor={index === selectedCleaner ? 'SELECTED' : 'SELECT'}
          arrowButton={index === selectedCleaner ? false : true}
          onClick={handleCleanerSelected}
        />
      </FlexButtons>
    </Card>
  )
}
