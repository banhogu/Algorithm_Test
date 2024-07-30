const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [row, col] = input[0].split(" ").map(Number);

// 성의 상태를 나타내는 2차원 배열 만들기
const castle = [];
for (let i = 1; i <= row; i++) {
  castle.push(input[i].split(""));
}

let 추가필요행 = 0;

// 행에 경비원이 있는지 확인
for (let i = 0; i < row; i++) {
  let 경비원있나 = false;
  for (let j = 0; j < col; j++) {
    if (castle[i][j] === "X") {
      경비원있나 = true;
      break;
    }
  }
  if (!경비원있나) {
    추가필요행++;
  }
}

let 추가필요열 = 0;

// 열에 경비원이 있는지 확인
for (let i = 0; i < col; i++) {
  let 경비원있나 = false;
  for (let j = 0; j < row; j++) {
    if (castle[j][i] === "X") {
      경비원있나 = true;
      break;
    }
  }
  if (!경비원있나) {
    추가필요열++;
  }
}

// 필요한 추가 경비원의 수는 보호받지 않는 행과 열의 최대값
console.log(Math.max(추가필요행, 추가필요열));
