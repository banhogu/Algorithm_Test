const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const bag = new Map();
let indexBag = new Map();
let answer = "";

let arr = input[1].split(" ");

arr.forEach((item) => {
  if (bag.has(item)) {
    bag.set(item, bag.get(item) + 1);
  } else {
    bag.set(item, 1);
  }
});

arr.forEach((item, i) => {
  if (indexBag.has(item)) {
    return;
  } else {
    indexBag.set(item, i);
  }
});

let allInfo = arr.map((item) => ({
  item,
  firstIndex: indexBag.get(item),
  value: bag.get(item),
}));

allInfo.sort((a, b) => {
  if (a.value == b.value) {
    return a.firstIndex - b.firstIndex;
  } else {
    return b.value - a.value;
  }
});

allInfo.forEach((item) => {
  answer += item.item + " ";
});

console.log(answer);
