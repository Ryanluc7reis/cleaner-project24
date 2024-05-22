import styled from 'styled-components'

const StyledImage = styled.div`
  background-image: url('/limepezaimg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 63%;
  min-width: 22%;
  min-height: 100vh;
  z-index: 104;
`
export default function ImageNavdash({ image, children, ...props }) {
  return <StyledImage {...props}>{children}</StyledImage>
}
