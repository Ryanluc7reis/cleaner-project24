import styled, { keyframes } from 'styled-components'
import Button from '../form/Button'
import dynamic from 'next/dynamic'
import { useState } from 'react'

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
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50vw;
  height: 60vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
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
  flex-wrap: wrap;
  align-items: center;
  margin-top: 5px;
`
const CheckInfo = styled.img`
  width: 15px;
  height: 15px;
`
const CleaningTypes = styled.div`
`
const DivTypeCleanings = styled.div`
  display: flex;
  align-items: center;
`
const Desc = styled.h2`
  margin: 10px 5px;
  animation: ${DescAnimation} 4s ease-in-out infinite alternate;
`
const DivBoxAboutMe = styled.div`
  display: flex;
  justify-content: center;
`
const BoxAboutMe = styled.div`
  margin: 10px 0 0 0; 
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  word-wrap: break-word;
  word-break: break-all;
  padding-bottom: 1%;
  padding-right: 2%;
  background-color: #32323299;
`
const AboutMeTitle = styled.h2`
  color: white;
  font-weight: 700;
  padding: 0 0 0 10px;
`
const AboutMeDescDiv = styled.div`
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
  font-style: italic;
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
  content: ${(props) => (props.tmbs ? 'none' : "url('../thumbsupguy.svg')")};
  :hover {
    width: 40px;
  }
`
const Quit = styled.p`
  color: red;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
`
const ButtonAlt = styled(Button)`
  padding: 5px 5px 5px 5px;
   border-radius: 6px;
   margin: 27px;
   margin-left: 57px;
`
function ReviewScreen({cleaner,onClick, ...props}) {
  const [styleQuit, setStyleQuit] = useState(false)

  const handleClick = () => {
    setStyleQuit(!styleQuit);
    props.onClose();
  };
  const handleClickButton = () => {
    props.onButtonClick();
    props.onClose();
    setStyleQuit(!styleQuit);
  }
  return (
    <Container {...props} style={{ ...(styleQuit === true && { display: 'none' }) }}>  
      <DivCleanerInfos>
        <DivInfos>
          <Quit onClick={handleClick}>QUIT</Quit>
          <CleanerImg image="/maleicon.png"></CleanerImg>
          <CleanerName>{props.name}</CleanerName>
          <CleanerPrice>{props.price}</CleanerPrice>
        </DivInfos>
        <div>
          <hr style={{ marginTop: '15px' }}></hr>
        </div>
        <DivDocInfos>
          <CheckInfo src="../checkIconB.png" />
          <Desc>Id checks out</Desc>
        </DivDocInfos>
        <DivDocInfos>
          <CheckInfo src="../checkIconB.png" />
          <Desc>Id checks out</Desc>
        </DivDocInfos>
        <hr/> 
        <CleaningTypes>
          <DivTypeCleanings>
            <ThumbsUp />
            <Desc>(ThumbsUp image) tipo de limpeza</Desc>
          </DivTypeCleanings>
          <DivTypeCleanings>
            <ThumbsUp />
            <Desc>(ThumbsUp image) tipo de limpeza</Desc>
          </DivTypeCleanings>
          <DivTypeCleanings>
            <ThumbsUp />
            <Desc>(ThumbsUp image) tipo de limpeza1</Desc>
          </DivTypeCleanings>
        </CleaningTypes>
        <hr></hr>
        <ButtonAlt 
        valor={cleaner ? 'Remove this cleaner' : 'Selected this cleaner'}
        onClick={handleClickButton}
         />
      </DivCleanerInfos>
      <hr style={{ width: '5px' }} />
      <DivReviews>
        <DivBoxAboutMe>
          <BoxAboutMe>
            <AboutMeTitle>About Me: </AboutMeTitle>
            <AboutMeDescDiv>
              <AboutMeDesc>Dedicated to my work. Customer satisfaction is my priority
              Dedicated to my work. Customer satisfaction is my priority. Good relationship with customer.
              </AboutMeDesc>
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
                  <ClientReviewDesc>
                    LHoraceKwabena did a very good job for me.
                    He lessened to all my requirements and carried them out exactly the way I wanted.
                    satisfied and would be more than happy to hire him again. Thank you Kwabena
                  </ClientReviewDesc>
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
