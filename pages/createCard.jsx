import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import Card from '../src/components/cardcleaner/Card'
import Input from '../src/components/form/Input'
import Logo from '../src/components/logo/Logo'
import Button from '../src/components/form/Button'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #223677;
`
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const FlexInputs = styled.div`
  display: flex;
  flex-direction: column;
`
const FlexInputAndCard = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
  @media (max-width: 634px) {
    flex-direction: column;
  }
`
const Title = styled.h1`
  font-size: 25px;
  text-align: center;
  color: white;
  padding-top: 70px;
  padding-bottom: 10px;
`
const FlexButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`
const InputAlt = styled(Input)`
  padding: 13px 17px;
  @media (max-width: 430px) {
    font-size: 13px;
  }
`
const ButtonAlt = styled(Button)`
  @media (max-width: 430px) {
    font-size: 15px;
  }
`
const CardAlt = styled(Card)`
  @media (max-width: 356px) {
    width: 305px;
  }
`
const LogoAlt = styled(Logo)`
  padding: 17px 18px;
  text-align: center;
`

export default function CreateCardCleaner() {
  const router = useRouter()
  const [loading, setLoading] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [experience, setExperience] = useState('')
  const [amountCleaning, setAmountCleaning] = useState('')

  const handleNameChange = (event) => {
    const newName = event.target.value.slice(0, 22)
    setName(newName)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  const handleExperienceChange = (event) => {
    setExperience(event.target.value)
  }

  const handleCleaningChange = (event) => {
    setAmountCleaning(event.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          authorization: token
        }
      }
      const { status } = await axios.post(
        `http://localhost:3333/createCard`,
        {
          name,
          price,
          experience,
          amountCleaning
        },
        config
      )
      if (status === 201) {
        router.push('/')
        alert('Card criado com sucesso')
      }
    } catch (err) {
      alert('Não foi possivel criar o card')
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <LogoAlt />
      <Title>Crie seu cleaner card</Title>
      <Form onSubmit={onSubmit}>
        <FlexInputAndCard>
          <FlexInputs>
            <InputAlt
              colorlabel
              label="Name"
              onChange={handleNameChange}
              placeholder="name"
              required
            />
            <InputAlt
              colorlabel
              label="Price"
              onChange={handlePriceChange}
              placeholder="price"
              required
            />
            <InputAlt
              colorlabel
              label="Experience"
              onChange={handleExperienceChange}
              placeholder=" time experience"
              required
            />
            <InputAlt
              colorlabel
              label="Amount of cleaning"
              onChange={handleCleaningChange}
              placeholder="amount of cleaning"
              required
            />
          </FlexInputs>
          <CardAlt
            none
            name={name}
            price={price}
            experience={experience}
            amountCleaning={amountCleaning}
            required
          />
        </FlexInputAndCard>

        <FlexButton>
          <ButtonAlt
            loading={loading}
            type="submit"
            disabled={name && price && experience && amountCleaning ? false : true}
          >
            Create card
          </ButtonAlt>
        </FlexButton>
      </Form>
    </Container>
  )
}
