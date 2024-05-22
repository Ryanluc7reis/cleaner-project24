import styled from 'styled-components'
import Button from '../form/Button'
import Input from '../form/Input'

const Container = styled.div`
  background-color: #0d1d35ad;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1256px) {
    width: 120%;
  }
  @media (max-width: 1025px) {
    width: 125%;
  }
  @media (max-width: 900px) {
    width: 135%;
  }
  @media (max-width: 756px) {
    width: 150%;
  }
  @media (max-width: 634px) {
    width: 170%;
  }
  @media (max-width: 426px) {
    width: 201%;
    height: 100%;
  }
  @media (max-width: 376px) {
    width: 218%;
  }
  @media (max-width: 350px) {
    width: 247%;
  }
`
const NewsletterFooter = styled.div`
  height: 45vh;
  width: 100%;
  border-bottom: 1px solid #fdfdfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NewsletterTitle = styled.h5`
  font-size: 2.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 18px;
  @media (max-width: 769px) {
    font-size: 16px;
  }
  @media (max-width: 426px) {
    font-size: 23px;
    padding-top: 35px;
  }
  @media (max-width: 376px) {
    font-size: 26px;
  }
`

const NewsletterFooterForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const FollowUs = styled.div`
  height: 25vh;
  width: 100%;
  border-bottom: 1px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`

const FollowUsTitle = styled.h5`
  font-size: 2rem;
  font-weight: 700;
  color: #f6f6f6;
  margin: 40px 0;
  @media (max-width: 376px) {
    font-size: 26px;
  }
`

const FollowUsIcon = styled.img`
  width: 5rem;
  height: 5rem;
`

const FollowUsIconA = styled.a`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
`

const CopyrigthP = styled.p`
  font-size: 1.6rem;
  color: #f7f7f7;
  width: 500px;
  text-align: center;
  margin-top: 30px;
  word-break: break-word;
  @media (max-width: 769px) {
    font-size: 16px;
    margin-top: 0px;
  }
  @media (max-width: 426px) {
    font-size: 23px;
    margin: 9px;
    width: 100%;
  }
  @media (max-width: 376px) {
    font-size: 26px;
  }
`

export default function Footer() {
  return (
    <Container>
      <NewsletterFooter>
        <NewsletterTitle>Se inscreva em nossa newsletter :</NewsletterTitle>
        <NewsletterFooterForm>
          <Input placeholder="Write your e-mail" />
          <Button type="submit">Let´s go</Button>
        </NewsletterFooterForm>
        <CopyrigthP>
          Acesse nossa newsletter e fique por dentro de todas as mudanças e atualizações da nossa
          empresa, você não quer ser o ultimo a saber das novidades não é?
        </CopyrigthP>
      </NewsletterFooter>
      <FollowUs>
        <FollowUsTitle>Follow us:</FollowUsTitle>
        <IconsContainer>
          <FollowUsIconA href="https://twitter.com/?lang=pt" target="_blank">
            <FollowUsIcon src="xlogo.png" />
          </FollowUsIconA>
          <FollowUsIconA href="https://www.instagram.com/" target="_blank">
            <FollowUsIcon src="instalogo.png" />
          </FollowUsIconA>
          <FollowUsIconA href="https://www.facebook.com/" target="_blank">
            <FollowUsIcon src="facelogo.png" />
          </FollowUsIconA>
        </IconsContainer>
      </FollowUs>
      <CopyrigthP>All rights reserved. Privacy - Terms | ©2023 UP Cleaner</CopyrigthP>
    </Container>
  )
}
