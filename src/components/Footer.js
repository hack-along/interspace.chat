import React from 'react';
import styled from 'styled-components';
import ShareButton from './ShareButton';

const FooterContainer = styled.div`
	background-color: #00ffbf;
	min-height: 5vh;
	margin-top: 88vh;
	padding: 1rem;
	a {
		color: black;
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<a href='mailto:info@parallele.at'>info@parallele.at</a>
			<ShareButton />
		</FooterContainer>
	);
};

export default Footer;
