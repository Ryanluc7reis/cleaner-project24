import styled from 'styled-components'

const StyledImage = styled.div`
  background-image: url('/imageHome4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-attachment: fixed;
  width: 100%;
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
    background-size: contain;
    background-size: 142%;
  }
  @media (max-width: 450px) {
    background-size: 170%;
  }
  @media (max-width: 426px) {
    width: 201%;
  }
  @media (max-width: 376px) {
    width: 218%;
  }
  @media (max-width: 350px) {
    width: 247%;
  }
`
export default function ImageSectionOne({ image, children, ...props }) {
  return <StyledImage {...props}>{children}</StyledImage>
}
