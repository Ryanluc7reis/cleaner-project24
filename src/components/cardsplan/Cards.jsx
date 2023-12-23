import styled from "styled-components";
import Plans from "./Plans";

const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-around;
`;

const StyledCard = styled.div`
	border-radius: 10px;
	display: flex;
	background-color: #fff;
	align-items: center;
	text-align: start;
	width: 300px;
	height: 570px;
	margin-bottom: 100px;
	flex-direction: column;
	box-shadow:
		rgba(0, 0, 0, 0.19) 0px 2px 1px,
		rgba(68, 62, 62, 0.09) 0px 4px 2px,
		rgba(0, 0, 0, 0.09) 0px 8px 4px,
		rgba(0, 0, 0, 0.09) 0px 16px 8px,
		rgba(0, 0, 0, 0.09) 0px 32px 16px;
	@media (max-width: 426px) {
		width: 410px;
		height: 100%;
	}
	@media (max-width: 376px) {
		width: 410px;
		height: 100%;
	}
`;

export default function Cards({
	id,
	isActive,
	onClick,
	type,
	children,
	...props
}) {
	const cardColor = isActive ? "red" : "white";
	return (
		<Container>
			{type === "1" && (
				<StyledCard
					onClick={() => onClick(id)}
					style={{ backgroundColor: cardColor }}
					{...props}
				>
					<Plans plan="1" />
					{children}
				</StyledCard>
			)}
			{type === "2" && (
				<StyledCard
					onClick={() => onClick(id)}
					style={{ backgroundColor: cardColor }}
					{...props}
				>
					<Plans plan="2" />
					{children}
				</StyledCard>
			)}
			{type === "3" && (
				<StyledCard
					onClick={() => onClick(id)}
					style={{ backgroundColor: cardColor }}
					{...props}
				>
					<Plans plan="3" />
					{children}
				</StyledCard>
			)}
			{type === "4" && (
				<StyledCard
					onClick={() => onClick(id)}
					style={{ backgroundColor: cardColor }}
					{...props}
				>
					<Plans plan="4" />
					{children}
				</StyledCard>
			)}
		</Container>
	);
}
