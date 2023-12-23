import styled from "styled-components";
import ImageSectionOne from "./ImageSectionOne";
import Input from "../form/Input";
import Button from "../form/Button";
import Navbar from "../layout/Navbar";

import H2 from "../typography/H2";
import H5 from "../typography/H5";
import { useRouter } from "next/router";
import { useState } from "react";

const BoxShadow = styled.div`
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
	z-index: 10;
`;

const StyledContainer1 = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 340px;
	padding-bottom: 240px;
	z-index: 3;
	color: #fff;
	@media (max-width: 905px) {
		padding-left: 0;
		padding-bottom: 50px;
		align-items: center;
	}
	@media (max-width: 768px) {
		padding-left: 70px;
		padding-bottom: 100px;
	}
`;
const StyledH5 = styled.div`
	padding: 20px;
	margin-top: 25px;
`;
const StyledForm = styled.form`
	display: flex;
	gap: 40px;
	padding-top: 40px;
	padding-left: 20px;
`;

export default function SectionOne() {
	const router = useRouter();

	const [valor, setValor] = useState("");

	const handleInputChange = (event) => {
		setValor(event.target.value);
	};

	const handleSubmit = () => {
		if (valor.trim() !== "") {
			router.push(`/plansScreen?region=${encodeURIComponent(valor)}`);
		} else {
			console.error("O valor não pode estar vazio!");
		}
	};

	return (
		<ImageSectionOne>
			<BoxShadow>
				<Navbar />
				<StyledContainer1>
					<H2>Find Top Rated Cleaners!</H2>
					<StyledH5>
						<H5>• Change Your Cleaner at Anytime</H5>
						<H5>• Dedicated Customer Service</H5>
						<H5>• Liability Insured Up to £4M</H5>
					</StyledH5>
					<StyledForm>
						<Input
							placeholder="Enter your region"
							value={valor}
							onChange={handleInputChange}
						/>
						<Button type="button" onClick={handleSubmit} />
					</StyledForm>
				</StyledContainer1>
			</BoxShadow>
			{(module.exports = valor)}
		</ImageSectionOne>
	);
}
