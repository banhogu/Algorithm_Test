const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let max = Number(input.shift());
let answer = [];
let ans = "";

for (let item of input.map(Number)) {
  if (item === -1) {
    break; // 입력의 끝을 나타냄
  } else if (item === 0) {
    if (answer.length > 0) {
      answer.shift(); // 가장 먼저 들어온 패킷 제거
    }
  } else {
    if (answer.length < max) {
      answer.push(item); // 패킷 추가
    }
  }
}

if (answer.length == 0) {
  ans += "empty";
} else {
  answer.forEach((item) => {
    ans += item + " ";
  });
}

console.log(ans);
