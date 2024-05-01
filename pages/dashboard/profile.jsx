import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../src/context/useContext'
import { PopUpContext } from '../../src/context/useContextPopUp'
import axios from 'axios'
import { useSWRConfig } from 'swr'

import NavBarDashboard from '../../src/components/layout/NavBarDashboard'
import Profile from '../../src/components/profile/Profile'
import Card from '../../src/components/cardcleaner/Card'
import EditCard from '../../src/components/cardcleaner/EditCard'
import About from '../../src/components/aboutcleaner/About'
import PopUpMessage from '../../src/components/popupmessage/PopUpMessage'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #001044;
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledFlex = styled.div`
  display: flex;
`
const BoxCardCleaner = styled.div`
  min-width: 90%;
  min-height: 360px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`
const BoxAboutCleaner = styled.div`
  min-width: 97%;
  margin-top: 30px;
  height: 450px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const FlexBoxCardCleaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 25px;
`
const CardAlt = styled(Card)`
  border: 2px solid ${(props) => props.theme.colors.primaryColor};
  margin-bottom: 90px;
  background-color: #d9d9f8e6;
`
const CardAlt1 = styled(Card)`
  border: 2px solid ${(props) => props.theme.colors.primaryColor};

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
const FlexProfileAndCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const PopUpMessageAlt = styled(PopUpMessage)`
  position: fixed;
  top: 0%;
`

const ProfilePage = () => {
  const router = useRouter()
  const [popUpMessage, setPopUpMessage] = useContext(PopUpContext)
  const [userData, setUserData] = useContext(UserContext)
  const { user, userId } = userData
  const [card, setCard] = useState(null)
  const [userCleaner, setUserCleaner] = useState(null)
  const [userCurrentUserData, setCurrentUserData] = useState({})

  const { mutate } = useSWRConfig()
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

  const findUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3333/user/findUser`, {
        headers: { authorization: token }
      })
      const data = response.data
      setCurrentUserData(data)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }
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

  const findCleaner = async () => {
    try {
      const response = await axios.get('http://localhost:3333/user/verify-cleaner', {
        headers: { authorization: token }
      })
      const cleaner = response.data
      setUserCleaner(cleaner)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }

  const handleSaveEditCard = () => {
    mutate(`http://localhost:3333/cleaner/editAbout`)
  }
  useEffect(() => {
    getCard()
    findUser()
    findCleaner()
    setTimeout(() => {
      setPopUpMessage(false)
    }, 4000)
  }, [popUpMessage])

  return (
    <Container>
      {userCleaner ? (
        <FlexContainer>
          {popUpMessage && userCleaner && (
            <PopUpMessageAlt messageToOkrequest={popUpMessage}>
              Perfil editado com sucesso
            </PopUpMessageAlt>
          )}
          <StyledFlex>
            <NavBarDashboard isProfile />
            <FlexProfileAndCard>
              {Object.keys(userCurrentUserData).length !== 0 && (
                <Profile
                  id={userCurrentUserData._id}
                  fullName={userCurrentUserData.fullName}
                  user={userCurrentUserData.user}
                  email={userCurrentUserData.email}
                  password={userCurrentUserData.password}
                  address={userCurrentUserData.address}
                  number={userCurrentUserData.number}
                />
              )}
              {userData && card ? (
                <div>
                  <BoxCardCleaner>
                    <Label>Card cleaner</Label>
                    <FlexBoxCardCleaner>
                      <CardAlt
                        id={card._id}
                        name={card.name}
                        price={card.price}
                        rating={card.rating}
                        experience={card.experience}
                        amountCleaning={card.amountCleaning}
                        region={card.region}
                        none
                      />
                      <EditCard
                        id={card._id}
                        name={card.name}
                        price={card.price}
                        rating={card.rating}
                        experience={card.experience}
                        amountCleaning={card.amountCleaning}
                        region={card.region}
                        about={card.about}
                        cleaning={card.cleaning}
                        cleaning2={card.cleaning2}
                        cleaning3={card.cleaning3}
                        onSave={handleSaveEditCard}
                      />
                    </FlexBoxCardCleaner>
                  </BoxCardCleaner>
                  <BoxAboutCleaner>
                    <Label>About Cleaner</Label>
                    {card && (
                      <About
                        id={card._id}
                        name={card.name}
                        price={card.price}
                        rating={card.rating}
                        experience={card.experience}
                        amountCleaning={card.amountCleaning}
                        region={card.region}
                        about={card.about}
                        cleaning={card.cleaning}
                        cleaning2={card.cleaning2}
                        cleaning3={card.cleaning3}
                      />
                    )}
                  </BoxAboutCleaner>
                </div>
              ) : (
                <BoxCardCleaner>
                  <Label>Card cleaner</Label>
                  <FlexBoxCardCleaner>
                    <CardAlt1 none />
                    <div style={{ display: 'flex' }}>
                      <CreateCard onClick={() => router.push('/createCard')}>
                        Crie seu card
                      </CreateCard>
                      <img src="/arrowClick.png" width="25px" height="25px"></img>
                    </div>
                  </FlexBoxCardCleaner>
                </BoxCardCleaner>
              )}
            </FlexProfileAndCard>
          </StyledFlex>
        </FlexContainer>
      ) : (
        <FlexContainer>
          {popUpMessage && (
            <PopUpMessage messageToOkrequest={popUpMessage}>
              Perfil editado com sucesso
            </PopUpMessage>
          )}
          <StyledFlex>
            <NavBarDashboard isProfile />
            {Object.keys(userCurrentUserData).length !== 0 && (
              <Profile
                id={userCurrentUserData._id}
                fullName={userCurrentUserData.fullName}
                user={userCurrentUserData.user}
                email={userCurrentUserData.email}
                password={userCurrentUserData.password}
                address={userCurrentUserData.address}
                number={userCurrentUserData.number}
              />
            )}
          </StyledFlex>
        </FlexContainer>
      )}
    </Container>
  )
}

export default ProfilePage
