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
	let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
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
