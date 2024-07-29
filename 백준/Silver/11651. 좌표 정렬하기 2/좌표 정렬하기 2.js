const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let number = Number(input[0]);
let answer = "";

let arr = [];

for (let i = 1; i <= number; i++) {
  arr.push(input[i].split(" "));
}

arr.sort((a, b) => {
  if (a[1] == b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

arr.forEach((item) => {
  answer += `${item[0]} ${item[1]}\n`;
});

console.log(answer);
