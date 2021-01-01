import fs from 'fs';
import { iterateThruString, removeLetterFromArray } from './utils.js';

const input = fs.readFileSync('input.txt', 'utf-8').trim();
const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

let results = [];

// for every letter
for (let i = 0; i < allLetters.length; i++) {
	let arr = input.split('');
	let letter = allLetters[i];

	// remove the letter one at a time
	while (removeLetterFromArray(arr, letter) == 1) {
		removeLetterFromArray(arr, letter);
	}

	// make the polymer react
	while (iterateThruString(arr) == 0) {
		iterateThruString(arr);
	}

	results.push(arr.length);
}

const minimum = Math.min(...results);
console.log(minimum);