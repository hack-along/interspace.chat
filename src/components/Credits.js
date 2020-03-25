import React from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

import Titanembeds from '../img/titanembeds.png';
import Jitsilogo from '../img/jitsi.png';

import ShareButton from './ShareButton';

const CreditsStyled = styled.nav`
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

const StyledListLink = styled.li`
	list-style-type: none;
	padding: 1rem;
	display: grid;
	grid-template-columns: auto auto;
	align-items: center;
	grid-gap: 0.5rem;
`;

const Credits = () => {
	return (
		<CreditsStyled>
			<Collapsible trigger='Credits'>
				<p>Art used:</p>
				<ul>
					<StyledListItem>
						"Metatron Menu" forked from{' '}
						<a href='https://github.com/MGrudule/metatron'>@MGrudule</a>{' '}
					</StyledListItem>
					<StyledListItem>
						"Space Image" by{' '}
						<a href='https://www.pexels.com/photo/cluster-of-stars-1341279/'>
							Kai Pilger from Pexels
						</a>{' '}
					</StyledListItem>
				</ul>
				<hr />
				<p>Tech used:</p>
				<ul>
					<StyledListLink>
						<a href='https://meet.jit.si'>
							<img src={Jitsilogo} width='30px' alt='Jitsi logo'></img>
						</a>
						<a href='https://meet.jit.si'>
							Video Conferencing - JitSi Open Source
						</a>
					</StyledListLink>
					<StyledListLink>
						<a href='https://titanembeds.com'>
							<img src={Titanembeds} width='30px' alt='Titanembeds logo'></img>
						</a>
						<a href='https://titanembeds.com'>
							Chat integration - Titan Embeds
						</a>
					</StyledListLink>
				</ul>
				<hr />
				<ul>
					<StyledListItem>
						Made with{' '}
						<span role='img' aria-label='heart'>
							💝
						</span>{' '}
						by <a href='https://github.com/interspacechat'>interspace.chat</a>
					</StyledListItem>
					<StyledListItem>
						Donate to our{' '}
						<a href='https://gitcoin.co/grants/516/interspacechat'>
							Gitcoin Grant
						</a>{' '}
					</StyledListItem>
					<StyledListItem>
						Spread the word
						<ShareButton />
					</StyledListItem>
				</ul>
			</Collapsible>
		</CreditsStyled>
	);
};

export default Credits;
