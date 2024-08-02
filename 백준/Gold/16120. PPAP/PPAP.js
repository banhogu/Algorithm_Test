const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let stack = [];

for (let item of input[0]) {
  stack.push(item);
  if (
    stack.length >= 4 &&
    stack[stack.length - 1] === "P" &&
    stack[stack.length - 2] === "A" &&
    stack[stack.length - 3] === "P" &&
    stack[stack.length - 4] === "P"
  ) {
    stack.pop();
    stack.pop();
    stack.pop();
  }
}

if (stack.length === 1 && stack[0] === "P") {
  console.log("PPAP");
} else {
  console.log("NP");
}
