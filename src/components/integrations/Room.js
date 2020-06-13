import React, { useContext } from 'react';

import { SpaceContext } from '../contexts/SpaceContext';

const Room = ({ roomName, active }) => {
	const { currentSpace, setSpace } = useContext(SpaceContext);

	return (
		<span className='click-zone-mobile' onClick={() => setSpace(roomName)}>
			<span className={`roomFont ${currentSpace === roomName ? 'active' : ''}`}>
				{roomName}
			</span>
		</span>
	);
};

export default Room;
