import React, { createContext, useState } from 'react';

export const HouseContext = createContext([{}, () => {}]);

const HouseContextProvider = props => {
	const [currentHouse, setHouse] = useState('');
	return (
		<HouseContext.Provider value={{ currentHouse, setHouse }}>
			{props.children}
		</HouseContext.Provider>
	);
};

export default HouseContextProvider;
