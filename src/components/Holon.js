import React, { useState,useContext } from 'react';
import Web3 from 'web3';
import styled from "styled-components";

import { SpaceContext } from '../contexts/SpaceContext';
import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";

import holonfactory from "../data/HolonFactory.json";

const Holon =  ({ roomName, active }) => {
	const { currentSpace, setSpace } = useContext(SpaceContext);
	const [number, setNumber] = useState(0);
	const [holonList, setHolonList] = useState('');
	const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
	web3.eth.getAccounts().then(console.log);
	
	// const Container = styled.div`
	// height: 100%;
	// display: flex;
	// text-align: left;
	// flex-direction: column;
	// justify-content: flex-stretch;
	// `;

	// const AddHolonButton = styled.button`
	// min-height: 20px;
	// max-width: 120px;
	// color: black;
	// margin-top: 15px;
	// `;

	// const ListButton = styled.button`
	// min-height: 20px;
	// max-width: 20px;
	// color: black;
	// margin-top: 1px;
	// `;
	
	let holonscontract = new web3.eth.Contract(holonfactory.abi, holonfactory.address);
	const holonli = [];
	
	const handleHolonList = async (e) => {
		let data = await holonscontract.methods.listHolons().call();
		for (let holon of data) {
			let holonname  = await holonscontract.methods.toName(holon).call()
			//let holonvector =  await holonscontract.methods.toVector(holon).call()
			holonli.push(<li key={holon}><a href={"https://holons.hackalong.io/" + holon} target="_blank">{holonname}</a></li>);
		 }
		 setHolonList(holonli);
	}
	
	 handleHolonList();

	//  holonscontract.methods.listHolons().call().then( data => {
	// 	//let array = data.split(" ");
	// 	console.log(data);
	// 	for (let holon of data) {
	// 		holonli.push(<li key={holon}>{holon}</li>);
	// 	 }
	// 	setHolonList(holonli);

	// });

	const handleNewHolon = async (e) => {
		  
		const accounts = await window.ethereum.enable();
		const account = accounts[0];
		//const gas = await holonscontract.methods.newHolon("number")
	//						.estimateGas();
		const result = await holonscontract.methods.newHolon("number").call({
		  from: account
		
		})
		console.log(result);
	  }


	return (
		<div>
		Projects in this holon:
		 <ul>
			{holonList}
		</ul>
		</div>
		
		
		
	);
};

export default Holon;

