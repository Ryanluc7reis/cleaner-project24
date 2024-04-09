import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../src/context/useContext'
import useSWR from 'swr'
import axios from 'axios'

import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Profile from '../../src/components/profile/Profile'
import Card from '../../src/components/cardcleaner/Card'
import EditCard from '../../src/components/cardcleaner/EditCard'

const Container = styled.div`
  min-width: 100%;
  width: auto;
  min-height: 100vh;
  height: auto;
  background: #eaeaea;
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 10px;
`
const StyledFlex = styled.div`
  display: flex;
`
const BoxCardCleaner = styled.div`
  width: 60%;
  min-height: 360px;
  background-color: #fff;
  border-radius: 15px;
  margin-right: 160px;
  display: flex;
  flex-direction: column;
`
const FlexBoxCardCleaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding-top: 45px;
`
const CardAlt = styled(Card)`
  border: 2px solid ${(props) => props.theme.colors.primaryColor};
  margin-bottom: 90px;
  background-color: #d8d8ffd5;
`
const CreateCard = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primaryColor};
  cursor: pointer;
  :hover {
    color: darkblue;
  }
`
const Label = styled.h2`
  padding: 9px;
  color: #a7a7a7;
`
const fetcher = (url, token) =>
  axios.get(url, { headers: { authorization: token } }).then((res) => res.data)

const ProfilePage = () => {
  const router = useRouter()
  const [userData] = useContext(UserContext)
  const [card, setCard] = useState(null)
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const getCard = async () => {
    try {
      const response = await axios.get('http://localhost:3333/findCard', {
        headers: { authorization: token }
      })
      const data = response.data
      setCard(data)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }

  useEffect(() => {
    getCard()
  }, [])
  return (
    <Container>
      <FlexContainer>
        <StyledFlex>
          <NavBarDashboard isProfile />
          <Profile cleaner />
        </StyledFlex>
        {userData && card ? (
          <BoxCardCleaner key={card._id}>
            <Label>Card cleaner</Label>
            <FlexBoxCardCleaner>
              <CardAlt
                name={card.name}
                price={card.price}
                rating={card.rating}
                experience={card.experience}
                amountCleaning={card.amountCleaning}
                none
              />
              <EditCard />
            </FlexBoxCardCleaner>
          </BoxCardCleaner>
        ) : (
          <BoxCardCleaner>
            <Label>Card cleaner</Label>
            <FlexBoxCardCleaner>
              <CardAlt none />
              <CreateCard onClick={() => router.push('/createCard')}>Crie seu card</CreateCard>
            </FlexBoxCardCleaner>
          </BoxCardCleaner>
        )}
      </FlexContainer>
    </Container>
  )
}

export default ProfilePage
