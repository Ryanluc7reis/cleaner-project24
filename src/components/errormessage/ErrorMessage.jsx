import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 7px;
  align-items: center;
`
const Message = styled.h2`
  color: #434242;
`
const Image = styled.img`
  padding: 7px;
`
export default function ErrorMessage({ message, ...props }) {
  return (
    <Container {...props}>
      <Image src="/emojiError.png" />
      <Message>{message}</Message>
    </Container>
  )
}
