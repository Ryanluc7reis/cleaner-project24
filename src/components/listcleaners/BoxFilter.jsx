import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
  width: 450px;
  height: 375px;
  padding: 20px 35px;
  background-color: #fff;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  margin-top: 1px;
  margin-left: 40px;
`
const HeaderAlt = styled.h1`
  font-size: 26px;
  color: #0101018e;
  font-weight: 600;
`
const HeaderAlt1 = styled.h1`
  font-size: 19px;
  color: #0101018e;
  font-weight: 400;
`
const HeadarSub = styled.p`
  font-size: 13px;
  margin: 20px 0px;
`
const BarraFilter = styled.div`
  width: 98%;
  height: 1px;
  margin-top: 15px;
  background-color: #2020204f;
`
const Star = styled.img`
  height: 15px;
  width: 17px;
`
const Flexfilters = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const SelectPriceAndCleans = styled.div`
  font-size: 12px;
  width: 75px;
  height: 35px;
  background-color: #e1e1e192;
  border: 2px solid #04047b97;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SelectPriceAndCleansAlt = styled(SelectPriceAndCleans)`
  margin-left: 75px;
`
const SetaDownClean = styled.img`
  position: absolute;
  transform: translate(484%, 2%);
`
const SetaDownPrice = styled.img`
  position: absolute;
  transform: translate(143%, 2%);
`
const BoxPricesAndCleans = styled.div`
  width: 90px;
  height: 90px;
  display: ${(props) => props.selectPrice ? 'flex' : 'none'};
  flex-direction: column;
  gap: 7px;
  position: absolute;
  transform: translate(9%,70%);
  background-color: #ff00008b;
  overflow-y: scroll;
`
const ButtonScroll = styled.h4`
  font-size: 12px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  :hover{
    background-color: gray;
  }
`
const FlexHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export default function BoxFilter(){
  const [selectPrice, setselectPrice] = useState(null)
  const [updatePrice , setupdatePrice ] = useState(null)
  const [selectMinimumCleans, setMinimumCleans] = useState(null)
  const [updateCleans , setupdateCleans ] = useState(null)
  const Prices = [
  '£18p/h', '£19p/h','£20p/h',
  '£21p/h','£22 p/h','£23p/h',
  '£24p/h','£25p/h'
]
  const Cleans = ['-10','+15','+30','+50','+100']
  const handlePrice = (selectedprice) => {
    setupdatePrice(selectedprice)

  }
  const handleClean = (selectedclean) => {
    setupdateCleans(selectedclean)
  }
  return(
    <Container>
        <FlexHeader>
          <HeaderAlt>Filter: 1</HeaderAlt>
          <HeaderAlt1>cleaners available</HeaderAlt1>
        </FlexHeader>
        <Flexfilters>
          <HeadarSub>Price</HeadarSub>
          <SelectPriceAndCleansAlt onClick={() => setselectPrice(!selectPrice) }>
            {updatePrice || '-'}
            <BoxPricesAndCleans selectPrice={selectPrice}>
              {Prices.map((price,index)=> (
                <ButtonScroll 
                onClick={() => handlePrice(price)} 
                key={index}
                >{price}</ButtonScroll>
              ))}
            </BoxPricesAndCleans>
            <SetaDownPrice src="/setadown1.svg" height="25px" width="20px" />
          </SelectPriceAndCleansAlt>
        </Flexfilters>
        <BarraFilter />
        <Flexfilters>
          <HeadarSub>Minimum rating</HeadarSub>
          <div style={{ display: 'flex', gap: '5px' }}>
            <Star src="/star.png" />
            <Star src="/star.png" />
            <Star src="/star.png" />
            <Star src="/star.png" />
            <Star src="/star.png" />
          </div>
        </Flexfilters>
        <BarraFilter />
        <Flexfilters>
          <HeadarSub>Minimum cleans</HeadarSub>
              <SelectPriceAndCleans  onClick={() => setMinimumCleans(!selectMinimumCleans)}>
                {updateCleans || '-'}
                <BoxPricesAndCleans selectPrice={selectMinimumCleans}>
                  {Cleans.map((clean,index)=> (
                    <ButtonScroll 
                    onClick={() => handleClean(clean)} 
                    key={index}
                    >{clean}</ButtonScroll>
                  ))}
                </BoxPricesAndCleans>  
          </SelectPriceAndCleans>
          <SetaDownClean src="/setadown1.svg" height="25px" width="20px" />
        </Flexfilters>
  </Container>
  )
}