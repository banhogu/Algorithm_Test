const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
const bag = new Map();

for (let i = 1; i <= num; i++) {
  if (bag.has(input[i])) {
    bag.set(input[i], bag.get(input[i]) + 1);
  } else {
    bag.set(input[i], 1);
  }
}

let arr = Array.from(bag);

arr.sort((a, b) => {
  if (b[1] === a[1]) {
    return a[0].localeCompare(b[0]);
  } else {
    return b[1] - a[1];
  }
});

console.log(arr[0][0]);
