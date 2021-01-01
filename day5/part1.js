import fs from "fs";
const input = fs.readFileSync("input.txt", "utf-8").trim();
let polymer = input.split("");

// check if two units react with each other
function checkIfReact(unit1, unit2) {
  return unit1?.toLowerCase() == unit2?.toLowerCase() && unit1 != unit2;
}

function iterateThruString() {
  for (let i = 0; i < polymer.length; i++) {
    if (checkIfReact(polymer[i], polymer[i + 1])) {
      polymer.splice(i, 2);
      return 0;
    }
  }

  return -1;
}

while (iterateThruString() == 0) {
  iterateThruString();
}

let result = polymer.join("").length;
console.log(polymer.join(""));
console.log(result);
