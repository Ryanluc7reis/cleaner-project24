import styled from 'styled-components'
import Button from '../form/Button'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0000004d;
  position: fixed;
  z-index: 100;
  left: 0%;
  top: 0%;
`
const ContainerContent = styled.div`
  display: flex;
  width: 50vw;
  min-height: 65vh;
  height: auto;
`

const DivCleanerInfos = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
`

const DivReviews = styled.div`
  background: #f3f3f3;
  padding: 7px;
  min-width: 350px;
  @media (max-width: 561px) {
    min-width: 50vh;
  }
`
const CleanerImg = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.image})`};
  border-radius: 25%;
  position: absolute;
  transform: translate(1%, -50%);
  background-position: center;
  border: 2px solid #5050eb;
  border-radius: 25px;
`
const CleanerName = styled.h2`
  color: rgb(68, 68, 68);
  padding-top: 35px;
`
const CleanerPrice = styled.h2`
  color: #4f538d;
`
const DivDocInfos = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-top: 2px;
`
const CheckInfo = styled.img`
  width: 15px;
  height: 15px;
`
const TypeCleanings = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 2px;
`
const Desc = styled.h2`
  margin: 10px 5px;
  color: rgb(68, 68, 68);
`
const BoxAboutMe = styled.div`
  padding: 10px;
  border-radius: 2px;
  word-wrap: break-word;
  word-break: break-all;
  background-color: #fbfbfb;
`
const AboutMeTitle = styled.h2`
  color: #252525;
  font-weight: 700;
  padding: 0 0 7px 0;
`
const AboutMeSub = styled(AboutMeTitle)`
  font-weight: 500;
  font-size: 16px;
`
const AboutMeDesc = styled.h3`
  color: #c8c8c8df;
  font-weight: 500;
  font-size: 14px;
  padding-top: 6px;
`
const BoxReviews = styled.div`
  margin: 10px;
  max-height: ${(props) => props.maxHeight || '70vh'};
  overflow-y: scroll;
`
const ReviewsTitle = styled.h2`
  font-weight: 500;
  font-size: 17px;
  color: #252525;
`
const ClientReviewName = styled.h2`
  font-size: 14px;
  color: #212121;
`
const ClientReviewDesc = styled.h2`
  font-style: italic;
  font-weight: 500;
  font-size: 15px;
  padding-top: 14px;
  padding-bottom: 15px;
  line-height: 1.5em;
  text-align: left;
  max-width: 500px;
  height: auto;
`
const ClientReviewStars = styled.img`
  background-image: ${(props) => `url(${props.image})`};
  width: 30px;
`
const ClientReviewDate = styled.p`
  font-size: 1.3rem;
  color: #373737;
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
`
const Close = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 23%;
  transform: translate(40%, -50%);
  background-color: #fd3232;
  border-radius: 10px;
  cursor: pointer;
`
const StarRating = styled.img`
  width: 17px;
  height: 17px;
`
const RatingAndExpirence = styled.div`
  background-color: rgb(243, 243, 243);
  padding: 4px;
  border-radius: 6px;
  font-size: 14px;
  gap: 4px;
  display: flex;
  align-items: center;
`
const ButtonAlt = styled(Button)`
  padding: 10px;
  border-radius: 6px;
  margin: 20px 20px 70px 20px;
  background: transparent;
  border: 1px solid #4141e0;
  color: #4141e0c4;
  font-size: 15px;
  font-weight: 500;
  :hover {
    background: #0d0d0dd6;
    color: white;
  }
`
const ContInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`
const Rating = styled.img`
  height: 17px;
  width: 18px;
`
const FlexClientReviewName = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`
const ContReviewsClient = styled.div`
  padding: 0 8px 0 0;
`
const reviews = [
  {
    name: 'Ryan Lucas',
    desc: 'Katiane did and excellent job. I highly recommend her',
    rating: 4.6
  },
  {
    name: 'Gabriel Machado',
    desc: 'Katiane did and excellent job. I highly recommend her',
    rating: 4.6
  },
  {
    name: 'Joao Pedro',
    desc: 'Katiane did and excellent job. I highly recommend her',
    rating: 4.6
  },
  {
    name: 'Ronaldin',
    desc: 'Katiane did and excellent job. I highly recommend her',
    rating: 4.6
  }
]
function ReviewScreen({
  name,
  price,
  rating,
  cleaningCount,
  cleaner,
  typeCleaning1,
  typeCleaning2,
  typeCleaning3,
  aboutCleaner,
  id,
  ...props
}) {
  const [closeReview, setCloseReview] = useState(false)
  const handleCloseReview = () => {
    props.onClose()
  }
  const handleSelectCleaner = () => {
    props.onSelectCleaner()
  }

  return (
    <Container {...props} style={{ ...(closeReview && { display: 'none' }) }}>
      <ContainerContent>
        <Close onClick={handleCloseReview} src="/iconcloseW.png" />
        <DivCleanerInfos>
          <ContInfos>
            <CleanerImg image="/maleicon.png" /* {props.onCleanerinfos.img} */></CleanerImg>
            <CleanerName>{name || '-'}</CleanerName>
            <CleanerPrice>{price || '-'}</CleanerPrice>
            <div style={{ display: 'flex', gap: '4px' }}>
              <RatingAndExpirence>
                <StarRating src="/star.png" />
                {rating || '-'}
              </RatingAndExpirence>
              <RatingAndExpirence>{cleaningCount || '-'}</RatingAndExpirence>
            </div>
          </ContInfos>
          <hr />
          <DivDocInfos>
            <CheckInfo src="../checkIconB.png" />
            <Desc>Id checks out</Desc>
          </DivDocInfos>
          <DivDocInfos>
            <CheckInfo src="../checkIconB.png" />
            <Desc>Id checks out</Desc>
          </DivDocInfos>
          <hr />
          <TypeCleanings>
            <ThumbsUp />
            <Desc>{typeCleaning1 || '-'}</Desc>
          </TypeCleanings>
          <TypeCleanings>
            <ThumbsUp />
            <Desc>{typeCleaning2 || '-'}</Desc>
          </TypeCleanings>
          <TypeCleanings>
            <ThumbsUp />
            <Desc>{typeCleaning3 || '-'}</Desc>
          </TypeCleanings>
          <hr></hr>
          <ButtonAlt
            valor={cleaner ? 'Selected this cleaner' : 'Remove this cleaner'}
            onClick={handleSelectCleaner}
          />
        </DivCleanerInfos>
        <DivReviews>
          <BoxAboutMe>
            <AboutMeTitle>About Me: </AboutMeTitle>
            <AboutMeSub>Dedicated to my work</AboutMeSub>
            <AboutMeDesc>{aboutCleaner || '-'}</AboutMeDesc>
          </BoxAboutMe>
          <BoxReviews maxHeight={`${reviews.length * 80}px`}>
            <ReviewsTitle>Reviews</ReviewsTitle>
            {reviews.map((review, index) => (
              <ContReviewsClient key={index}>
                <FlexClientReviewName>
                  <ClientReviewName>{review.name}</ClientReviewName>
                  <Rating src="/star.png" />
                </FlexClientReviewName>
                <ClientReviewDesc>{review.desc}</ClientReviewDesc>
                <DivStarDate>
                  <ClientReviewDate>26/07/2002</ClientReviewDate>
                  <ClientReviewStars src="/maleicon.png" />
                </DivStarDate>
                <hr />
              </ContReviewsClient>
            ))}
          </BoxReviews>
        </DivReviews>
      </ContainerContent>
    </Container>
  )
}
export default dynamic(() => Promise.resolve(ReviewScreen), { ssr: false })
