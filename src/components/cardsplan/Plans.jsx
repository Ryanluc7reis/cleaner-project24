import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: auto;
`;
const StyledTitleCard = styled.h1`
	background-image: linear-gradient(15deg, #242c99, #25a0a8, #242c99);
	background-clip: text;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	margin-left: 10px;
	margin-top: 20px;
	width: 100%;
	@media (max-width: 769px) {
		font-size: 25px;
	}
	@media (max-width: 426px) {
		font-size: 27px;
	}
	@media (max-width: 376px) {
		font-size: 29px;
	}
`;
const StyledReadyImage = styled.img`
	width: 30px;
	height: 30px;
	margin-bottom: 6px;
	margin-right: 8px;
`;
const StyledNameCleaning = styled.p`
	color: ${(props) => props.theme.colors.primaryColor};
	font-size: 19px;
	width: 100%;
	margin-left: 10px;
	margin-top: 15px;
	height: 15%;
	font-weight: 800;

	@media (max-width: 426px) {
		font-size: 23px;
	}
	@media (max-width: 376px) {
		font-size: 26px;
	}
	@media (max-width: 374px) {
		font-size: 30px;
	}
`;
const StyledDescription = styled.p`
	color: ${(props) => props.theme.colors.primaryColor};
	font-size: 14px;
	margin-left: 5px;
	width: 95%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-weight: 500;
	margin-top: 10px;
	@media (max-width: 769px) {
		font-size: 16px;
	}
	@media (max-width: 426px) {
		font-size: 24px;
		font-weight: 500;
	}
	@media (max-width: 376px) {
		font-size: 27px;
	}
	@media (max-width: 374px) {
		font-size: 30px;
	}
`;
const StyledBarra = styled.div`
	width: 300px;
	height: 2px;
	margin: 25px 0px;
	border-radius: 4px;
	background-color: black;
`;
const StyledBarrAlt = styled(StyledBarra)`
	margin-top: 50px;
`;
const StyledBarrAlt1 = styled(StyledBarra)`
	margin-top: 75px;
`;

const StyledContAll = styled.div`
	display: flex;
	flex-direction: column;
`;
export default function Plans({ plan }) {
	return (
		<Container>
			{plan === "1" && (
				<StyledContAll>
					<StyledTitleCard>OPTIONAL</StyledTitleCard>
					<StyledDescription>
						R$ 21,90/mês após o período da oferta
					</StyledDescription>
					<StyledNameCleaning>- Choose your Cleaning</StyledNameCleaning>
					<StyledBarrAlt1 />
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Wet Manual Cleaning
					</StyledDescription>
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Dry Cleaning
					</StyledDescription>
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Window Cleaning
					</StyledDescription>
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Home Apliance Cleaning
					</StyledDescription>
				</StyledContAll>
			)}
			{plan === "2" && (
				<StyledContAll>
					<StyledTitleCard>BASIC</StyledTitleCard>
					<StyledDescription>
						R$ 27,90/mês após o período da oferta
					</StyledDescription>
					<StyledNameCleaning>
						- Wet Manual Cleaning - Dry Cleaning
					</StyledNameCleaning>
					<StyledBarrAlt />
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Tenha seus móveis limpados com pano úmido
					</StyledDescription>
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Tenha seu chão varrido com vassoura{" "}
					</StyledDescription>
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Tenha seu chão limpado com pano úmido
					</StyledDescription>
				</StyledContAll>
			)}
			{plan === "3" && (
				<StyledContAll>
					<StyledTitleCard>MEDIUM</StyledTitleCard>
					<StyledDescription>
						R$ 34,90/mês após o período da oferta
					</StyledDescription>
					<StyledNameCleaning>
						- Wet Manual Cleaning - Window Cleanin
					</StyledNameCleaning>
					<StyledBarrAlt />
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Tenha seus móveis limpados com pano úmido
					</StyledDescription>
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Tenha seu chão limpado com àgua + produtos de limpeza{" "}
					</StyledDescription>
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Tenha sua janela limpada com àgua e produtos de limpeza
					</StyledDescription>
				</StyledContAll>
			)}
			{plan === "4" && (
				<StyledContAll>
					<StyledTitleCard>COMPLETE</StyledTitleCard>
					<StyledDescription>
						R$ 34,90/mês após o período da oferta
					</StyledDescription>
					<StyledNameCleaning>
						- Wet Manual Cleaning(with water) - Home Apliance Cleaning and
						Window Cleaning
					</StyledNameCleaning>
					<StyledBarra />
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Tenha seus móveis limpados com pano úmido
					</StyledDescription>
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Tenha seu chão limpado com àgua + produtos de limpeza{" "}
					</StyledDescription>
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Tenha sua janela limpada com àgua e produtos de limpeza
					</StyledDescription>
					<StyledDescription>
						<StyledReadyImage src="/readyIcon1.png" />
						Tenha seus eletrodomésticos limpados{" "}
					</StyledDescription>
				</StyledContAll>
			)}
		</Container>
	);
}
