import React from 'react';

import UserContextProvider from './UserContext';
import FloatingSpaceContextProvider from './FloatingSpaceContext';
import HouseContextProvider from './HouseContext';

const RootContextProvider = props => {
	return (
		<UserContextProvider>
			<HouseContextProvider>
				<FloatingSpaceContextProvider>
					{props.children}
				</FloatingSpaceContextProvider>
			</HouseContextProvider>
		</UserContextProvider>
	);
};

export default RootContextProvider;
