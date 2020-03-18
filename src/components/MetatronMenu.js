import React from 'react';
import '../styles/style.css';
// import '../styles/style_mobile.css';

const MetatronMenu = () => {
	let Pattern = {
		coordinates: [
			'19,5', //0 top
			'33,13', //1 topRight
			'33,29', //2 bottomRight
			'19,37', //3 bottom
			'5,29', //4 bottomLeft
			'5,13', //5 topLeft
			//inner
			'19,13', //6 innerTop
			'26,17', //7 innerTopRight
			'26,25', //8 innerBottomRight
			'19,29', //9 innerBottom
			'12,25', //10 innerBottomLeft
			'12,17', //11 innerTopLeft
			//center
			'19, 21' //12 center
		],

		plot: function(points) {
			let shape = [];
			for (const point of points) {
				shape.push(Pattern.coordinates[point]);
			}
			return shape.join('L');
		},
		draw: function(plot, closed) {
			let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			let closure = closed ? 'z' : '';
			path.setAttribute('d', 'M' + plot + closure);
			path.classList.add('animated');

			return path;
		}
	};

	window.addEventListener('DOMContentLoaded', function(event) {
		let svg = document.getElementById('svg');
		let center = document.getElementById('c12');
		center.addEventListener('mouseover', () => addCircle(), false);
	});

	let lines = {
		c0: {
			shape: [0, 1, 2, 3, 4, 5],
			closed: true
		},
		c1: {
			shape: [1, 3, 5],
			closed: true
		},
		c2: {
			shape: [4, 0, 2],
			closed: true
		},
		c3: {
			shape: [3, 0],
			closed: true
		},
		c4: {
			shape: [4, 1],
			closed: true
		},
		c5: {
			shape: [5, 2],
			closed: true
		},
		c6: {
			shape: [6, 7, 8, 9, 10, 11],
			closed: true
		},
		c7: {
			shape: [7, 5, 7, 3],
			closed: true
		},
		c8: {
			shape: [8, 6, 10],
			closed: true
		},
		c9: {
			shape: [5, 2],
			closed: true
		},
		c10: {
			shape: [10, 0, 2],
			closed: false
		},
		c11: {
			shape: [11, 3, 11, 1],
			closed: false
		}
	};

	for (let [line, value] of Object.entries(lines)) {
		let circle = document.getElementById(line);
		let path = Pattern.draw(Pattern.plot(value.shape), value.closed);
		svg.appendChild(path);
		setTimeout(function() {
			path.remove();
		}, 5000);
		circle.addEventListener('mouseover', () => addShape(value), false);
		circle.addEventListener('touchmove', () => addShape(value), false);
	}

	function addShape(value) {
		let newPath = Pattern.draw(Pattern.plot(value.shape), value.closed);
		svg.appendChild(newPath);
		setTimeout(function() {
			newPath.remove();
		}, 5000);
	}

	function addCircle() {
		let circle = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'circle'
		);
		let circle2 = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'circle'
		);
		circle.setAttribute('r', 15.7);
		circle.setAttribute('cx', 19);
		circle.setAttribute('cy', 21);
		circle.classList.add('path-circle');
		circle2.setAttribute('r', 16.5);
		circle2.setAttribute('cx', 19);
		circle2.setAttribute('cy', 21);
		circle2.classList.add('path-circle');
		circle2.classList.add('sm');
		svg.appendChild(circle);

		setTimeout(function() {
			svg.appendChild(circle2);
		}, 500);

		setTimeout(function() {
			circle.remove();
		}, 5000);
		setTimeout(function() {
			circle2.remove();
		}, 5500);
	}

	return (
		<div class='m-grid-container'>
			<svg
				class='frame'
				// xmlns:svg='http://www.w3.org/2000/svg'
				xmlns='http://www.w3.org/2000/svg'
				preserveAspectRatio='xMidYMid meet'
				viewBox='1 1 36 40'
				id='svg'>
				<g id='shapes'>
					<path
						class='path-hex '
						d='M 19,5 L 33,13 L 33,29 L 19,37 L 5,29 L 5,13 L 19,5 z '
						id='octagon'
					/>
					<path
						class='path-hex '
						d='M 19,5 L 5,29 L 33,29 L 19,5 z '
						id='triange-up'
					/>
					<path
						class='path-hex '
						d='M 5,13 L 19,37 L 33,13 L 5,13 z '
						id='triange-down'
					/>
					<path
						class='path-hex inner'
						d='M 19,13 L 12,17 L 12,25 L 19,29 L 26,25 L 26,17 L 19,13 z '
						id='octagon-inner'
					/>
					<path
						class='path-hex '
						d='M 12,25 L 19,5 L 26,25 L 12,25 z '
						id='path2894'
					/>
					<path
						class='path-hex '
						d='M 19,37 L 12,17 L 26,17 L 19,37 z '
						id='path2896'
					/>
					<path class='path-hex ' d='M 5,13 L 33,29' id='line-6-3' />
					<path class='path-hex ' d='M 5,29 L 33,13' id='line-6-2' />
					<path class='path-hex ' d='M 19,5 L 19,37' id='line=-1-3' />
					<path
						class='path-hex '
						d='M 5,29 L 19,13 L 26,25 L 5,29 z '
						id='path2904'
					/>
					<path
						class='path-hex '
						d='M 33,29 L 19,13 L 12,25 L 33,29 z '
						id='path2906'
					/>
					<path
						class='path-hex '
						d='M 33,13 L 12,17 L 19,29 L 33,13 z '
						id='path2908'
					/>
					<path
						class='path-hex '
						d='M 5,13 L 19,29 L 26,17 L 5,13 z '
						id='path2910'
					/>
				</g>
			</svg>
			<div id='c0' class='circle row-1 c-center c-1 clickzone a'></div>
			<div id='c1' class='circle row-2 c-right'></div>
			<div id='c2' class='circle row-6 c-right'></div>
			<div id='c3' class='circle row-7 c-center'></div>
			<div id='c4' class='circle row-6 c-left'></div>
			<div id='c5' class='circle row-2 c-left'></div>

			<div id='c6' class='circle row-2 c-center'></div>
			<div id='c7' class='circle row-3 c-center-right'></div>
			<div id='c8' class='circle row-5 c-center-right'></div>
			<div id='c9' class='circle row-6 c-center'></div>
			<div id='c10' class='circle row-5 c-center-left'></div>
			<div id='c11' class='circle row-3 c-center-left'></div>

			<div id='c12' class='circle row-4 c-center'></div>
		</div>
	);
};

export default MetatronMenu;
