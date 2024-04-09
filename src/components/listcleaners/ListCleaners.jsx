import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import useSWR from 'swr'

import Card from '../cardcleaner/Card'

const ContListCleaners = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: auto;
  margin-left: 50px;
  margin-top: 20px;
  flex-direction: column;
  @media (max-width: 1070px) {
    padding-bottom: 120px;
  }
  @media (max-width: 712px) {
    align-items: center;
    margin: 0;
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
const SetaDown = styled.img``

const Barra = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 15px;
  background-color: #808080af;
`

const BarraAlt2 = styled(Barra)`
  margin-top: 0px;
  height: 0.5px;
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
  box-shadow: rgba(201, 201, 201, 0.777) 0px 2px 1px, rgba(195, 195, 195, 0.337) 0px 4px 2px,
    rgba(164, 163, 163, 0.25) 0px 8px 4px, rgba(185, 185, 185, 0.09) 0px 16px 8px,
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
const GridCardCleaner = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  gap: 15px;

  @media (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  @media (max-width: 712px) {
    align-items: center;
    justify-content: center;
  }
`
const fetcher = async (url) => {
  const response = await axios.get(url)
  return response.data
}

export default function ListCleaners(props) {
  const [showOption, setshowOption] = useState(false)
  const [updateShortby, setupdateShortby] = useState(null)

  const listOption = [
    'Relevance',
    'Price high to low',
    'Price low to high',
    'Highest number of cleans'
  ]

  const updateShortBy = (updateShort) => {
    setupdateShortby(updateShort)
  }
  const { data, error } = useSWR(`http://localhost:3333/getCards`, fetcher)
  if (error) return <div>Erro ao carregar os dados</div>
  if (!data) return <div>Carregando...</div>

  return (
    <ContListCleaners>
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
      <GridCardCleaner>
        {data.map((card) => (
          <Card
            key={card._id}
            name={card.name}
            rating={card.rating}
            price={card.price}
            experience={card.experience}
            amountCleaning={card.amountCleaning}
            id={card._id}
          />
        ))}
      </GridCardCleaner>
    </ContListCleaners>
  )
}
