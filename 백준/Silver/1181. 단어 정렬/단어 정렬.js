const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let number = Number(input[0]);
let answer = "";

let arr = [];

for (let i = 1; i <= number; i++) {
  arr.push(input[i]);
}

let bag = new Set([...arr]);

const arr2 = Array.from(bag);

arr2.sort((a, b) => {
  if (a.length == b.length) {
    return a.localeCompare(b);
  } else {
    return a.length - b.length;
  }
});

arr2.forEach((item) => {
  answer += item + "\n";
});

console.log(answer);
