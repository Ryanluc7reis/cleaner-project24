import styled from "styled-components";
import Button from "../form/Button";
import Selecter from "../form/Selecter";
import ImageWithServices from "./ImageWithServices";
import { useState } from "react";

const StyledContainer = styled.div`
	min-width: 100%;
	height: 150%;
	background: #000858c3;
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
	}
	@media (max-width: 376px) {
		width: 218%;
	}
	@media (max-width: 350px) {
		width: 247%;
	}
`;
const StyledTitle = styled.h1`
	color: #ffffffe1;
	display: flex;
	justify-content: center;
	padding-top: 40px;
	font-size: 37px;
	margin-bottom: 20px;
	@media (max-width: 645px) {
		font-size: 43px;
		font-weight: 700;
	}
`;
const StyledSubTitle = styled.p`
	display: flex;
	justify-content: center;
	margin: 30px 70px;
	width: auto;
	color: #ffffff;
	font-size: 19px;
	text-align: center;
	@media (max-width: 756px) {
		font-size: 23px;
	}
	@media (max-width: 458px) {
		font-size: 33px;
		font-weight: 500;
	}
`;
const StyledFlexInputs = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
`;


export default function SectionFour() {
	
  const [valor, setValor] = useState('')

  const handleInputChange = (event) => {
    setValor(event.target.value)
  }

  const handleSubmit = () => {
    router.push(`/plansScreen?region=${encodeURIComponent(valor)}`)
  }
	return (
		<StyledContainer>
			<StyledTitle>Cleaning Services</StyledTitle>
			<StyledSubTitle>
				Whatever it is you need: a regular clean, a deep scrub of your oven or a
				one off deep clean - The cleaners registered on the Helpling platform
				offer every cleaning service you could need. After your booking is
				confirmed, just let them know what your priorities are and they’ll make
				your home shine.
			</StyledSubTitle>
			<StyledFlexInputs>
				<Selecter  value={valor} onChange={handleInputChange}/>
				<Button onClick={handleSubmit}  >Let´s go</Button>
			</StyledFlexInputs>
			<ImageWithServices />
		</StyledContainer>
	);
}
