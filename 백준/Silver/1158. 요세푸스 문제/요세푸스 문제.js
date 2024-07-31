const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [num, k] = input[0].split(" ").map(Number);
let ans = "<";

let current = [];
let answer = [];
for (let i = 1; i <= num; i++) {
  current.push(i);
}

for (let i = 0; i < num; i++) {
  for (let j = 1; j < k; j++) {
    let temp = current.shift();
    current.push(temp);
  }
  let a = current.shift();
  answer.push(a);
}

answer.forEach((item, i) => {
  if (i == answer.length - 1) {
    ans += item + ">";
  } else {
    ans += item + "," + " ";
  }
});

console.log(ans);
