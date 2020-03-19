import React from 'react';

const MapMenu = () => {
	return (
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
			<div className='click-zone g' onClick={() => launchFloatingSpace('chat')}>
				<span className='roomName'>chat</span>
				<div className='click-zone-highlight g'></div>
			</div>
		</div>
	);
};

export default MapMenu;
