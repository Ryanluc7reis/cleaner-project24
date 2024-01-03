import styled, { keyframes } from 'styled-components'
import Button from '../form/Button'
import dynamic from 'next/dynamic'

const DescAnimation = keyframes`
  from {
    color: #77d2df;
  }
  to {
    color: #1EFF0044;
  }
`

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

const DivCleanerInfos = styled.div`
  padding: 10px 0 0 10px;
  width: 50%;
  height: 100%;
  background-color: #575757;
`

const DivReviews = styled.div`
  background-color: #525252;
  width: 50%;
  height: 100%;
`

const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  /* código aqui */
`

const CleanerImg = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.image})`};
  border-radius: 25%;
  background-position: center;
`

const CleanerName = styled.h2`
  color: #ccc;
`

const CleanerPrice = styled.h2`
  color: ${(props) => props.theme.colors.greenMoney};
`

const DivDocInfos = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  /* estilos aqui */
`

const CheckInfo = styled.img`
  width: 15px;
  height: 15px;
`

const CleaningTypes = styled.div`
  /* Estilos aqui */
`
const DivTypeCleanings = styled.div`
  display: flex;
  align-items: center;
`

const Desc = styled.h2`
  margin: 10px 5px;
  //color: #77d2df;
  /* background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.colors.greenMoney},
    #77d2df 50%
  ); */
  animation: ${DescAnimation} 4s ease-in-out infinite alternate;
  //animation-duration: 4s;
  //animation-iteration-count: infinite;
  //animation-direction: alternate;
  /* background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent; */
`

const DivBoxAboutMe = styled.div`
  display: flex;
  justify-content: center;
`

const DivBtnRemove = styled.div`
  display: flex;
  justify-content: center;
`

const BoxAboutMe = styled.div`
  margin: 10px 0 0 0; //T-D-B-E
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  word-wrap: break-word;
  word-break: break-all;
  padding-bottom: 1%;
  padding-right: 2%;
  background-color: #32323299;
  /* ESTILOS AQUI */
`
const AboutMeTitle = styled.h2`
  color: white;
  font-weight: 700;
  padding: 0 0 0 10px;
`

const AboutMeDescDiv = styled.div`
  /* ESTILOS AQUI */
`
const AboutMeDesc = styled.h3`
  padding: 10px 0 0 20px;
  color: white;
`

const ReviewsDiv = styled.div`
  color: black;
  margin: 10px 0 0 10px;
`

const ReviewsDivTitle = styled.div`
  /* ESTILOS AQUI */
`

const ReviewsTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  color: ${(props) => props.theme.colors.azulclaro};
`
const ReviewCardDiv = styled.div`
  color: white;
`

const ReviewCard = styled.div`
  font-weight: 700;
  color: white;
`
const ClientReviewName = styled.h3`
  margin: 10px 0 0 5px;
  color: white;
`
const ClientReviewDesc = styled.h2`
  margin: 5px 0 0 20px;
`
const ClientReviewStars = styled.img`
  background-image: ${(props) => `url(${props.image})`};
  width: 30px;
`
const ClientReviewDate = styled.p`
  font-size: 1.3rem;
  color: white;
`
const DivNameDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-top: 10px;
`
const DivStarDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 0 5px 5px 0;
`

const ThumbsUp = styled.img`
  width: 30px;
  :hover {
    width: 40px;
  }
`
function ReviewScreen(props) {
  return (
    <Container>
      <DivCleanerInfos>
        <DivInfos>
          <CleanerImg image="/maleicon.png"></CleanerImg>
          <CleanerName>Gabriel</CleanerName>
          <CleanerPrice>52R$</CleanerPrice>
        </DivInfos>
        <div>
          <hr style={{ marginTop: '15px' }}></hr>
        </div>
        <DivDocInfos>
          <CheckInfo src="checkIconB.png" />
          <Desc>Id checks out</Desc>
        </DivDocInfos>
        <DivDocInfos>
          <CheckInfo src="checkIconB.png" />
          <Desc>Id checks out</Desc>
        </DivDocInfos>
        <hr></hr>
        <CleaningTypes>
          <DivTypeCleanings>
            <ThumbsUp src="thumbsupguy.svg" />
            <Desc>(ThumbsUp image) tipo de limpeza</Desc>
          </DivTypeCleanings>
          <DivTypeCleanings>
            <ThumbsUp src="thumbsupguy.svg" />
            <Desc>(ThumbsUp image) tipo de limpeza</Desc>
          </DivTypeCleanings>
          <Desc>(ThumbsUp image) tipo de limpeza</Desc>
        </CleaningTypes>
        <hr></hr>
        <DivBtnRemove>
          <Button
            style={{ padding: '5px 5px 5px 5px', borderRadius: '6px', marginTop: '5px' }}
            valor="Remove This Cleaner"
          />
        </DivBtnRemove>
      </DivCleanerInfos>
      <hr style={{ width: '5px' }} />
      <DivReviews>
        <DivBoxAboutMe>
          <BoxAboutMe>
            <AboutMeTitle>About Me: </AboutMeTitle>
            <AboutMeDescDiv>
              <AboutMeDesc>TEXTO AQUI</AboutMeDesc>
            </AboutMeDescDiv>
          </BoxAboutMe>
        </DivBoxAboutMe>

        <ReviewsDiv>
          <ReviewsDivTitle>
            <ReviewsTitle>REVIEWS</ReviewsTitle>
            <ReviewCardDiv>
              <ReviewCard>
                <DivNameDesc>
                  <hr></hr>
                  <ClientReviewName>NOME</ClientReviewName>
                  <ClientReviewDesc>olá aqui sou eu</ClientReviewDesc>
                  <DivStarDate>
                    <ClientReviewDate>26/07/2002</ClientReviewDate>
                    <ClientReviewStars src="/maleicon.png" />
                  </DivStarDate>
                  <hr></hr>
                </DivNameDesc>
              </ReviewCard>
            </ReviewCardDiv>
          </ReviewsDivTitle>
        </ReviewsDiv>
      </DivReviews>
    </Container>
  )
}
export default dynamic(() => Promise.resolve(ReviewScreen), { ssr: false })
