const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let M = Number(input[1]);

let start = 1;
let end = Number.MAX_SAFE_INTEGER;
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let count = 0;
  for (let i = 1; i <= N; i++) {
    count += Math.min(parseInt(mid / i), N);
  }
  if (count >= M) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);
