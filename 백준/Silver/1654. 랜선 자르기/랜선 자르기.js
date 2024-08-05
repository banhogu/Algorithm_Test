const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let target = Number(input.shift().split(" ").map(Number)[1]);
let arr = input.map(Number);

let result = 0;

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let x of arr) {
    total += parseInt(x / mid);
  }
  if (total >= target) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
