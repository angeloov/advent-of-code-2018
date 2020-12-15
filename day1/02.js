import entries from "./01values.js";
// let entries = [-6, +3, +8, +5, -6];

let frequency = 0;
let allFrequencies = [];
let duplicateFound = false;

while (!duplicateFound) {
  entries.forEach(num => {
    if (duplicateFound) return;

    frequency += num;
    console.log("Frequency calculated: ", frequency);

    allFrequencies.forEach(el => {
      if (frequency == el) {
        console.log("FOUND!");
        console.log({ el, frequency });
        duplicateFound = true;
        return;
      }
    });

    allFrequencies.push(frequency);
  });
}
