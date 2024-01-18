import { useRouter } from "next/router";
import styled from "styled-components";

const StyledLogo = styled.h1`
  color: #fff;
  padding-left: 7px;
  font-size: 40px;
  cursor: pointer;
`;
export default function Logo({colorblue,...props}) {
  const router = useRouter();
  return <StyledLogo style={{...(colorblue && {
    color:"#242c99b7"
  })}} onClick={() => router.push("/")}{...props}>UpCleaner</StyledLogo>;
}
