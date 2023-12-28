import styled from "styled-components";

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
const SetaDown = styled.img`
`
const CardCleaner = styled.div`
width: 320px;
height: 210px;
background: white;
margin-top: 15px;
`
const ContCardCleaner = styled.div`
  display: flex;
  gap: 14px;
`
export default function ListCleaners () {
  return(
    <ContListCleaners>
        <FilterSortby>
          <Sortby>Sort by : </Sortby> 
          <SortSub >relevance</SortSub>
          <SetaDown src="/arrowdown.svg" height="12px" width="15px" />
        </FilterSortby>
        <ContCardCleaner>
            <CardCleaner />
            <CardCleaner />
        </ContCardCleaner>
    </ContListCleaners>
  )
}