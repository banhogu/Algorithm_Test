const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let testCase = Number(input[0]);
let answer = "";

for (let i = 1; i <= testCase; i++) {
  // 첫 번째 값은 테스트 케이스 번호, 나머지는 키
  let [testCaseNumber, ...heights] = input[i].split(" ").map(Number);
  let count = 0;

  for (let j = 1; j < heights.length; j++) {
    for (let k = 0; k < j; k++) {
      if (heights[k] > heights[j]) {
        count++;
      }
    }
  }

  answer += `${testCaseNumber} ${count}\n`;
}

console.log(answer);
