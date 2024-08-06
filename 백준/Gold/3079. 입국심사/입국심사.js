const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let arr = input.map(Number).sort((a, b) => a - b);

let start = BigInt(1);
let end = BigInt(arr[arr.length - 1]) * BigInt(M);
let result = end;

while (start <= end) {
  let mid = (start + end) / BigInt(2);
  let count = BigInt(0);
  for (let item of arr) {
    count += mid / BigInt(item);
  }
  if (count >= BigInt(M)) {
    result = mid;
    end = mid - BigInt(1);
  } else {
    start = mid + BigInt(1);
  }
}

console.log(result.toString());
