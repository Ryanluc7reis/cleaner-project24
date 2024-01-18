import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
`
const DivSteps = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  margin: 20px 15%;
  padding: 15px ;
  gap: 7px;
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
export default function Steps({type1, type2, ...props}){
  return(
    <Container {...props}>
        {type1 &&
          <DivSteps >
            <BoxCheck>
              <Check src='/Whitecheck.png' />
            </BoxCheck>
            <h2> Your bookings </h2>
            <h3>------------------------------------------------------ </h3>
            <BoxCheck>
              <CheckText>2</CheckText>
            </BoxCheck>  
            <h2>Your Details</h2> 
            <h3>------------------------------------------------------ </h3>
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