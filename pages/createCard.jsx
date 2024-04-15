import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import Card from '../src/components/cardcleaner/Card'
import Input from '../src/components/form/Input'
import Logo from '../src/components/logo/Logo'
import Button from '../src/components/form/Button'
import Selecter from '../src/components/form/Selecter'
import Textarea from '../src/components/form/Textarea'

const Container = styled.div`
  width: 100%;
  min-height: 107vh;
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
  padding-bottom: 30px;
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
const Label = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 7px;
`

export default function CreateCardCleaner() {
  const router = useRouter()
  const [loading, setLoading] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    experience: '',
    amountCleaning: '',
    region: '',
    about: '',
    cleaning: '',
    cleaning2: '',
    cleaning3: ''
  })

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
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
        `http://localhost:3333/cleaner/createCard`,
        formData,
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
              placeholder="name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
            <InputAlt
              colorlabel
              label="Price"
              placeholder="price"
              name="price"
              value={formData.price}
              onChange={(e) => handleChange('price', e.target.value)}
              required
            />
            <InputAlt
              colorlabel
              label="Experience"
              placeholder="experience"
              name="experience"
              value={formData.experience}
              onChange={(e) => handleChange('experience', e.target.value)}
              required
            />
            <InputAlt
              colorlabel
              label="Amount of cleaning"
              type="number"
              placeholder="amount of cleaning"
              name="amountCleaning"
              value={formData.amountCleaning}
              onChange={(e) => handleChange('amountCleaning', e.target.value)}
              required
            />
            <Label>Region</Label>
            <Selecter
              region2
              name="region"
              value={formData.region}
              onChange={(e) => handleChange('region', e.target.value)}
            />
          </FlexInputs>
          <CardAlt
            none
            name={formData.name}
            price={formData.price}
            experience={formData.experience}
            amountCleaning={formData.amountCleaning}
            region={formData.region}
          />
        </FlexInputAndCard>
        <Title>Crie seu review</Title>
        <FlexInputs>
          <Label>Talk about cleaner</Label>
          <Textarea
            placeholder="Olá eu sou o Gabs..."
            name="about"
            value={formData.about}
            onChange={(e) => handleChange('about', e.target.value)} // Alteração aqui
          />
          <Label>Type of cleaning 1</Label>
          <Selecter
            name="cleaning"
            onChange={(e) => handleChange('cleaning', e.target.value)} // Alteração aqui
            value={formData.cleaning}
            typeCleaning
          />
          <Label>Type of cleaning 2</Label>
          <Selecter
            onChange={(e) => handleChange('cleaning2', e.target.value)} // Alteração aqui
            name="cleaning2"
            value={formData.cleaning2}
            typeCleaning
          />
          <Label>Type of cleaning 3</Label>
          <Selecter
            onChange={(e) => handleChange('cleaning3', e.target.value)} // Alteração aqui
            name="cleaning3"
            value={formData.cleaning3}
            typeCleaning
          />
        </FlexInputs>

        <FlexButton>
          <ButtonAlt
            loading={loading}
            type="submit"
            disabled={
              formData.name &&
              formData.price &&
              formData.experience &&
              formData.amountCleaning &&
              formData.region
                ? false
                : true
            }
          >
            Create card
          </ButtonAlt>
        </FlexButton>
      </Form>
    </Container>
  )
}
