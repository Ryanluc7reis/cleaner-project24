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

  const getCard = async () => {
    try {
      const response = await axios.get('http://localhost:3333/cleaner/findCard', {
        headers: { authorization: token }
      })
      const data = response.data
      setCard(data)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }

  const handleSaveEdit = () => {
    mutate(`http://localhost:3333/cleaner/editAbout`)
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
