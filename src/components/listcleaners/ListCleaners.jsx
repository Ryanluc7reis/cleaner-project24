import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { CleanerAvailable } from '../../context/useContextCleanersAvailable'
import { CardIdContext } from '../../context/useContextCardId'
import { DateContext } from '../../context/useContextDate'

import Card from '../cardcleaner/Card'
import SelectedCleaner from './SelectedCleaner'
import ErrorMessage from '../errormessage/ErrorMessage'

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
  padding-bottom: 110px;

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
const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 60%;
  top: 55%;
  @media (max-width: 712px) {
    left: 28%;
    top: none;
    bottom: -50%;
  }
`
const fetcher = async ({ url, data }) => {
  const response = await axios.post(url, data)
  return response.data
}

export default function ListCleaners({
  selectedPrice,
  selectedClean,
  selectedStar,
  region,
  ...props
}) {
  const [showOption, setshowOption] = useState(false)
  const [updateShortby, setupdateShortby] = useState(null)
  const [selectedCleaner, setSelectedCleaner] = useState(null)
  const [currentDate, setCurrentDate] = useState('')
  const [cleaners, setCleaner] = useContext(CleanerAvailable)
  const [cardId, setCardId] = useContext(CardIdContext)
  const [date, setDate] = useContext(DateContext)
  const router = useRouter()
  const { selectedDate } = router.query

  const listOption = [
    'Relevance',
    'Price high to low',
    'Price low to high',
    'Highest number of cleans'
  ]

  const updateShortBy = (updateShort) => {
    setupdateShortby(updateShort)
  }

  const handleCardSelect = (index) => {
    setSelectedCleaner(index === selectedCleaner ? null : index)
  }

  useEffect(() => {
    if (date !== '') {
      setCurrentDate(date)
    } else {
      setCurrentDate(selectedDate)
    }
  }, [date, currentDate])

  const { data, error } = useSWR(
    () => ({
      url: 'http://localhost:3333/cleaner/getCards',
      data: { date: currentDate }
    }),
    fetcher
  )
  const lowerRegion = region.toLowerCase()
  let filterData = data
    ? data.filter((card) => card.region.toLowerCase().includes(lowerRegion))
    : []

  if (selectedPrice) {
    const selectedPriceNumeric = selectedPrice.replace(/[^\d.-]/g, '')
    filterData = filterData.filter((card) => {
      const cardPriceNumeric = card.price.replace(/[^\d.-]/g, '')

      return cardPriceNumeric.includes(selectedPriceNumeric)
    })
  }
  if (selectedStar) {
    filterData = filterData.filter((card) => card.rating >= parseInt(selectedStar))
  }
  if (selectedClean) {
    filterData = filterData.filter((card) => card.amountCleaning >= parseInt(selectedClean))
  }
  let sortData = [...filterData]
  switch (updateShortby) {
    case 'Price high to low':
      sortData.sort(
        (a, b) => parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.'))
      )
      break
    case 'Price low to high':
      sortData.sort(
        (a, b) => parseFloat(a.price.replace(',', '.')) - parseFloat(b.price.replace(',', '.'))
      )
      break
    case 'Highest number of cleans':
      sortData.sort((a, b) => b.amountCleaning - a.amountCleaning)
      break
    case 'Relevance':
      sortData.sort((a, b) => b.rating - a.rating)
      break
    default:
      break
  }

  useEffect(() => {
    setCleaner(sortData.length)
    if (sortData[selectedCleaner]) {
      setCardId(sortData[selectedCleaner]._id)
    }
  }, [sortData.length, sortData[selectedCleaner]])

  if (error)
    return (
      <StyledLoader>
        <ErrorMessage message="Erro ao buscar dados" />
      </StyledLoader>
    )
  if (!data)
    return (
      <StyledLoader>
        <img width="30px" height="28px" src="/loadingGif.png" />
        <h2>Carregando</h2>
      </StyledLoader>
    )

  if (filterData.length === 0) {
    return (
      <StyledLoader>
        <ErrorMessage message="Nenhum resultado encontrado" />
      </StyledLoader>
    )
  }

  return (
    <ContListCleaners {...props}>
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
        {sortData.map((card, index) => (
          <Card
            key={card._id}
            isSelected={index === selectedCleaner}
            onSelectCleaner={() => handleCardSelect(index)}
            index={index}
            name={card.name}
            rating={card.rating}
            price={card.price}
            experience={card.experience}
            amountCleaning={card.amountCleaning}
            id={card._id}
            noneR
          />
        ))}
      </GridCardCleaner>
      <SelectedCleaner
        name={sortData[selectedCleaner]?.name}
        price={sortData[selectedCleaner]?.price}
        img={sortData[selectedCleaner] && '/maleicon.png'}
        selected={selectedCleaner !== null ? true : false}
      />
    </ContListCleaners>
  )
}
