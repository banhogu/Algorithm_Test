const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let arr = input[1].split(" ").map(Number).reverse();
let bag = [0];

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

for (let item of arr) {
  if (bag[bag.length - 1] < item) {
    bag.push(item);
  } else {
    let index = lowerBound(bag, item, 0, bag.length);
    bag[index] = item;
  }
}

console.log(N - (bag.length - 1));
