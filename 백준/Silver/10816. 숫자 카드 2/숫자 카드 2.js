const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let bag = new Map();
let answer = "";
let arr = input[1]
  .split(" ")
  .map(Number)
  .forEach((item) => {
    if (bag.has(item)) {
      bag.set(item, bag.get(item) + 1);
    } else {
      bag.set(item, 1);
    }
  });

for (let item of input[3].split(" ").map(Number)) {
  if (bag.has(item)) {
    answer += bag.get(item) + " ";
  } else {
    answer += 0 + " ";
  }
}

console.log(answer);
