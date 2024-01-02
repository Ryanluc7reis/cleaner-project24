import styled from 'styled-components'
import Button from '../form/Button'
import { useState } from 'react'

const ContListCleaners = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-left: 50px;
  margin-top: 20px;
  flex-direction: column;
`
const FilterSortby = styled.div`
  font-size: 14px;
  width: 173px;
  height: 50px;
  padding: 7px;
  display: flex;
  gap: 4px;
  align-items: center;
  text-align: center;
  background-color: white;
`
const Sortby = styled.h4`
  color: #000000ae;
`
const SortSub = styled.h4`
  color: #97979775;
  margin-left: 7px;
`
const SetaDown = styled.select``
const CardCleaner = styled.div`
  width: 327px;
  height: 210px;
  border-radius: 7px;
  background: white;
  margin-top: 15px;
  align-items: center;
`
const ContCardCleaner = styled.div`
  display: flex;
  justify-content: space-between;
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
`
const FlexButtons = styled.div`
  display: flex;
  justify-content: space-around;
`
const FormSelect = styled.select`
  width: 50px;
  height: 50px;
  color: red;
`

export default function ListCleaners(props) {
  const [selectOption, setSelectOption] = useState(null)
  const sortByList = ['Relevance', 'Ratings']
  const cleanersData = [
    {
      img: '/maleicon.png',
      name: 'Ryan Lucas',
      price: '£18.90 /h',
      rating: 4.6,
      cleaningCount: 10,
      experience: '6 months'
    },
    {
      img: '/maleicon.png',
      name: 'Joao Pedro',
      price: '£18.90 /h',
      rating: 4.6,
      cleaningCount: 10,
      experience: '6 months'
    },
    {
      img: '/maleicon.png',
      name: 'Gabriel Machado',
      price: '£18,90 /h',
      rating: 5,
      cleaningCount: 100,
      experience: 'Since born'
    }

    // Adicione mais objetos de dados conforme necessário
  ]

  return (
    <ContListCleaners>
      <FilterSortby>
        <Sortby>Sort by : </Sortby>
        <SortSub></SortSub>
        <SetaDown onChange={(e) => setSelectOption(e.target.value)}>
          {sortByList.map((opt, index) => (
            <option value={opt} key={index}>
              {opt}
            </option>
          ))}
        </SetaDown>
      </FilterSortby>
      <ContCardCleaner>
        {cleanersData.map((cleaner, index) => (
          <CardCleaner key={index}>
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
              <ButtonAlt valor="review" />
              <ButtonAlt valor="select" onClick={() => props.onCleanerSelect(cleaner)} />
            </FlexButtons>
          </CardCleaner>
        ))}
      </ContCardCleaner>
    </ContListCleaners>
  )
}
