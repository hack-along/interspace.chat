import React from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

const HelpStyled = styled.nav`
	text-align: left;

	.Collapsible__trigger {
		color: black;
		background-color: #00ffbf;
		cursor: pointer;
		padding: 0.2rem;
		:hover {
			background-color: whitesmoke;
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
						to have a video call. We use it for conferences and gatherings{' '}
						<a href='https://interspace.chat'>Home</a>{' '}
					</StyledListItem>
				</ul>
				<p>Tech used:</p>
				<ul>
					<StyledListItem>
						Powered by{' '}
						<a href='https://meet.jit.si'>
							JitSi Open Source Video Conferencing
						</a>
					</StyledListItem>
					<StyledListItem>
						Made with 💝 by{' '}
						<a href='https://github.com/interspacechat'>interspace.chat</a>
					</StyledListItem>
				</ul>
				<p>Privacy:</p>
				<ul>
					<StyledListItem>Private Server</StyledListItem>
					<StyledListItem>Fully end to end encrypted</StyledListItem>
					<StyledListItem>
						Please don't write sensitive data into the chats.
					</StyledListItem>
					<StyledListItem>
						Please adhere to a general code of conduct or risk banning.
					</StyledListItem>
				</ul>
			</Collapsible>
		</HelpStyled>
	);
};

export default Help;
