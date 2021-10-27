import React from 'react';

import { Container, Info, Button } from './styles';

const WinesBanner = ({ item }) => {
	const { image, title, description } = item;

	const renderInfo = () => (
		<Info>
			<h1>{title}</h1>
			<p>{description}</p>

			<Button>Quero saber mais</Button>
		</Info>
	);

	return (
		<Container>
			<img src={image} alt='wine' />
			{renderInfo()}
		</Container>
	);
};

export default WinesBanner;
