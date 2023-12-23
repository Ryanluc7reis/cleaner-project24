import styled from "styled-components";
import Logo from "../../src/components/logo/Logo";
import { useState } from "react";
import Cards from "../../src/components/cardsplan/Cards";
import BasicDateCalendar from "../../src/components/calendario/Calendario";
import { useRouter } from "next/router";

const DateCalendarAlt = styled(BasicDateCalendar)`
	//background: linear-gradient(rgba(228, 228, 228, 1), rgba(202, 202, 202, 1));
	background: #3498db;
	font-size: 32rem;
	> div {
		font-size: 42rem;
		> .css-cyfsxc-MuiPickersCalendarHeader-labelContainer {
			color: #00ff00;
			font-size: 2rem;
			font-weight: 700;
		}
	}
	span {
		font-size: 16px;
		font-weight: 700;
		color: #5050b3;
	}
	button {
		color: purple;
		font-size: 14px;
		font-weight: 700;
		.MuiButtonBase-root {
		}
		> svg {
			background-color: black;
			color: #00ff00;
		}
		:hover {
			background-color: #5050b3;
		}
		:active {
			transition: ease-in-out;
			color: #00ff00;
			background-image: url("public/balon.png");
		}
	}
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: hidden;
`;
const LogoAlt = styled(Logo)`
	margin-left: 40px;
`;
const StyledLogin = styled.div`
	cursor: pointer;
	font-size: 24px;
	background: #56648f;
	padding: 15px 25px;
	border-radius: 10px;
	color: #fff;
	text-align: center;
	margin-right: 15px;
	font-weight: 600;
	transition: all 200ms ease-in-out;
	:hover {
		background-color: #677db7;
	}
`;
const FlexLogin = styled.div`
	display: flex;
	gap: 13px;
`;
const Barra = styled.div`
	width: 2px;
	height: 45px;
	margin-top: 7px;
	background-color: #ffffff;
`;
const StyledFlexNavBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #5cb2fdce;
	width: 100%;
	height: 100px;
`;
const CardsLogo = styled.img`
	margin-top: 8px;
`;
const FlexDivEtapas = styled.div`
	display: flex;
	flex-direction: column;
	//position: absolute;
	width: 100%;
`;
const DivEtapas = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #707272;
`;
const FlexEtapas = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 35px;
	gap: 4px;
`;
const Etapas = styled.h5`
	color: white;
	font-size: 16px;
`;
const SubEtapas = styled.h5`
	font-size: 15px;
	color: #ffffff58;
	font-weight: 700;
`;
const ProgressEtapas = styled.div`
	width: 100%;
	height: 5px;
	background: brown;
`;
const ContainerPlans = styled.div`
	background: #edededaf;
	width: 100%;
	height: auto;
`;
const TilteText = styled.h5`
	font-size: 23px;
	padding: 20px;
	color: #0101018e;
	text-align: center;
`;
const SubTitle = styled.p`
	font-size: 20px;
	padding-bottom: 40px;
	color: #0101014c;
	text-align: center;
`;
const FlexCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;
const CardsAlt = styled(Cards)`
	:hover {
		cursor: pointer;
		transition: all 0.1s ease-in-out;
		transform: scale(1.1);
	}
`;

export default function Plans(props) {
	const [activeCard, setActiveCard] = useState(null);
	const [cardValues, setCardValues] = useState({
		0: "Optional",
		1: "Basic",
		2: "Medium",
		3: "Complete",
	});
	const handleClick = (cardId) => {
		setActiveCard(cardId);
	};
	const router = useRouter();
	const { region } = router.query;


  
	return (
		<Container>
			<StyledFlexNavBar>
				<LogoAlt />
				<FlexLogin>
					<CardsLogo src="cardsLogo.png" height="45px" width="125px" />
					<Barra />
					<StyledLogin onClick={() => router.push("/login")}>Login</StyledLogin>
				</FlexLogin>
			</StyledFlexNavBar>
			<FlexDivEtapas>
				<DivEtapas>
					<FlexEtapas>
						<Etapas>{region}</Etapas>
						<SubEtapas>LOCATION</SubEtapas>
					</FlexEtapas>
					<Barra />
					<FlexEtapas>
						<Etapas>{cardValues[[activeCard]] || "-"}</Etapas>
						<SubEtapas>PLAN</SubEtapas>
					</FlexEtapas>
					<Barra />
					<FlexEtapas>
						<Etapas>Wednesday 23 December</Etapas>
						<SubEtapas>DATE</SubEtapas>
					</FlexEtapas>
					<Barra />
					<FlexEtapas>
						<Etapas>5 Hours</Etapas>
						<SubEtapas>DURATION</SubEtapas>
					</FlexEtapas>
					<Barra />
					<FlexEtapas>
						<Etapas>07:00 PM</Etapas>
						<SubEtapas>STARTING TIME</SubEtapas>
					</FlexEtapas>
				</DivEtapas>
				<ProgressEtapas />
			</FlexDivEtapas>
			<ContainerPlans>
				<TilteText>What plan do you need ?</TilteText>
				<SubTitle>Click on the plan you want</SubTitle>
				<FlexCards>
					<CardsAlt
						id={0}
						isActive={activeCard === 0}
						onClick={handleClick}
						type="1"
					/>
					<CardsAlt
						id={1}
						isActive={activeCard === 1}
						onClick={handleClick}
						type="2"
					/>
					<CardsAlt
						id={2}
						isActive={activeCard === 2}
						onClick={handleClick}
						type="3"
					/>
					<CardsAlt
						id={3}
						isActive={activeCard === 3}
						onClick={handleClick}
						type="4"
					/>
				</FlexCards>
				<DateCalendarAlt />
			</ContainerPlans>
		</Container>
	)};
