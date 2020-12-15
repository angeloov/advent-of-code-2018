import entries from "./input.js";
// let entries = ["abcdef", "bababc", "abbcde", "abcccd", "aabcdd", "abcdee", "ababab"];
let appearsTwoTimes = 0;
let appearsThreeTimes = 0;

function checkForDuplicateLetter(str) {
  let stringArray = str.split("");
  let allLetters = new Set(stringArray);

  // Populate the result object
  let results = {};
  allLetters.forEach(letter => {
    results[letter] = 0;
  });

  allLetters.forEach(letter => {
    stringArray.forEach(el => {
      if (el == letter) {
        results[letter]++;
      }
    });
  });

  let twoTimes = false;
  let threeTimes = false;
  for (let letter in results) {
    let res = results[letter];

    if (!twoTimes && res == 2) {
      appearsTwoTimes++;
      twoTimes = true;
    } else if (!threeTimes && res == 3) {
      appearsThreeTimes++;
      threeTimes = true;
    }
  }
}

/* checkForDuplicateLetter("ababab"); */
entries.forEach(string => {
  checkForDuplicateLetter(string);
});

// Calculate output
console.log({ appearsTwoTimes, appearsThreeTimes });
const checksum = appearsTwoTimes * appearsThreeTimes;
console.log({ checksum });
