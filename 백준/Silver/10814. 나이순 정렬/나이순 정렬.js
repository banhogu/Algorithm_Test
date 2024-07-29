const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
let arr = [];
let answer = "";

for (let i = 1; i <= num; i++) {
  arr.push(input[i].split(" "));
}

let allInfo = arr.map((item, i) => ({
  name: item[1],
  age: Number(item[0]),
  index: i,
}));

allInfo.sort((a, b) => {
  if (a.age === b.age) {
    return a.index - b.index;
  } else {
    return a.age - b.age;
  }
});

allInfo.forEach((item) => {
  answer += item.age + " " + item.name + "\n";
});

console.log(answer);
