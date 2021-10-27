import React from 'react';
import HighlightBanner from '../../components/HighlightBanner';
import HighlightGridBanner from '../../components/HighlightGridBanner';

import BottlesImage01 from '../../assets/01.jpg';
import BottlesImage02 from '../../assets/02.jpg';
import BottlesImage03 from '../../assets/2.jpg';
import { Container } from './styles';

const Home = () => {
	return (
		<Container>
			<HighlightBanner
				item={{
					image: BottlesImage01,
					title: 'Touriga Franca',
					description:
						'Nasce da vontade e do querer aliado a uma criteriosa seleçao em vindima das melhores uvas e parcelas de touriga franca',
					position: 'right',
				}}
			/>
			<HighlightBanner
				item={{
					image: BottlesImage02,
					title: 'Touriga Nacional',
					description:
						'Nasce da vontade e do querer aliado a uma criteriosa seleçao em vindima das melhores uvas e parcelas de touriga nacional',
					position: 'left',
				}}
			/>

			<HighlightGridBanner
				wines={[{ image: BottlesImage03 }, { image: BottlesImage03 }]}
			/>
		</Container>
	);
};

export default Home;
