const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
let allInfo = [];
let answer = [];

for (let i = 1; i <= num; i++) {
  answer.push(Number(input[i]));
}

// 1000 이하의 모든 삼각수를 미리 계산하여 저장
for (let i = 1; ; i++) {
  let x = (i * (i + 1)) / 2;
  if (x > 1000) {
    break;
  }
  allInfo.push(x);
}

let ans = "";

for (let a = 0; a < answer.length; a++) {
  let isOk = false;
  let K = answer[a];

  for (let i = 0; i < allInfo.length; i++) {
    for (let j = 0; j < allInfo.length; j++) {
      for (let k = 0; k < allInfo.length; k++) {
        if (allInfo[i] + allInfo[j] + allInfo[k] === K) {
          isOk = true;
          break;
        }
      }
      if (isOk) break;
    }
    if (isOk) break;
  }

  if (isOk) {
    ans += "1\n";
  } else {
    ans += "0\n";
  }
}

console.log(ans);
