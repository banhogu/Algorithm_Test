const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, Q] = input[0].split(" ").map(Number);

let answer = "";

let arr = new Array(N + 1);
for (let i = 0; i <= N; i++) {
  arr[i] = new Array(N + 1).fill(0);
}

for (let i = 1; i <= N; i++) {
  let row = input[i].split(" ").map(Number);
  for (let j = 1; j <= N; j++) {
    arr[i][j] = row[j - 1];
  }
}

let acc = new Array(N + 1);
for (let i = 0; i <= N; i++) {
  acc[i] = new Array(N + 1).fill(0);
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    acc[i][j] = arr[i][j] + acc[i - 1][j] + acc[i][j - 1] - acc[i - 1][j - 1];
  }
}

for (let i = 1 + N; i < input.length; i++) {
  let [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  answer +=
    acc[x2][y2] -
    acc[x1 - 1][y2] -
    acc[x2][y1 - 1] +
    acc[x1 - 1][y1 - 1] +
    "\n";
}

console.log(answer);
