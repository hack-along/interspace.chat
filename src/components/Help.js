import React from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

const HelpStyled = styled.nav`
	text-align: left;

	.Collapsible__trigger {
		color: black;
		background-color: whitesmoke;
		cursor: pointer;
		padding: 0.2rem;
		:hover {
			background-color: #00ffbf;
		}
	}
	.Collapsible__contentOuter {
		max-width: 300px;

		:hover {
			.Collapsible__contentInner {
			}
		}
	}
	.Collapsible__contentInner {
		padding: 0.5rem;

		a {
			color: #00ffbf;
		}
	}
`;

const StyledListItem = styled.li`
	list-style-type: none;
	padding: 1rem;
`;

const Help = () => {
	return (
		<HelpStyled>
			<Collapsible trigger='Help'>
				<p>General usage:</p>
				<ul>
					<StyledListItem>
						This website is making it easy for users to meet in the same rooms
						to have a video call. <br></br>We use it for conferences and
						gatherings <a href='https://interspace.chat'>Home</a>{' '}
					</StyledListItem>
				</ul>
				<p>Textchat:</p>
				<ul>
					<StyledListItem>
						The text chat can be used by registering on the{' '}
						<a href='https://messenger.interspace.chat'>Rocketchat server</a>
					</StyledListItem>
				</ul>
			</Collapsible>
		</HelpStyled>
	);
};

export default Help;
