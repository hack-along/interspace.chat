import React, { useContext } from 'react';
import Web3 from 'web3';


import { SpaceContext } from '../contexts/SpaceContext';

import holonabi from "../data/holonabi.json";

const Holon = ({ roomName, active }) => {
	const { currentSpace, setSpace } = useContext(SpaceContext);
	const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
	web3.eth.getAccounts().then(console.log);
	
	this.holonaddress ="0x82Aa4dC3E7D85a95cd801394A070AE316b6a668d"
	this.holon = new web3.eth.Contract(this.holonabi, this.holonaddress);
	const holonlist = [];

    for (let user of users) {
		holonlist.push(<li key={holon}>{holon}</li>);
    }

	return (

		<ul>
			{holonlist}
		</ul>

		<span className='click-zone-mobile' onClick={() => setSpace(roomName)}>
			<span className={`roomFont ${currentSpace === roomName ? 'active' : ''}`}>
				{roomName}
			</span>
		</span>
	);
};

export default Holon;

