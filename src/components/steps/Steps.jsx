import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  @media (max-width: 1190px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const DivSteps = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  width: auto;
  margin: 20px 15%;
  padding: 15px ;
  gap: 7px;
  @media (max-width: 1190px){
    width: 80vw;
  }
  @media (max-width: 650px){
    max-height: 80px;
  }
  @media (max-width: 470px){
    width: 90%;
    font-size: 8px;
  }
`
const BoxCheck = styled.div`
  padding: 3px 5px;
  align-items: center;
  text-align: center ;
  background: #242c99e1;
  border-radius: 25px;
`
const BoxCheckAlt = styled(BoxCheck)`
  background: transparent;
  border: 1px solid gray;
`
const Check = styled.img`
 height: 15px;
 width: 17px;
 margin-top: 4px;
 `
 const CheckText = styled.h3`
  padding: 3px 5px;
  color: white;
 `
 const CheckTextAlt = styled(CheckText)`
  color: gray;
 `
 const Traço = styled.h3`
  @media (max-width: 650px){
    visibility: hidden;
  }
 `
export default function Steps({type1, type2, ...props}){
  return(
    <Container {...props}>
        {type1 &&
          <DivSteps >
            <BoxCheck>
              <Check src='/Whitecheck.png' />
            </BoxCheck>
            <h2> Your bookings </h2>
            <Traço>------------------------------------------------------ </Traço>
            <BoxCheck>
              <CheckText>2</CheckText>
            </BoxCheck>  
            <h2>Your Details</h2> 
            <Traço>------------------------------------------------------ </Traço>
            <BoxCheckAlt>
              <CheckTextAlt>3</CheckTextAlt>
            </BoxCheckAlt>
            <h2>Your Payment </h2>
          </DivSteps>}
      
        {type2 &&
            <DivSteps>
              <BoxCheck>
                <Check src='/Whitecheck.png' />
              </BoxCheck>
              <h2> Your bookings </h2>
              <h3>------------------------------------------------------ </h3>
              <BoxCheck>
                <Check src='/Whitecheck.png' />
              </BoxCheck>  
              <h2>Your Details</h2> 
              <h3>------------------------------------------------------ </h3>
              <BoxCheck>
                <CheckText>3</CheckText>
              </BoxCheck>
              <h2>Your Payment </h2>
            </DivSteps >
           }
    </Container>
    
     
    

  )
} 