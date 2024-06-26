import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import EditAbout from './EditAbout'

const AboutCleanerContainer = styled.div`
  width: 100%;
`

export default function AboutCleaner({
  id,
  name,
  price,
  rating,
  amountCleaning,
  experience,
  region,
  about,
  cleaning,
  cleaning2,
  cleaning3
}) {
  const [card, setCard] = useState(null)
  const { mutate } = useSWRConfig()

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const getCard = async () => {
    try {
      const response = await axios.get('https://cleaner-project-be.vercel.app/cleaner/findCard', {
        headers: { [AUTH_NAME]: token }
      })
      const data = response.data
      setCard(data)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }

  const handleSaveEdit = () => {
    mutate(`https://cleaner-project-be.vercel.app/cleaner/editAbout`)
  }

  useEffect(() => {
    getCard()
  }, [])
  return (
    <AboutCleanerContainer>
      {card && (
        <EditAbout
          id={id}
          name={name}
          price={price}
          rating={rating}
          experience={experience}
          amountCleaning={amountCleaning}
          region={region}
          about={about}
          cleaning={cleaning}
          cleaning2={cleaning2}
          cleaning3={cleaning3}
          onSave={handleSaveEdit}
        />
      )}
    </AboutCleanerContainer>
  )
}
