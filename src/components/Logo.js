import React from 'react';
import styled from 'styled-components';

const wrap = styled.div`
	perspective: 800px;
	perspective-origin: 50% 100px;
`;

const cube = styled.div`
	position: relative;
	width: 200px;
	transform-style: preserve-3d;

	div {
		position: absolute;
		width: 200px;
		height: 200px;
	}
`;
const front = styled.div``;
const back = styled.div`
	transform: translateZ(-100px) rotateY(180deg);
`;
const top = styled.div`
	transform: rotateX(-90deg) translateY(-100px);
	transform-origin: top center;
`;
const bottom = styled.div`
	transform: rotateX(90deg) translateY(100px);
	transform-origin: bottom center;
`;
const left = styled.div`
	transform: rotateY(270deg) translateX(-100px);
	transform-origin: center left;
`;
const right = styled.div`
	transform: rotateY(-270deg) translateX(100px);
	transform-origin: top right;
`;

const Logo = () => {
	return (
		<div className='wrap'>
			<div className='cube'>
				<div className='front'>front</div>
				<div className='back'>back</div>
				<div className='top'>top</div>
				<div className='bottom'>bottom</div>
				<div className='left'>left</div>
				<div className='right'>right</div>
			</div>
		</div>
	);
};

export default Logo;
