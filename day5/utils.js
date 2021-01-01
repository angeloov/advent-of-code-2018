// check if two units react with each other
function checkIfReact(unit1, unit2) {
	if (unit2 === undefined) return false;
	return unit1.toLowerCase() == unit2.toLowerCase() && unit1 != unit2;
}

// make two units of a polymer react
export function iterateThruString(polymer) {
	for (let i = 0; i < polymer.length; i++) {
		if (checkIfReact(polymer[i], polymer[i + 1])) {
			polymer.splice(i, 2);
			return 0;
		}
	}

	return -1;
}

// remove a letter from an array
export function removeLetterFromArray(array, letter) {
	for (let i = 0; i < array.length; i++) {
		let el = array[i];
		if (el == letter.toUpperCase() || el == letter.toLowerCase()) {
			array.splice(i, 1);
			return 1;
		}
	}

	return 0;
}
