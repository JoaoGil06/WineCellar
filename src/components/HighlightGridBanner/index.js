import React from 'react';
import { Container, GridItem } from './styles';
const HighlightGridBanner = ({ wines }) => {
	return (
		<Container>
			{wines.map((wine, index) => (
				<GridItem key={index}>
					<img src={wine.image} alt='wine' />
				</GridItem>
			))}
		</Container>
	);
};

export default HighlightGridBanner;
