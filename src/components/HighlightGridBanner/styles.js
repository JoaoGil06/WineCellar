import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	gap: 1rem 1rem;
	grid-auto-flow: row;
`;

export const GridItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	img {
		flex-shrink: 0;
		min-width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
