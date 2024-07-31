const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer;
let ans = "";

let sum = input.reduce((a, c) => a + c, 0);

for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (sum - input[i] - input[j] === 100) {
      answer = input.filter((_, index) => index !== i && index !== j);
      break;
    }
  }
}

answer.sort((a, b) => a - b);
answer.forEach((item) => {
  ans += item + "\n";
});

console.log(ans);
