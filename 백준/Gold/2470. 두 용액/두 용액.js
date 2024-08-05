const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let arr = input[0].split(" ").map(Number);
arr.sort((a, b) => a - b);

let start = 0;
let end = N - 1;
let minSum = Number.MAX_SAFE_INTEGER;
let answer = [];

while (start < end) {
  let sum = arr[start] + arr[end];

  if (Math.abs(sum) < minSum) {
    minSum = Math.abs(sum);
    answer = [arr[start], arr[end]];
  }

  if (sum < 0) {
    start++;
  } else {
    end--;
  }
}

console.log(answer[0], answer[1]);
