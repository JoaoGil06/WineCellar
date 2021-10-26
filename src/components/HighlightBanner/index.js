import React from 'react';

import { Container, Info, Button } from './styles';

const HighlightBanner = ({ item }) => {
	const { image, title, description, position } = item;

	return (
		<Container>
			<img src={image} alt='wine' />
			<Info position={position}>
				<h1>{title}</h1>
				<p>{description}</p>

				<Button>Quero saber mais</Button>
			</Info>
		</Container>
	);
};

export default HighlightBanner;
