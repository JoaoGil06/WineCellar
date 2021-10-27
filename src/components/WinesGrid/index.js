import React from 'react';
import { Container, GridItem, Info, Button } from './styles';
const WinesGrid = ({ wines }) => {
	const renderInfo = ({ title, grapes }) => {
		const grapesString = grapes.join(', ');

		return (
			<Info>
				<h1>{title}</h1>
				<p>{grapesString}</p>
				<Button>Ver Mais</Button>
			</Info>
		);
	};

	return (
		<Container>
			{wines.map((wine, index) => (
				<GridItem key={index}>
					<img src={wine.image} alt='wine' />
					{renderInfo(wine)}
				</GridItem>
			))}
		</Container>
	);
};

export default WinesGrid;
