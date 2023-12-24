import styled, {keyframes} from "styled-components";
import Logo from "../../src/components/logo/Logo";
import { useEffect, useState } from "react";
import Cards from "../../src/components/cardsplan/Cards";
import BasicDateCalendar from "../../src/components/calendario/Calendario";
import { useRouter } from "next/router";
import Button from "../../src/components/form/Button"
import React from "react";
import Plans from "../../src/components/cardsplan/Plans";
import css from "styled-jsx/css";
const fadeIn = keyframes`
  from {
    opacity: 0;
   
  }
  to {
    opacity: 6;
    
  }
`;
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
margin-left: 8px;
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
	position: sticky;
  top: 0;
  z-index: 100;
	//padding-top:9.9rem;

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
	height: 5px;
	background: brown;
`;
const ContainerPlans = styled.div`
	background: #edededaf;
	width: 100%;
	height: auto;
	//margin-top:84px;
`;
const ContainerTimes = styled.div`
	background: #edededaf;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 65vh;
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
	background-color: ${(props) => (props.isDisabled ? 'grey' : props.theme.colors.ultravio )};
	width: 400px;
	border-radius: 25px;
	cursor: ${(props) => (props.isDisabled ? 'default' : 'pointer')};
	:hover{
		background-color: ${(props) => (props.isDisabled ? 'grey' : props.theme.colors.ultravio)};
	}
`
const Seta = styled.img`
	padding: 3px;
	cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isDisabled ? "0.5" : "1")};
  background-color: ${(props) => (props.isDisabled ? "#80808050" : "transparent")};
	border-radius: 10px;
  transition: background-color 0.5s;
`
const FlexSeta = styled.div`
	display: flex;
	align-items: center;
`
const OptionHour = styled.ol`
font-size: 18px;
font-weight: 700;
margin-left: 7px;
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
background-color: ${(props) => (props.isSelected ? "#2587A5" : "rgb(255, 255, 255)")};
gap: 3px;
transition: 0.5s;
padding: 5px;
border-radius: 10px;
cursor: pointer;
`
const InputHour = styled.div`
  width: 110px;
	font-size: 15px;
	height:45px;
	display: flex;
	justify-content: center;
  border: 1px solid  ${props => props.theme.colors.inputBorder};
  background-color: ${props => props.theme.colors.inputBackground};
  align-items: center;
  border-radius : 10px;
	box-shadow:
		2px 2px 2px #5176da,
		-2px 2px 2px #5176da;
	border-color: #5176da;
  :hover {
		cursor: pointer;
		inset-inline: none;
  }

`
const BoxHours = styled.div`
	height: 490px;
	width: 600px;
	background-color: #e3e7fd;
	border-radius: 3px;
	display: ${(props) => (props.showBoxHour ?  "grid"  : 'none' )};
	transform: translate(-36%, 5%);
	grid-template-columns: 150px 150px 150px 150px;
	position: absolute;
	align-items: center;
	left: 44%;
	animation: ${fadeIn} 0.1s ease-in-out;
	gap: 2px;
	p{
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
const TypesHours= styled.p`
	font-size: 14px;
	text-align: center;
	margin-right: 9px;
	height: 50%;
	cursor: pointer;
	:hover {
		border-radius: 10px;
		background-color: #5757f5c4;
	}
`;
const listHours = [ '2','2.5','3','3.5','4']
const listHours2 =['5','5.5','6','7','8']
const ListStartHours = [ 	
	'07:00 AM','07:30 AM','08:00 AM','08:30 AM','09:00 AM',
	'09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM',
	'12:00 AM','12:30 AM','01:00 PM','01:30 PM','02:00 PM',
	'02:30 PM','03:00 PM','03:30 PM','04:00 PM','04:30 PM',
	'05:00 PM','05:30 PM','06:00 PM','06:30 PM','07:00 PM',]

	export default function HomePlansScreen({id, onClick}) {
	const [inputUpdateHour, setinputUpdateHour] = useState('')
	const [showBoxHour, setshowBoxHour] = useState(false)
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
	const [widthValues, setWidthValues] = useState({
				card: '18%',
	 			regionValue: '35%',
				selectedDate: '59%',
	 			selectedHour: '80%',
	 			inputUpdateHour: '100%',
	});
	const updateInputHour = (clickedWord) => {
		setinputUpdateHour(clickedWord);
		setshowBoxHour(!showBoxHour);
		console.log(showBoxHour)
	};
	
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
    setSelectedDate( getdate);
  };
	const router = useRouter();
	const { region } = router.query;
	const regionValue = region || "Default Region";
	 const updateWidthValues = () => {
		// console.log('cardValues:', cardValues);
		// console.log('regionValue:', regionValue);
		// console.log('selectedDate:', selectedDate);
		// console.log('selectedHour:', selectedHour);
		// console.log('inputUpdateHour:', inputUpdateHour);
	 	console.log('Update width values called');
	 	if (cardValues && regionValue && selectedDate && selectedHour && inputUpdateHour) {
	 	 console.log('All conditions met');
			setWidthValues({
				card: '18%',
	 			regionValue: '35%',
				selectedDate: '59%',
	 			selectedHour: '80%',
	 			inputUpdateHour: '100%',
				 
	 		});
			
	 	} else {
	 		console.log('Some condition not met');
	 		// Handle the case when not all conditions are met
	 	}
	 };

	// Call the updateWidthValues function when any of the conditions change
	 useEffect(() => {
	  try {
			console.log('Calling updateWidthValues');
			updateWidthValues();
			console.log('UpdateWidthValues executed successfully');
		} catch (error) {
			console.error('Error in updateWidthValues:', error);
		}
	 }, [cardValues, regionValue, selectedDate, selectedHour, inputUpdateHour]);
	
	

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
						<Etapas >{region}</Etapas>
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
						<Etapas>{selectedHour || '-' }</Etapas>
						<SubEtapas>DURATION</SubEtapas>
					</FlexEtapas>
					<Barra />
					<FlexEtapas>
						<Etapas	>{inputUpdateHour || '-'}</Etapas>
						<SubEtapas>STARTING TIME</SubEtapas>
					</FlexEtapas>
				</DivEtapas>
				<ProgressEtapas 
					style={{width: widthValues.card}}
				 />
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
								<React.Fragment key={index}> {/*isso aqui tem que receber key ----------------------------*/}
                  <ContHour
                    key={index}
                    isSelected={selectedHour === `${item} hours`}
                    onClick={() => handleClickHour(`${item} hours`)}
                  >
                    <OptionHour>{item}</OptionHour>
                    <Hours>hours</Hours>
                  </ContHour>
									{index < 4 ? <BarraAlt /> : null} 
								</React.Fragment>
                ))
              : listHours.map((item, index) => (
							<React.Fragment key={index}> {/*isso aqui tem que receber key  -----------------------------*/}
                  <ContHour
                    key={index}
                    isSelected={selectedHour === `${item} hours`}
                    onClick={() => handleClickHour(`${item} hours`)}
                  >
                    <OptionHour>{item}</OptionHour>
                    <Hours>hours</Hours>									
                  </ContHour>
									{index < 4 ? <BarraAlt /> : null} 
								</React.Fragment>
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
					<SubTitle>Click and choose your startint time</SubTitle>
					<InputHour onClick={() => setshowBoxHour(!showBoxHour)}>{inputUpdateHour || '-'}</InputHour>
					<BoxHours showBoxHour={showBoxHour} >
						{ListStartHours.map((item,indice) => (
									<TypesHours	
									key={indice}
									onClick={() => updateInputHour(`${item} `)}>{item}</TypesHours>					
						))}
					</BoxHours>
			</ContainerTimes>
			<ContainerButton>
				<ButtonAlt
						onClick={(f) => {
							console.log('ok')}
						}
						isDisabled={(cardValues && region && selectedDate && selectedHour && inputUpdateHour) ? false : true}
						valor='NEXT'
				/>
			</ContainerButton>
			
		</Container>
	)};
