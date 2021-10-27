import React from 'react';

import WinesBanner from '../../components/WinesBanner';
import WinesGrid from '../../components/WinesGrid';

import BottlesImage03 from '../../assets/4.jpg';
import BottlesImage04 from '../../assets/01.jpg';

import { Container } from './styles';

const RedWines = () => {
	return (
		<Container>
			<WinesBanner
				item={{
					image: BottlesImage03,
					title: 'Touriga Franca',
					description:
						'Nasce da vontade e do querer aliado a uma criteriosa seleçao em vindima das melhores uvas e parcelas de touriga franca',
				}}
			/>
			<WinesGrid
				wines={[
					{
						image: BottlesImage04,
						title: 'Reserva Tinto 2017',
						grapes: ['Touriga Nacional', 'Tinto Cão', 'Tinta Rouriz'],
					},
					{
						image: BottlesImage04,
						title: 'Reserva Tinto 2017',
						grapes: ['Touriga Nacional', 'Tinto Cão', 'Tinta Rouriz'],
					},
					{
						image: BottlesImage04,
						title: 'Reserva Tinto 2017',
						grapes: ['Touriga Nacional', 'Tinto Cão', 'Tinta Rouriz'],
					},
					{
						image: BottlesImage04,
						title: 'Reserva Tinto 2017',
						grapes: ['Touriga Nacional', 'Tinto Cão', 'Tinta Rouriz'],
					},
					{
						image: BottlesImage04,
						title: 'Reserva Tinto 2017',
						grapes: ['Touriga Nacional', 'Tinto Cão', 'Tinta Rouriz'],
					},
				]}
			/>
		</Container>
	);
};

export default RedWines;
