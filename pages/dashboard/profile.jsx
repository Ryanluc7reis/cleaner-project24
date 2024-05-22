import styled, { keyframes } from 'styled-components'
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
import NavRoutesDash from '../../src/components/layout/Navroutesdash'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #001044;
  display: flex;
  @media (max-width: 340px) {
    width: 107%;
  }
`

const BoxCardCleaner = styled.div`
  min-width: 80%;
  min-height: 360px;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  @media (max-width: 400px) {
    min-width: 75%;
  }
  @media (max-width: 373px) {
    min-width: 65%;
  }
`
const BoxAboutCleaner = styled.div`
  min-width: 80%;
  margin-top: 30px;
  height: 450px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 400px) {
    min-width: 75%;
    padding: 7px;
  }
  @media (max-width: 373px) {
    min-width: 60%;
  }
`
const FlexBoxCardCleaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 25px;
  @media (max-width: 685px) {
    flex-direction: column;
    gap: 0px;
  }
`
const CardAlt = styled(Card)`
  border: 2px solid ${(props) => props.theme.colors.primaryColor};
  margin-bottom: 90px;
  background-color: #d9d9f8e6;
  @media (max-width: 400px) {
    width: 270px;
  }
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
  flex-direction: column;
  width: 100%;
  gap: 8px;
`
const PopUpMessageAlt = styled(PopUpMessage)`
  position: fixed;
  top: 0%;
`
const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 140px 400px;
`
const NavBarDashboardAlt = styled(NavBarDashboard)`
  @media (max-width: 1306px) {
    display: ${(props) => (props.show ? 'flex' : 'none')};
    width: 287px;
    min-height: 100%;
    position: fixed;
    animation: ${(props) => (props.show ? slideRight : slideLeft)} 0.3s forwards;
    transform-origin: left;
    visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  }
`

const slideRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`
const ProfilePage = () => {
  const router = useRouter()
  const [popUpMessage, setPopUpMessage] = useContext(PopUpContext)
  const [userData, setUserData] = useContext(UserContext)
  const { user, userId } = userData
  const [card, setCard] = useState(null)
  const [userCleaner, setUserCleaner] = useState(null)
  const [userCurrentUserData, setCurrentUserData] = useState({})
  const [showDash, setShowDash] = useState(false)

  const handleDash = () => {
    setShowDash(!showDash)
  }

  const { mutate } = useSWRConfig()
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const findUser = async () => {
    try {
      const response = await axios.get(`https://cleaner-project-be.vercel.app/user/findUser`, {
        headers: { [AUTH_NAME]: token }
      })
      const data = response.data
      setCurrentUserData(data)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }
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

  const findCleaner = async () => {
    try {
      const response = await axios.get(
        'https://cleaner-project-be.vercel.app/user/verify-cleaner',
        {
          headers: { [AUTH_NAME]: token }
        }
      )
      const cleaner = response.data
      setUserCleaner(cleaner)
    } catch (error) {
      console.error('Erro ao obter os dados do cartão:', error)
    }
  }
  const verifyUser = async () => {
    try {
      await axios.get('https://cleaner-project-be.vercel.app/user/verify-session', {
        headers: {
          [AUTH_NAME]: token
        }
      })
    } catch (error) {
      router.push('/')
      console.error('Erro ao verificar sessão:', error)
    }
  }

  const handleSaveEditCard = () => {
    mutate(`https://cleaner-project-be.vercel.app/cleaner/editAbout`)
  }
  useEffect(() => {
    getCard()
    findUser()
    findCleaner()
    verifyUser()
    setTimeout(() => {
      setPopUpMessage(false)
    }, 4000)
  }, [popUpMessage, showDash])
  return (
    <Container>
      {userCleaner ? (
        <>
          {popUpMessage && userCleaner && (
            <PopUpMessageAlt messageToOkrequest={popUpMessage}>
              Perfil editado com sucesso
            </PopUpMessageAlt>
          )}

          <NavBarDashboardAlt
            onDash={handleDash}
            showDashBoard={showDash}
            show={showDash}
            isProfile
          />

          <FlexProfileAndCard>
            <NavRoutesDash onClickDash={handleDash} profile type1 />
            <div style={{ padding: ' 0px 15px' }}>
              {Object.keys(userCurrentUserData).length === 0 ? (
                <StyledLoader>
                  <img width="30px" height="28px" src="/loadingGif.png" />
                  <h2>Carregando</h2>
                </StyledLoader>
              ) : (
                <>
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
                </>
              )}
              {!userData && !card ? (
                <StyledLoader>
                  <img width="30px" height="28px" src="/loadingGif.png" />
                  <h2>Carregando</h2>
                </StyledLoader>
              ) : (
                <>
                  {userData && card ? (
                    <>
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
                    </>
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
                </>
              )}
            </div>
          </FlexProfileAndCard>
        </>
      ) : (
        <>
          {popUpMessage && (
            <PopUpMessage messageToOkrequest={popUpMessage}>
              Perfil editado com sucesso
            </PopUpMessage>
          )}

          <NavBarDashboardAlt
            onDash={handleDash}
            showDashBoard={showDash}
            show={showDash}
            isProfile
          />
          <FlexProfileAndCard>
            <NavRoutesDash onClickDash={handleDash} profile type1 />
            <div style={{ padding: ' 0px 15px' }}>
              {Object.keys(userCurrentUserData).length === 0 ? (
                <StyledLoader>
                  <img width="30px" height="28px" src="/loadingGif.png" />
                  <h2>Carregando</h2>
                </StyledLoader>
              ) : (
                <>
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
                </>
              )}
            </div>
          </FlexProfileAndCard>
        </>
      )}
    </Container>
  )
}

export default ProfilePage
