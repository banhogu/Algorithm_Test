const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = "";

for (let i = 1; i <= Number(input[0]); i++) {
  let left = [];
  let right = [];
  let arr = input[i].split("");
  for (let item of arr) {
    if (item === "-") {
      if (left.length > 0) {
        left.pop();
      }
    } else if (item === "<") {
      if (left.length > 0) {
        right.push(left.pop());
      }
    } else if (item === ">") {
      if (right.length > 0) {
        left.push(right.pop());
      }
    } else {
      left.push(item);
    }
  }
  answer += left.join("") + right.reverse().join("") + "\n";
}

console.log(answer);
