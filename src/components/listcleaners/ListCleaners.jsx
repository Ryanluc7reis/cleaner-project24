import styled, { css } from 'styled-components'
import Button from '../form/Button'
import { useState } from 'react'
import React from 'react'
import ReviewScreen from './ReviewScreen'

const ContListCleaners = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: auto;
  margin-left: 50px;
  margin-top: 20px;
  flex-direction: column;
   @media (max-width: 1070px){
    padding-bottom: 120px;
  }
  @media (max-width: 712px){
    align-items: center;
    margin:0;
    margin-top: 20px;
  }
`
const FilterSortby = styled.div`
  font-size: 14px;
  min-width: 175px;
  width: fit-content;
  height: 50px;
  padding: 5px;
  display: flex;
  white-space: nowrap;
  cursor: pointer;
  gap: 4px;
  align-items: center;
  background-color: white;
`
const Sortby = styled.h4`
  color: #000000ae;
  width: 100%;
  height: auto;
`
const SortSub = styled.h4`
  font-size: 13px;
  color: #97979775;
  width: 100%;
  margin-left: 2px;
`
const SetaDown = styled.img`
  //margin-left: 75px;
`
const CardCleaner = styled.div`
  width: 327px;
  height: 210px;
  border-radius: 7px;
  background: white;
  margin-top: 15px;
  align-items: center;
`
const ContCardCleaner = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  
  @media (max-width: 1100px){
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
   @media (max-width: 712px){
    align-items: center;
    justify-content: center;
  }
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
const BarraAlt2 = styled(Barra)`
  margin-top: 0px;
  height: 0.5px;
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
const BoxFilterShortby = styled.div`
  display: ${(props) => (props.showOption ? 'flex' : 'none')};
  flex-direction: column;
  text-align: left;
  justify-content: space-around;
  width: 200px;
  height: 167px;
  background-color: #f4f4f4;
  position: absolute;
  transform: translate(-3%, 65%);
  box-shadow:
    rgba(201, 201, 201, 0.777) 0px 2px 1px,
    rgba(195, 195, 195, 0.337) 0px 4px 2px,
    rgba(164, 163, 163, 0.25) 0px 8px 4px,
    rgba(185, 185, 185, 0.09) 0px 16px 8px,
    rgba(172, 172, 172, 0.339) 0px 32px 16px;
`
const ShortbyOption = styled.p`
  font-size: 16px;
  height: 100%;
  padding-left: 4px;
  padding: 9px 7px;
  cursor: pointer;
`
const ContOptionsFilter = styled.div`
  :hover {
    background-color: #e9e9e9;
  }
`
const cleanersData = [
  {
    img: '/maleicon.png',
    name: 'Ryan Lucas',
    price: '$18.90 /h',
    rating: 4.6,
    cleaningCount: 10,
    experience: '6 months'
  },
  {
    img: '/maleicon.png',
    name: 'Joao Pedro',
    price: '$18.90 /h',
    rating: 4.6,
    cleaningCount: 10,
    experience: '6 months'
  },
  {
    img: '/maleicon.png',
    name: 'Gabriel Machado',
    price: '$18,90 /h',
    rating: 5,
    cleaningCount: 100,
    experience: 'Since born'
  },
  {
    img: '/maleicon.png',
    name: 'Ronaldinho gaucho',
    price: '$18,90 /h',
    rating: 5,
    cleaningCount: 100,
    experience: 'Since born'
  }
  // Adicione mais objetos de dados conforme necessário
]
const ButtonAltStyled = styled(Button)`
  width: 145px;
  height: 40px;
  margin: 10px;
  padding: 8px;
  font-size: 12px;
`

const Quit = styled.p`
  color: red;
  font-size: 18px;
`

export default function ListCleaners(props) {
  const [showOption, setshowOption] = useState(false)
  const [selectedCleaner, setSelectedCleaner] = useState(null)
  const [updateShortby, setupdateShortby] = useState(null)
  const [selectedCardIndex, setSelectedCardIndex] = useState(null)
  const listOption = [
    'Relevance',
    'Price high to low',
    'Price low to high',
    'Highest number of cleans'
  ]
  const updateShortBy = (updateShort) => {
    setupdateShortby(updateShort)
  }

  const handleButtonClick = (index, cleaner) => {
    // Atualiza apenas o CardCleaner clicado
    setSelectedCleaner(index === selectedCleaner ? null : index)
    props.onCleanerSelect(index === selectedCleaner ? null : cleaner)
  }
  const handleButtonReviews = (index) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index)
  }
  
  return (
    <ContListCleaners >
      <FilterSortby showOption={showOption} onClick={() => setshowOption(!showOption)}>
        <Sortby>Sort by:</Sortby>
        <SortSub>{updateShortby || 'Relevance'}</SortSub>
        <BoxFilterShortby showOption={showOption}>
          {listOption.map((item, index) => (
            <ContOptionsFilter key={index}>
              <ShortbyOption
                style={{ backgroundColor: updateShortby === item && '#80808058' }}
                onClick={() => updateShortBy(item)}
              >
                {item}
              </ShortbyOption>
              {index < 3 && <BarraAlt2 />}
            </ContOptionsFilter>
          ))}
        </BoxFilterShortby>
        <SetaDown src="/setadown1.svg" height="25px" width="20px" />
      </FilterSortby>
      <ContCardCleaner>
        {cleanersData.map((cleaner, index) => (
          <CardCleaner
            style={{
              ...(selectedCleaner === index && {
                backgroundColor: '#8383c565',
                border: '2px solid blue'
              })
            }}
            key={index}
          >
            {selectedCardIndex === index && (
              <ReviewScreen onClose={() => handleButtonReviews(index)} />
            )}
            <NameandPric>
              <div style={{ gap: '3px', display: 'flex' }}>
                <MaleIcon src="/maleicon.png" />
                <NameCleaner>{cleaner.name}</NameCleaner>
              </div>
              <PriceCleaner>{cleaner.price}</PriceCleaner>
            </NameandPric>
            <Barra />
            <ContAbout>
              <FlexAbout>
                <About>Rating</About>
                <AboutSub>
                  <Star src="/star.png" /> {cleaner.rating}
                </AboutSub>
              </FlexAbout>
              <BarraAlt />
              <FlexAbout>
                <About>Cleaning</About>
                <AboutSub>{cleaner.cleaningCount}</AboutSub>
              </FlexAbout>
              <BarraAlt />
              <FlexAbout>
                <About>Experience</About>
                <AboutSub>{cleaner.experience}</AboutSub>
              </FlexAbout>
            </ContAbout>
            <FlexButtons>
              <ButtonAlt
                valor="REVIEWS"
                style={{
                  backgroundColor: 'white',
                  color: '#999999',
                  border: '1PX solid #5e5ef5af'
                }}
                onClick={() => handleButtonReviews(index)}
              />

              <ButtonAltStyled
                valor={index === selectedCleaner ? 'SELECTED' : 'SELECT'}
                arrowButton={index === selectedCleaner ? false : true}
                onClick={() => handleButtonClick(index, cleaner)}
              />
            </FlexButtons>
          </CardCleaner>
        ))}
      </ContCardCleaner>
    </ContListCleaners>
  )
}