import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'

import ReviewScreen from '../listcleaners/ReviewScreen'
import Button from '../form/Button'

const Card = styled.div`
  width: 327px;
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
const Region = styled.h2`
  color: #4b4b4bc6;
  text-align: center;
  margin: 7px 0px;
`

export default function CardCleaner({
  index,
  name,
  price,
  rating,
  amountCleaning,
  experience,
  region,
  none,
  noneR,
  isSelected,
  id,
  ...props
}) {
  const [showReview, setShowReview] = useState(false)
  const [aboutData, setAboutData] = useState({})

  const handleReviews = () => {
    setShowReview(!showReview)
  }

  const CleanerSelected = () => {
    props.onSelectCleaner(index)
  }

  const CleanerSelectedByReview = () => {
    props.onSelectCleaner(index)
    setShowReview(!showReview)
  }

  const getCard = async () => {
    try {
      const response = await axios.get('http://localhost:3333/cleaner/getOneCard', {
        params: { id }
      })
      const data = response.data
      setAboutData(data)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }
  useEffect(() => {
    getCard()
  }, [id])
  return (
    <Card style={{ ...(none && { height: '180px' }) }} isSelected={isSelected} {...props}>
      {showReview && (
        <ReviewScreen
          name={name}
          price={'$' + price + 'p/h'}
          rating={rating}
          cleaningCount={amountCleaning}
          id={id}
          aboutCleaner={aboutData.about}
          typeCleaning1={aboutData.cleaning}
          typeCleaning2={aboutData.cleaning2}
          typeCleaning3={aboutData.cleaning3}
          onClose={() => setShowReview(false)}
          onSelectCleaner={() => CleanerSelectedByReview(index)}
          cleaner={isSelected ? false : true}
        />
      )}

      <NameandPric>
        <div style={{ gap: '3px', display: 'flex' }}>
          <MaleIcon src="/maleicon.png" />
          <NameCleaner>{name || '-'}</NameCleaner>
        </div>
        <PriceCleaner>{'$' + (price || '-') + 'p/h'}</PriceCleaner>
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
      <Region style={{ ...(noneR && { display: 'none' }) }}>Operates in : {region || '-'}</Region>
      <FlexButtons style={{ ...(none && { display: 'none' }) }}>
        <ButtonAlt
          valor="REVIEWS"
          style={{
            backgroundColor: 'white',
            color: '#999999',
            border: '1px solid #5e5ef5af'
          }}
          onClick={handleReviews}
        />
        <ButtonAltStyled
          valor={isSelected ? 'SELECTED' : 'SELECT'}
          arrowButton={isSelected ? false : true}
          onClick={() => CleanerSelected(index)}
        />
      </FlexButtons>
    </Card>
  )
}
