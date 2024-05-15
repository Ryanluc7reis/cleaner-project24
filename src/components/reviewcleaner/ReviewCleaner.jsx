import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Input from '../form/Input'
import Button from '../form/Button'

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #000000b3;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`
const BoxReview = styled.div`
  width: 350px;
  height: 210px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: #3030f0;
`
const Star = styled.img`
  padding: 1px;
  cursor: pointer;
`
const ButtonAlt = styled(Button)`
  padding: 9px;
  width: 120px;
`
const StyledFlexRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

export default function ReviewCleaner({ forCleaner, onClose, cleanerUser, review2, review1 }) {
  const [starSelected, setStarSelected] = useState(null)
  const [loading, setLoading] = useState(false)
  const [cardCleaner, setCardCleaner] = useState({})
  const [ratings, setRatings] = useState([])
  const [text, setText] = useState('')
  const [thanksForRating, setThanksForRating] = useState(false)

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const ModaRatings = ratings.map((rating) => rating.stars)
  const calcularModa = (array) => {
    let contagem = {}

    array.forEach((elemento) => {
      contagem[elemento] = (contagem[elemento] || 0) + 1
    })

    let moda = []
    let maiorFrequencia = 0
    for (const chave in contagem) {
      const frequencia = contagem[chave]
      if (frequencia > maiorFrequencia) {
        moda = [chave]
        maiorFrequencia = frequencia
      } else if (frequencia === maiorFrequencia) {
        moda.push(chave)
      }
    }

    if (moda.length === array.length) {
      return Math.max(...array)
    } else if (moda.length > 1) {
      return Math.max(...moda)
    } else {
      return moda
    }
  }

  const moda = calcularModa(ModaRatings)
  const modaToNumber = parseInt(moda)
  const handleClose = async () => {
    onClose()
    await axios.get(`http://localhost:3333/notificationsAsRead`, {
      headers: { [AUTH_NAME]: token }
    })
  }
  const handleChange = (event) => {
    setText(event.target.value)
  }
  const handleStarClick = (selectedStar) => {
    setStarSelected(selectedStar)
  }

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          onClick={() => handleStarClick(i)}
          src={starSelected >= i ? '/staryellow.png' : '/star1.png'}
        />
      )
    }
    return stars
  }
  const getRatings = async () => {
    try {
      const getRatings = await axios.post(
        `http://localhost:3333/getRatings`,
        {
          forCleaner: forCleaner
        },
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )

      const data = getRatings.data
      setRatings(data)
    } catch (err) {
      console.error(err.message)
    }
  }
  const getCardCleaner = async () => {
    try {
      const card = await axios.get(`http://localhost:3333/cleaner/getOneCard`, {
        params: { cleaner: cleanerUser }
      })
      const data = card.data
      setCardCleaner(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleRateNow = async () => {
    try {
      setLoading(true)
      await axios.post(
        `http://localhost:3333/createReview`,
        {
          forCleaner: cleanerUser,
          text: text
        },
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )
      const createRating = await axios.post(
        `http://localhost:3333/createRating`,
        {
          forCleaner: forCleaner,
          stars: starSelected
        },
        {
          headers: {
            [AUTH_NAME]: token
          }
        }
      )
      if (ratings && createRating.status === 201) {
        const editRating = await axios.patch(
          `http://localhost:3333/cleaner/editRatingCard`,
          { id: cardCleaner._id, rating: modaToNumber, creator: cardCleaner.creator },
          {
            headers: {
              [AUTH_NAME]: token
            }
          }
        )
        if (editRating.status === 200) {
          await axios.get(`http://localhost:3333/notificationsAsRead`, {
            headers: { [AUTH_NAME]: token }
          })
        }
      }
    } catch (err) {
      console.error(err.message)
    } finally {
      setLoading(false)
      setThanksForRating(true)
    }
  }

  useEffect(() => {
    getCardCleaner()
    getRatings()
  }, [starSelected])

  return (
    <Container>
      <BoxReview>
        {review1 &&
          (thanksForRating ? (
            <StyledFlexRating>
              <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                <h2>Thank you for the rating</h2>
                <img style={{ padding: '2px' }} src="smilewhite.png" />
              </div>
              <ButtonAlt onClick={handleClose}>Close</ButtonAlt>
            </StyledFlexRating>
          ) : (
            <StyledFlexRating>
              <h2>Rate the service</h2>
              <div style={{ display: 'flex', gap: '4px' }}>{renderStars()}</div>
              <h2>What did you think of {forCleaner}`s service ?</h2>
              <Input onChange={handleChange} value={text} placeholder="Enter here..." />
              <div style={{ display: 'flex', gap: '3px' }}>
                <ButtonAlt loading={loading} onClick={handleRateNow}>
                  Rate now
                </ButtonAlt>
                <ButtonAlt onClick={handleClose}>Not now</ButtonAlt>
              </div>
            </StyledFlexRating>
          ))}
        {review2 &&
          (thanksForRating ? (
            <StyledFlexRating>
              <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                <h2>Thank you for the rating</h2>
                <img style={{ padding: '2px' }} src="smilewhite.png" />
              </div>
              <ButtonAlt onClick={handleClose}>Close</ButtonAlt>
            </StyledFlexRating>
          ) : (
            <StyledFlexRating>
              <h2>Rate the service</h2>
              <div style={{ display: 'flex', gap: '4px' }}>{renderStars()}</div>
              <h2>What did you think of {forCleaner}`s service ?</h2>
              <Input onChange={handleChange} value={text} placeholder="Enter here..." />
              <div style={{ display: 'flex', gap: '3px' }}>
                <ButtonAlt loading={loading} onClick={handleRateNow}>
                  Rate now
                </ButtonAlt>
                <ButtonAlt onClick={handleClose}>Not now</ButtonAlt>
              </div>
            </StyledFlexRating>
          ))}
      </BoxReview>
    </Container>
  )
}
