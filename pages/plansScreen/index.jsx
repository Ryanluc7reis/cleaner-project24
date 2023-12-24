import styled from "styled-components";
import Logo from "../../src/components/logo/Logo";
import { useState } from "react";
import Cards from "../../src/components/cardsplan/Cards";
import BasicDateCalendar from "../../src/components/calendario/Calendario";
import { useRouter } from "next/router";
import Button from "../../src/components/form/Button"
import React from "react";

const DateCalendarAlt = styled(BasicDateCalendar)`
	//background: linear-gradient(rgba(228, 228, 228, 1), rgba(202, 202, 202, 1));
	background: #3498db;
	font-size: 32rem;
	box-shadow:
		rgba(0, 0, 0, 0.19) 0px 2px 1px,
		rgba(68, 62, 62, 0.09) 0px 4px 2px,
		rgba(0, 0, 0, 0.09) 0px 8px 4px,
		rgba(0, 0, 0, 0.09) 0px 16px 8px,
		rgba(0, 0, 0, 0.09) 0px 32px 16px;;
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
const BarraAlt = styled(Barra)`
background-color: #80808050;
height: 37px;
margin-left: 13px;
margin-top: 0px;
`
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
const ContainerTimes = styled.div`
	background: #edededaf;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 55vh;
`;
const ContainerCalender = styled.div`
height: 70vh;
`
const ContainerButton = styled.div`
height: 20vh;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`
const TilteText = styled.h5`
	font-size: 23px;
	padding: 25px;
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
const SelectHour = styled.div`
	height: 70px;
	width: 440px;
	margin: 15px;
	
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: rgb(255, 255, 255);
	border-radius: 10px;
	box-shadow:
		rgba(0, 0, 0, 0.19) 0px 2px 1px,
		rgba(68, 62, 62, 0.09) 0px 4px 2px,
		rgba(0, 0, 0, 0.09) 0px 8px 4px,
		rgba(33, 32, 32, 0.08) 0px 16px 8px,
		rgba(8, 8, 8, 0.08) 0px 20px 16px,
;`
const ButtonAlt = styled(Button)`
	 background-color: ${(props) => props.theme?.colors?.ultravio || 'defaultColor'};
	width: 400px;
	border-radius: 25px;
`
const Seta = styled.img`
	padding: 5px;
	cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isDisabled ? "0.5" : "1")};
  background-color: ${(props) => (props.isDisabled ? "#80808050" : "transparent")};
  transition: background-color 0.5s;

`
const FlexSeta = styled.div`
	display: flex;
	align-items: center;
`
const OptionHour = styled.ol`
font-size: 18px;
font-weight: 700;
display: flex;
color: #020837 ;
`
const Hours = styled.p`
display: flex;
font-size: 12px;
;`
const ContHour = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: ${(props) => (props.isSelected ? "#2587A5" : "rgb(255, 255, 255)")};
gap: 3px;
transition: 0.5s;
padding: 5px;
border-radius: 10px;
cursor: pointer;
`

const listHours = [ '2','2.5','3','3.5','4']
const listHours2 =['5','5.5','6','7','8']
export default function HomePlansScreen(props) {
	const [listHour2, setListHour2] = useState(null)
	const [isRightArrowDisabled, setRightArrowDisabled] = useState(false);
	const [isLeftArrowDisabled, setLeftArrowDisabled] = useState(true);
	const [selectedHour, setSelectedHour] = useState(null);
	const [selectedDate, setSelectedDate] = useState(null);
	const [activeCard, setActiveCard] = useState(null);
	const [cardValues, setCardValues] = useState({
		0: "Optional",
		1: "Basic",
		2: "Medium",
		3: "Complete",
	});
	
	const handleClickCard = (cardId) => {
		setActiveCard(cardId);
	};
	const handleClickHour = (hour) => {
		setSelectedHour((prevHour) => (prevHour === hour ? null : hour ));
	};
	const handleClickSetaD = () => {
		setLeftArrowDisabled(false)
		setRightArrowDisabled(true) 
		 setListHour2(!listHour2)
	}
		
	const handleClickSetaE = () => {
		setRightArrowDisabled(false)
		setLeftArrowDisabled(true) 
		setListHour2(!listHour2) 

	}
	
	const handleDateChange = (date) => {
		let getdate = `${date.$d.toDateString()} `
    console.log('Data selecionada:', date);
    setSelectedDate( getdate);
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
						<Etapas>{selectedDate || '-'}</Etapas>
						<SubEtapas>DATE</SubEtapas>
					</FlexEtapas>
					<Barra />
					<FlexEtapas>
						<Etapas>{selectedHour }</Etapas>
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
						onClick={handleClickCard}
						type="1"
					/>
					<CardsAlt
						id={1}
						isActive={activeCard === 1}
						onClick={handleClickCard}
						type="2"
					/>
					<CardsAlt
						id={2}
						isActive={activeCard === 2}
						onClick={handleClickCard}
						type="3"
					/>
					<CardsAlt
						id={3}
						isActive={activeCard === 3}
						onClick={handleClickCard}
						type="4"
					/>
				</FlexCards>
			</ContainerPlans>
			<ContainerCalender>
					<TilteText>When should your first booking be?</TilteText>
					<DateCalendarAlt onChange={handleDateChange} />
			</ContainerCalender>
			<ContainerTimes>
					<TilteText>How long do you need your cleaner for?</TilteText>
					<FlexSeta>
							<Seta 
							src='setaEsquerda.png'
							height="45px"
							width="45px"
							onClick={handleClickSetaE}
              isDisabled={isLeftArrowDisabled }
							
								 />
<SelectHour>
            {isRightArrowDisabled
              ? listHours2.map((item, index) => (
                  <ContHour
                    key={index}
                    isSelected={selectedHour === `${item} hours`}
                    onClick={() => handleClickHour(`${item} hours`)}
                  >
                    <OptionHour>{item}</OptionHour>
                    <Hours>hours</Hours>
                  </ContHour>
                ))
              : listHours.map((item, index) => (
                  <ContHour
                    key={index}
                    isSelected={selectedHour === `${item} hours`}
                    onClick={() => handleClickHour(`${item} hours`)}
                  >
                    <OptionHour>{item}</OptionHour>
                    <Hours>hours</Hours>
                  </ContHour>
                ))}
          </SelectHour>
							<Seta 
								src='setaDireita.png'
							 	height="45px"
							  width="45px"
								onClick={ handleClickSetaD}
                isDisabled={isRightArrowDisabled}
								 />
					</FlexSeta>
					<TilteText>Starts at</TilteText>
			</ContainerTimes>
			<ContainerButton>
				<ButtonAlt valor='NEXT' />
			</ContainerButton>
			
		</Container>
	)};
