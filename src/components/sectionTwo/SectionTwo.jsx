import styled from "styled-components";

const StyledContainer = styled.div`
	min-width: 100%;
	min-height: 100vh;
	background: #fafafa;
	z-index: 10;
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
 const StyledImage = styled.img`
  height: 9.3rem;
  width: 9.3rem;
  margin: 1.5rem 16rem;
`;

 const StyledImageEs = styled.img`
  height: 7.3rem;
  width: 7.3rem;
  margin: 2.5rem 16rem;
`;


const StyledTitle = styled.h2`
	color: ${(props) => props.theme.colors.primaryColor};
	display: flex;
	justify-content: center;
	padding-top: 80px;
	font-size: 37px;
	margin-bottom: 40px;
	@media (max-width: 756px) {
		font-size: 41px;
	}
`;

const GridHowItWorks = styled.div`
	display: grid;
	grid-template-columns: 400px 400px 400px;
	gap: 3rem;
	padding-bottom: 10rem;
	justify-content: center;
	@media (max-width: 1080px) {
		grid-template-columns: 400px 400px;
	}
	@media (max-width: 560px) {
		grid-template-columns: 400px;
	}
`;

const HowItWorksElement = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

const HowItWorksTitle = styled.h3`
	font-size: 2.2rem;
	margin-bottom: 4rem;
	color: ${(props) => props.theme.colors.primaryColor};
	@media (max-width: 756px) {
		font-size: 39px;
	}
`;

const HowItWorksDescription = styled.p`
	font-size: 1.6rem;
	font-weight: 400;
	color: ${(props) => props.theme.colors.delfblu};
	@media (max-width: 756px) {
		font-size: 28px;
	}
`;

const ImgALt = styled(StyledImage)`
	margin-top: 1.3rem;
`;

export default function SectionTwo() {
	return (
		<StyledContainer>
			<StyledTitle>How it works</StyledTitle>
			<GridHowItWorks>
				<HowItWorksElement>
					<StyledImage src="/gpsicon.png" alt="icone alfinete de marcação " />
					<HowItWorksTitle>1.Enter your region</HowItWorksTitle>
					<HowItWorksDescription>
						{" "}
						Enter your postcode to find cleaners available in your area{" "}
					</HowItWorksDescription>
				</HowItWorksElement>

				<HowItWorksElement>
					<StyledImage src="/bonecoIcon.png" alt="icone cleaner" />
					<HowItWorksTitle>
						2.Choose your cleaner and services plans
					</HowItWorksTitle>
					<HowItWorksDescription>
						{" "}
						Select your service plan ,choose a convenient cleaner based on your
						needs and assessed location.
					</HowItWorksDescription>
				</HowItWorksElement>

				<HowItWorksElement>
					<StyledImage src="/calendario.png" alt="iconeagenda" />
					<HowItWorksTitle>
						3.Choose your preferred date and send request
					</HowItWorksTitle>
					<HowItWorksDescription>
						{" "}
						Select the preferred date, time and frequency of your clean.
					</HowItWorksDescription>
				</HowItWorksElement>

				<HowItWorksElement>
					<StyledImageEs src="/lock.png" alt="icone computador com cadeado" />
					<HowItWorksTitle>4.Pay securely online</HowItWorksTitle>
					<HowItWorksDescription>
						{" "}
						Pay securely online and manage the booking via desktop or via the
						mobile app.
					</HowItWorksDescription>
				</HowItWorksElement>

				<HowItWorksElement>
					<ImgALt src="/checkIcon.png" />
					<HowItWorksTitle>5.Service confirmed</HowItWorksTitle>
					<HowItWorksDescription>
						{" "}
						Confirm that your service request data is correct.
					</HowItWorksDescription>
				</HowItWorksElement>

				<HowItWorksElement>
					<StyledImage src="/balon.png" />
					<HowItWorksTitle>6.Enjoy a spotless home</HowItWorksTitle>
					<HowItWorksDescription>
						{" "}
						Enjoy a sparkling home and provide your feedback for constant
						quality improvement.
					</HowItWorksDescription>
				</HowItWorksElement>
			</GridHowItWorks>
		</StyledContainer>
	);
}
