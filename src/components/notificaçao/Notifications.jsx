import styled from 'styled-components'
import { useRouter } from 'next/router'
import axios from 'axios'

const Notificaçao = styled.div`
  width: 448px;
  height: 60px;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 188 212 / 40%);
  background-color: #00cae3;
  color: #fff;
  margin-bottom: 18px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  @media (max-width: 532px) {
    width: 372px;
  }
  @media (max-width: 414px) {
    width: 367px;
  }
  @media (max-width: 390px) {
    width: 340px;
  }
  @media (max-width: 375px) {
    width: 330px;
    margin: 0px;
    padding: 5px 5px;
  }
  @media (max-width: 360px) {
    width: 320px;
  }
  @media (max-width: 344px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 279px;
  }
`
const Text = styled.h3`
  cursor: pointer;
  padding: 20px 0px;
`
const Close = styled.img`
  padding: 2px;
  cursor: pointer;
  opacity: 0.6;
  :hover {
    background-color: rebeccapurple;
  }
`

export default function Notifications({ notificationType, id, ...props }) {
  const router = useRouter()
  const AUTH_NAME = process.env.SESSION_TOKEN_NAME
  const handleDelete = async (e) => {
    e.preventDefault()
    props.onDelete()

    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
      const config = {
        headers: {
          [AUTH_NAME]: token
        },
        data: { id: id }
      }
      await axios.delete('https://cleaner-project-be.vercel.app/deleteNotification', config)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Notificaçao {...props}>
      <Text onClick={() => router.push('/dashboard/')}>{notificationType}</Text>
      <Close onClick={handleDelete} src="/Xwhite.svg" />
    </Notificaçao>
  )
}
