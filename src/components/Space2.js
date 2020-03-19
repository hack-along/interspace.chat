import React, { Fragment, useContext, useState } from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import { FloatingSpaceContext } from '../contexts/FloatingSpaceContext';
import { HouseContext } from '../contexts/HouseContext';
import { SpaceContext } from '../contexts/SpaceContext';

import Room from './Room';
import JitsiInstanceMobile from './integrations/JistiInstanceMobile';

import { RoomNames } from '../utils/constants';
import Logo from '../img/interspace-logo.png';

const portalStyle = {
	marginTop: '10px'
};

const Headline = styled.h6`
	color: black;
	font-weight: 600;
	font-size: 1.3rem;
	padding: 1rem;

	a {
		font-weight: 100;
		color: black;
		background-color: #00ffbf;
		text-decoration: underline;
	}

	@media (max-width: 600px) {
		background-color: whitesmoke;
	}
`;

const SpaceSelector = styled.nav`
	padding-bottom: 1rem;
	min-height: 100vh;
	width: 100%;

	@media (max-width: 600px) {
		background-color: black;
		padding: 0px;
		min-height: 10vh;
	}
`;

const SpaceInfo = styled.div`
	font-size: 2rem;
	color: black;
	padding-bottom: 7rem;
`;

const Descripton = styled.div`
	position: absolute;
	top: 0px;
	width: 100%;
	background-color: #00ffbf;
	z-index: 1;
	margin: 0px;
	font-size: 0.8rem;
	padding-bottom: 0.4rem;
	p {
		padding: 0.5rem;
		margin: 0px;
	}

	a {
		padding: 0px;
	}
`;

const CurrentSpace = styled.span`
	color: #111111;
`;

const Disclaimer = styled.div`
	position: relative;
	top: 800px;
	background: unset;
`;

const Watermark = styled.div`
	position: relative;
	top: 770px;
	background: unset;
	width: 260px;
	display: flex;
	flex-direction: column;
	margin: auto;
`;

const SpaceWindowInfo = styled.p`
	position: relative;
	top: 790px;
	font-size: 2rem;
`;

const NewRoomLink = styled.a`
	font-weight: 100;
	font-size: 1rem;
	text-decoration-color: #555555;
`;

const MobileContainer = styled.div`
	background: black;
	justify-content: center;
`;

const MobileSelectorContainer = styled.div`
	background: black;
	box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0);
	justify-content: center;
	display: grid;
	grid-template-columns: auto auto auto;
	grid-gap: 0.2rem;
`;

const Space = () => {
	const { currentFloatingSpaces, setFloatingSpaces } = useContext(
		FloatingSpaceContext
	);
	const { currentSpace } = useContext(SpaceContext);
	// const [modalOpen, setModalOpen] = useState(true);
	const launchFloatingSpace = floatingSpace => {
		let resultantSpaces = null;
		if (currentFloatingSpaces && currentFloatingSpaces.length > 0) {
			if (currentFloatingSpaces.indexOf(floatingSpace) > -1) {
				resultantSpaces = currentFloatingSpaces;
			} else if (RoomNames.indexOf(floatingSpace) > -1) {
				let replaceIndex;
				for (let instance of RoomNames) {
					if (currentFloatingSpaces.indexOf(instance) > -1) {
						replaceIndex = currentFloatingSpaces.indexOf(instance);
					}
				}
				if (replaceIndex > -1) {
					let spliceJitsiDuplicates = [...currentFloatingSpaces]; // Prepare for splice
					spliceJitsiDuplicates.splice(replaceIndex, 1, floatingSpace);
					resultantSpaces = [...spliceJitsiDuplicates];
				} else {
					resultantSpaces = [...currentFloatingSpaces, floatingSpace];
				}
			} else {
				resultantSpaces = [...currentFloatingSpaces, floatingSpace];
			}
		} else {
			resultantSpaces = [floatingSpace];
		}
		setFloatingSpaces(resultantSpaces);
	};

	const displayJoinedSpaces = floatingSpaceWindows => {
		let windowsWithoutPlaceholders = floatingSpaceWindows.filter(item => item);
		if (windowsWithoutPlaceholders.length > 0) {
			if (windowsWithoutPlaceholders.length > 2) {
				let nameCount = windowsWithoutPlaceholders.length;
				return (
					windowsWithoutPlaceholders.slice(0, nameCount - 2).join(', ') +
					', ' +
					windowsWithoutPlaceholders.slice(nameCount - 2, nameCount).join(' & ')
				);
			} else {
				return windowsWithoutPlaceholders.join(' & ');
			}
		} else {
			return null;
		}
	};

	return (
		<SpaceSelector>
			<BrowserView>
				{/*modalOpen && (
					<div id='myModal' class='modal'>
						<div class='modal-content'>
							<img src={Logo} alt='logo' className='modal_logo'></img>
							<p className='modal_text'>
								Genieße die lauschige Atmosphäre in unserer Taverne.
							</p>
							<p className='modal_text'>
								Setz dich an einen Tisch der Dir zusagt.
							</p>
							<p className='modal_text'>
								Bevorzugt Chrome, screen sharing benötigt die Jitsi Chrome
								Extension.
							</p>
							<p className='modal_text'>
								Die Chat logs sind nicht öffentlich, aber werden bei Dir lokal
								gespeichert, bitte schreibe keine sensitiven Daten in den Chat.
							</p>
							<button
								onClick={() => setModalOpen(false)}
								className='modal-close'>
								Ich verstehe
							</button>
						</div>
					</div>
				)*/}
				<span>
					<Headline>
						Welcome to{' '}
						<a
							href='https://interspace.chat'
							target='_blank'
							rel='noopener noreferrer'
							style={{ textDecoration: 'none' }}>
							Interspace.Chat
						</a>
					</Headline>
					{/*
        <span>
          Come to the chat on{" "}
          <a href="https://t.me/intercon13" target="_blank">
            Telegram
          </a>
        </span>
        */}
					<SpaceInfo>
						{displayJoinedSpaces(currentFloatingSpaces) ? (
							<Fragment>
								Du bist beim{' '}
								<CurrentSpace>
									{displayJoinedSpaces(currentFloatingSpaces)}
								</CurrentSpace>
								!
							</Fragment>
						) : (
							<Fragment>
								<div> Click a portal below</div>
								<div>
									<NewRoomLink href='https://portal.interspace.chat'>
										or open a new room
									</NewRoomLink>
								</div>
							</Fragment>
						)}
					</SpaceInfo>
				</span>

				<div className='map-container'>
					{/*
        <span className="mapInstructions">
          Click a location to join a conversation.
        </span>
        */}
					<img src='gelage-jan-steen.jpeg' className='image-map' alt='map' />
					<div
						className='click-zone a'
						onClick={() => launchFloatingSpace('Tisch1')}>
						<span className='roomName'>Tisch1</span>
						<div className='click-zone-highlight a'></div>
					</div>
					<div
						className='click-zone b'
						onClick={() => launchFloatingSpace('Tisch2')}>
						<span className='roomName'>Tisch2</span>
						<div className='click-zone-highlight b'></div>
					</div>
					<div
						className='click-zone c'
						onClick={() => launchFloatingSpace('Tisch3')}>
						<span className='roomName'>Tisch3</span>
						<div className='click-zone-highlight c'></div>
					</div>
					<div
						className='click-zone d'
						data-zone='stress-test-arena'
						onClick={() => launchFloatingSpace('Tisch4')}>
						<span className='roomName' style={portalStyle}>
							Tisch4
						</span>
						<div className='click-zone-highlight d'></div>
					</div>
					<div
						className='click-zone e'
						onClick={() => launchFloatingSpace('Tisch5')}>
						<span className='roomName'>Tisch5</span>
						<div className='click-zone-highlight e'></div>
					</div>
					<div
						className='click-zone f'
						onClick={() => launchFloatingSpace('loft.radio')}>
						<span className='roomName'>loft.radio</span>
						<div className='click-zone-highlight f'></div>
					</div>
					<div
						className='click-zone g'
						onClick={() => launchFloatingSpace('chat')}>
						<span className='roomName'>chat</span>
						<div className='click-zone-highlight g'></div>
					</div>
				</div>
			</BrowserView>
			<MobileView>
				<MobileContainer>
					<Headline>
						Servas, du bist eingeladen{' '}
						<a
							href='https://aufabier.at'
							target='_blank'
							rel='noopener noreferrer'
							style={{ textDecoration: 'none' }}>
							auf a Bier.at
						</a>
					</Headline>
					<Descripton>
						<p> Klicke auf einen Tisch um beizutreten</p>

						<a href='https://gehma.aufabier.at'>
							oder eröffne einen Neuen Raum
						</a>
					</Descripton>
					<MobileSelectorContainer>
						<Room roomName='tisch1' />
						<Room roomName='tisch2' />
						<Room roomName='tisch3' />
						<Room roomName='tisch4' />
						<Room roomName='tisch5' />
					</MobileSelectorContainer>
					<JitsiInstanceMobile />
				</MobileContainer>
			</MobileView>
		</SpaceSelector>
	);
};

export default Space;
