import styled from 'styled-components';

export const Container = styled.div`
	height: 75vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	img {
		flex-shrink: 0;
		min-width: 100%;
		height: 100%;
	}
`;

export const Info = styled.div`
	position: absolute;
	h1 {
		font-size: 4rem;
	}

	p {
		font-size: 1.2rem;
		width: 35rem;
	}
	${({ position }) => (position === 'right' ? `right: 15vw;` : `left: 15vw`)}
`;

export const Button = styled.button`
	background: transparent;
	color: #fff;
	padding: 0.5rem 1rem;
	font-weight: 600;
	font-family: 'Open Sans';
	font-size: 1.1rem;
	transition: 0.5s;
	border: 1px solid #fff;
	border-radius: 5px;
	margin-top: 2rem;
	&:hover {
		cursor: pointer;
		background: #fff;
		color: #222;
	}
	&:focus {
		outline: none !important;
	}
`;
