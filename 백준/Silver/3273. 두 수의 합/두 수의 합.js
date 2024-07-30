const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const x = Number(input[2]);

const seen = new Set();
let count = 0;

for (const num of arr) {
  const complement = x - num;
  
  if (seen.has(complement)) {
    count++;
  }
  
  seen.add(num);
}

console.log(count);