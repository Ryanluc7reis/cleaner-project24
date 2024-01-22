import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
  width: 450px;
  height: 345px;
  padding: 20px 35px;
  display: flex;
  gap: 7px;
  flex-direction: column;
  background-color: #fff;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  margin-top: 1px;
  margin-left: 40px;
   @media (max-width: 712px){
    position:static;
    width: 400px;
  }
  @media (max-width: 500px){
    width: auto;
    margin: 0;
  }
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
  cursor: pointer;
 opacity: ${(props) => props.isOpacity ? 1 : 0.3};
`
const Flexfilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SelectPriceAndCleans = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #3a409a;
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
const SetaDownClean = styled.img`
  position: absolute;
  transform: translate(140%, 2%);
`
const SetaDownPrice = styled.img`
  position: absolute;
  transform: translate(140%, 2%);
`
const BoxPricesAndCleans = styled.div`
  width: 90px;
  height: 90px;
  display: ${(props) => props.selectPrice ? 'flex' : 'none'};
  flex-direction: column;
  gap: 7px;
  position: absolute;
  transform: translate(9%,70%);
  background-color: #d4d4d4f0;
  overflow-y: scroll;
`
const ButtonScroll = styled.h4`
  font-size: 12px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  :hover{
    background-color: #021f934e;
  }
`
const FlexHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export default function BoxFilter(props){
  const [selectPrice, setselectPrice] = useState(null)
  const [updatePrice , setupdatePrice ] = useState(null)
  const [selectMinimumCleans, setMinimumCleans] = useState(null)
  const [updateCleans , setupdateCleans ] = useState(null)
  const [opacity, setOpacity] = useState(null)
  const Prices = [
  '$ 18p/h', '$ 19p/h','$ 20p/h',
  '$ 21p/h','$ 22p/h','$ 23p/h',
  '$ 24p/h','$ 25p/h'
]
  const Cleans = ['-10','+15','+30','+50','+100']
  const handlePrice = (selectedprice) => {
    setupdatePrice(selectedprice)

  }
  const handleClean = (selectedclean) => {
    setupdateCleans(selectedclean)
  }
  const renderStars = () => {
    const numberOfStars = 5;
    return Array.from({ length: numberOfStars }, (_, index) => (
      <Star
        key={index}
        isOpacity={opacity && index < opacity}
        src="/star.png"
        onClick={() => setOpacity(index + 1)}
      />
    ));
  };
  return(
    <Container>
        <FlexHeader>
          <HeaderAlt>Filter: 1</HeaderAlt>
          <HeaderAlt1>cleaners available</HeaderAlt1>
        </FlexHeader>
        <Flexfilters>
          <HeadarSub>Price</HeadarSub>
          <SelectPriceAndCleans onClick={() => setselectPrice(!selectPrice) }>
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
          </SelectPriceAndCleans>
        </Flexfilters>
        <BarraFilter />
        <Flexfilters>
          <HeadarSub>Minimum rating</HeadarSub>
          <div style={{ display: 'flex', gap: '5px' }}>
          {renderStars()}
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
                <SetaDownClean src="/setadown1.svg" height="25px" width="20px" />
          </SelectPriceAndCleans>
        </Flexfilters>
  </Container>
  )
}