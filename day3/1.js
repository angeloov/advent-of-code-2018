import data from './data.js';

let totalSquareInches = 0;

// Initialize matrix
const matrix = [];

// Fill matrix
for (let i = 0; i < 1000; i++) {
	matrix.push(new Array(1000).fill(0));
}

// By receving a string `parseData` formats it in a map
function parseData(string) {
	let regExp = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;
	let res = regExp.exec(string);

	return {
		id: parseInt(res[1]),
		fromLeft: parseInt(res[2]),
		fromTop: parseInt(res[3]),
		width: parseInt(res[4]),
		height: parseInt(res[5]),
	};
}

for (let el of data) {
	let directives = parseData(el);
	const { fromLeft } = directives;
	const { fromTop } = directives;
	const fabricHeight = directives.height;
	const fabricWidth = directives.width;

	for (let i = 0; i < fabricHeight; i++) {
		for (let j = 0; j < fabricWidth; j++) {
			let a = fromTop + i; // Row
			let b = fromLeft + j; // Column

			matrix[a][b]++;
		}
	}
}

// Calculate the number of total square inches
// where two elves have claimed fabric
matrix.forEach(row => {
	row.forEach(val => {
		if (val >= 2) {
			totalSquareInches++;
		}
	});
});

console.log('Solution: ', totalSquareInches);
