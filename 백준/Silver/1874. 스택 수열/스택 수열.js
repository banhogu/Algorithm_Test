const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = Number(input.shift());
let answer = "";
let stack = [];
let current = 1;
let isPossible = true;

for (let x of input) {
  x = Number(x);
  while (current <= x) {
    answer += "+" + "\n";
    stack.push(current);
    current++;
  }
  if (stack.length === 0 || stack[stack.length - 1] !== x) {
    answer = "NO";
    isPossible = false;
    break;
  }
  answer += "-" + "\n";
  stack.pop();
}

if (isPossible) {
  console.log(answer);
} else {
  console.log("NO");
}
