import fs from 'fs';
import { iterateThruString } from './utils.js';

const input = fs.readFileSync('input.txt', 'utf-8').trim();
let polymer = input.split('');

while (iterateThruString(polymer) == 0) {
	iterateThruString(polymer);
}

let result = polymer.join('').length;
console.log(result);