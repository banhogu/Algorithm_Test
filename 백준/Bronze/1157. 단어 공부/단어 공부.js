const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let word = input[0]
  .toString()
  .split("")
  .map((item) => item.toUpperCase());

let bag = new Map();

word.forEach((item) => {
  if (bag.has(item)) {
    bag.set(item, bag.get(item) + 1);
  } else {
    bag.set(item, 1);
  }
});

const arr = Array.from(bag);

arr.sort((a, b) => b[1] - a[1]);

let max = arr[0][1];
let maxWord = arr[0][0];

let find = arr.filter((item) => item[1] === max);

if (find.length > 1) {
  console.log("?");
} else {
  console.log(maxWord);
}
