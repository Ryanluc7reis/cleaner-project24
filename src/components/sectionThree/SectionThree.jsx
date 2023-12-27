import styled from "styled-components";
import Cards from "../cardsplan/Cards";
import Button from "../form/Button";
const StyledContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #dbdbdbc4;
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
	color: ${(props) => props.theme.colors.primaryColor};
	display: flex;
	justify-content: center;
	padding-top: 50px;
	font-size: 37px;
	margin-bottom: 90px;
`;
const ButtonAlt = styled(Button)`
	margin-top: 500px;
	position: absolute;
	@media (max-width: 426px) {
		margin-top: 80px;
		margin-bottom: 15px;
		position: relative;
	}
`;


export default function SectionThree() {
	return (
		<StyledContainer>
			<StyledTitle>Services Plans</StyledTitle>
				<Cards type="5">
					<ButtonAlt />
				</Cards>
		</StyledContainer>
	);
}
