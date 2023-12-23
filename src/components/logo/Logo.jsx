import { useRouter } from "next/router";
import styled from "styled-components";

const StyledLogo = styled.h1`
  color: #fff;
  padding-left: 7px;
  font-size: 40px;
  cursor: pointer;
  /* @media (max-width: 430px) { 
    font-size: 50px;
  }
  */
`;
export default function Logo(props) {
  const router = useRouter();
  return <StyledLogo onClick={() => router.push("/")}{...props}>UpCleaner</StyledLogo>;
}
