import entries from "./input.js";
const strLen = 26;

function compareTwoStrings(string1, string2) {
  let stringArray1 = string1.split("");
  let stringArray2 = string2.split("");

  let score = 0;

  for (let i = 0; i < strLen; i++) {
    if (stringArray1[i] == stringArray2[i]) {
      score++;
    }
  }

  // Number of characters that differ
  return strLen - score;
}

// Get all the scores comparing the strings
let allScores = [];
for (let i = 0; i < entries.length; i++) {
  for (let j = i; j < entries.length; j++) {
    if (entries[j + 1] == undefined) break;

    let score = compareTwoStrings(entries[i], entries[j + 1]);
    allScores.push([entries[i], entries[j + 1], score]);
  }
}

// Get the most correct pair
let allNums = [];
allScores.forEach(el => {
  allNums.push(el[2]);
});

let smallerID = Math.min(...allNums);
let result = allScores.find(el => el[2] === smallerID);

const finalString = returnCommonLetters(result[0], result[1]);
console.log(finalString);

// Utility function
// Returns only the letters that are equal in a string
function returnCommonLetters(string1, string2) {
  let stringArray1 = string1.split("");
  let stringArray2 = string2.split("");

  let newString = "";
  for (let i = 0; i < strLen; i++) {
    if (stringArray1[i] == stringArray2[i]) {
      newString += stringArray1[i];
    }
  }

  return newString;
}
