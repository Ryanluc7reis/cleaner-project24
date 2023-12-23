import styled, { keyframes } from "styled-components";
import Button from "@/src/components/form/Button";
import Input from "@/src/components/form/Input";
import Logo from "../src/components/logo/Logo";
import { useState } from "react";
import { useRouter } from "next/router";
const fadeIn = keyframes`
  from {
    opacity: 0;
   
  }
  to {
    opacity: 6;
    
  }
`;
const ButtonAlt = styled(Button)`
	margin-top: 23px;
	margin-bottom: 15px;
	box-shadow:
		2px 2px 2px blueviolet,
		-2px -2px 2px blueviolet;
	@media (max-width: 1025px) {
		padding: 12px 17px;
	}
	@media (max-width: 430px) {
		font-size: 16px;
		margin-top: 17px;
	}
	@media (max-width: 900px) {
		font-size: 16px;
		margin-top: 13px;
	}
`;
const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #223677;
`;

const Titulo = styled.p`
	color: black;
	font-weight: 600;
	font-size: 22px;
	text-align: center;
	margin: 20px;
`;

const InputAlt = styled(Input)`
	box-shadow:
		2px 2px 2px #5176da,
		-2px -2px 2px #5176da;
	border-color: #5176da;
	font-size: 15px;
	@media (max-width: 1025px) {
		padding: 10px 17px;
	}
	@media (max-width: 900px) {
		padding: 6px 13px;
	}
`;
const FlexBoxFormulario = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Formulario = styled.div`
	background-color: #cccdee;
	border-radius: 8px;
	height: 560px;
	width: 360px;
	box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	transform: translate(0%, 48%);
	@media (max-width: 1025px) {
		height: 493px;
		width: 300px;
		margin-top: 20px;
	}
	@media (max-width: 900px) {
		height: 450px;
		width: 300px;
		margin-top: 28px;
	}
	@media (max-width: 426px) {
		margin-top: 35px;
	}
	@media (min-width: 320px) {
		transform: translate(0%, 45%);
	}
`;
const StyledLogin = styled.a`
	cursor: pointer;
	font-size: 24px;
	background: #56648f;
	padding: 15px 40px;
	border-radius: 10px;
	color: #fff;
	text-align: center;
	font-weight: 600;
	transition: all 200ms ease-in-out;
	:hover {
		background-color: #677db7;
	}
	@media (max-width: 900px) {
		padding: 9px;
	}
`;
const StyledFlexNavBar = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	@media (max-width: 900px) {
		flex-direction: column;
		align-items: center;
	}
`;
const BoxCleaning = styled.div`
	height: 117px;
	width: 245px;
	background-color: white;
	border-radius: 3px;
	display: ${(props) => (props.show ? "flex" : "none")};
	transform: translate(0%, 51%);
	position: absolute;
	bottom: 50%;
	animation: ${fadeIn} 0.1s ease-in-out;
	gap: 5px;
	flex-direction: column;
	align-items: center;
	@media (max-width: 900px) {
		transform: translate(0%, 67%);
	}
`;
const TypesCleaning = styled.p`
	font-size: 14px;
	margin-left: 4px;
	cursor: pointer;
	width: 100%;
	:hover {
		border-radius: 3px;
		background-color: #5757f5c4;
	}
`;
const Cadastro = () => {
	const router = useRouter();
	const [show, setShow] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const updateInput = (clickedWord) => {
		setInputValue(clickedWord);
		setShow(!show);
	};
	return (
		<Container>
			<StyledFlexNavBar>
				<Logo />
				<StyledLogin onClick={() => router.push("/login")}>Login</StyledLogin>
			</StyledFlexNavBar>
			<FlexBoxFormulario>
				<Formulario>
					<Titulo>Register as cleaner</Titulo>
					<InputAlt label="Full Name" placeholder="FULLNAME" required />
					<InputAlt
						value={inputValue}
						onClick={() => setShow(!show)}
						label="Type Of Cleaning"
						placeholder="TYPE OF CLEANING"
						required
					/>
					<BoxCleaning show={show}>
						<TypesCleaning onClick={() => updateInput("Wet manual cleaning")}>
							Wet manual cleaning
						</TypesCleaning>
						<TypesCleaning onClick={() => updateInput("Window cleaning")}>
							Window cleaning
						</TypesCleaning>
						<TypesCleaning
							onClick={() => updateInput("Home apliance cleaning")}
						>
							Home apliance cleaning
						</TypesCleaning>
						<TypesCleaning
							onClick={() => updateInput("Wet manual cleaning (water)")}
						>
							Wet manual cleaning (with water)
						</TypesCleaning>
						<TypesCleaning onClick={() => updateInput("Dry cleaning")}>
							Dry cleaning
						</TypesCleaning>
					</BoxCleaning>
					<InputAlt label="E-mail" placeholder="EMAIL  ADDRESS" required />
					<InputAlt label="Address" placeholder="ADDRESS" required />
					<InputAlt label="Phone Number" placeholder="PHONE NUMBER" />
					<ButtonAlt valor={"Register"} />
				</Formulario>
			</FlexBoxFormulario>
		</Container>
	);
};

export default Cadastro;
