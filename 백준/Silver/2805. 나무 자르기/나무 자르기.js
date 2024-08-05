const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = input[1].split(" ").map(Number);
let target = Number(input[0].split(" ").map(Number)[1]);
let result = 0;

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let x of arr) {
    if (x >= mid) {
      total += x - mid;
    }
  }
  if (total >= target) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
