import React from 'react';

import { Container, NavbarLogo, NavbarMenu } from './styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Container>
			<NavbarLogo>
				<Link to='/'>WineCellar</Link>
			</NavbarLogo>
			<NavbarMenu>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/wines/red'>Tintos</Link>
					</li>
					<li>
						<Link to='/'>Brancos</Link>
					</li>
					<li>
						<Link to='/'>Sobre Nós</Link>
					</li>
					<li>
						<Link to='/'>Contactos</Link>
					</li>
				</ul>
			</NavbarMenu>
		</Container>
	);
};

export default Navbar;
