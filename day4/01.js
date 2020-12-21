import fs from "fs";
import Guard from "./guard.js";

const inputTxt = fs.readFileSync("./input.txt", "utf-8");
let input = inputTxt
  .split("\n")
  .map(x => x.trim())
  .sort();

let guards = {};

function parseData(string) {
  if (!string) return {};
  const regExpr = /\[1518-(\d\d)-(\d\d) (\d\d):(\d\d)\] (Guard #)?(\d+|falls asleep|wakes up)/;
  const res = regExpr.exec(string);

  return {
    month: res[1],
    day: res[2],
    hour: res[3],
    minutes: res[4],
    action: res[6], // contains the action or the guard's id
  };
}

for (let i = 0; i < input.length; i++) {
  let data = parseData(input[i]);

  const guardId = parseInt(data.action);

  // if guard doesn't exist, add it to the array
  if (!guards[guardId]) {
    guards[guardId] = new Guard({ id: guardId });
  }

  // do until there's a `falls asleep - wakes up` cycle
  let next = parseData(input[i + 1]);
  while (next.action === "falls asleep") {

    // falls asleep
    i++;
    let min1 = parseInt(parseData(input[i]).minutes);

    // wakes up
    i++;
    let min2 = parseInt(parseData(input[i]).minutes);

    let minutesAsleep = min2 - min1;
    guards[guardId].addMinutesAsleep(minutesAsleep);

    // add all the minutes to the guard's sleep history 
    for (let j = min1; j < min2; j++) {
      guards[guardId].sleepHistory[j] += 1;
    }

    // update next
    next = parseData(input[i + 1]);
  }
}

// ---- Find the result
let allGuards = Object.values(guards);

let sleepMinutes = [];
allGuards.forEach(guard => sleepMinutes.push(guard.minutesAsleep));
let highestNumberOfSleepMinutes = Math.max(...sleepMinutes);

// - Guard with most minutes of sleep
const sleepiestGuard = allGuards.find(guard => guard.minutesAsleep == highestNumberOfSleepMinutes);

let sleepHistory = sleepiestGuard.sleepHistory;
// - Minute where the guard slept the most
const sleepyMinute = sleepHistory.indexOf(
  Math.max(...sleepHistory)
);

const result = sleepiestGuard.id * sleepyMinute;
console.log("Result:", result);