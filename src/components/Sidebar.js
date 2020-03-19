import React from 'react';
import styled from 'styled-components';
import ShareButton from './ShareButton';
import InterspaceLogo from '../img/interspace-logo.png';

import About from './About';

const SidebarContainer = styled.div`
	position: fixed;
	top: 50px;
	left: 80px;
	display: grid;

	grid-template-rows: auto auto;
	padding: 1rem;
	justify-content: left;
	z-index: 1;

	:hover {
		opacity: 1;
	}
`;

const Logo = styled.img`
	width: auto;
	height: 66px;
`;

const Logotext = styled.h2`
	align-self: flex-end;
`;

const Logolink = styled.a`
	display: flex;
	width: 100px;
	text-decoration-line: none;
	padding-bottom: 2rem;
`;

const Sidebar = () => {
	return (
		<SidebarContainer>
			<Logolink href='/'>
				<Logo src={InterspaceLogo} alt='Logo' />{' '}
				<Logotext>interspace.chat</Logotext>
			</Logolink>
			<About />
		</SidebarContainer>
	);
};

export default Sidebar;
