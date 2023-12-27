import styled from "styled-components";
import Plans from "./Plans";
import { Link } from 'react-scroll'

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
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
`;



export default function Cards({
	id,
	isActive,
	onClick,
	type,
	children,
	...props
}) {
	const cardColor = isActive ? "#0612c3ab" : "white";
	return (
		<Container >
			{(type === "1" || type === "2" || type === "3" || type === "4") && (
         <Link to="calendar" spy={true} smooth={true} offset={-100} duration={500}>
            <StyledCard
                onClick={() => onClick(id)}
                style={{ backgroundColor: cardColor }}
                {...props}
            >
                <Plans plan={type} />
                {children}
            </StyledCard>
         </Link>
      )}

{["1", "2", "3", "4"].map((plano, indice) => (
    type === "5" && (
        <StyledCard
            key={indice}
            {...props}
        >
            <Plans plan={plano} />
            {children}
        </StyledCard>
    )
))}
		</Container>
	);
}
