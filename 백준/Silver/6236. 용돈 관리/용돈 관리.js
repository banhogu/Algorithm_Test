const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let arr = input.map(Number);

let start = Math.max(...arr); // 최소 인출 금액은 하루 최대 사용 금액 이상이어야 함
let end = arr.reduce((a, b) => a + b, 0); // 최대 인출 금액은 모든 금액의 합
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  // mid 금액으로 M번 이하의 인출로 모든 날을 커버할 수 있는지 확인
  let current = 0;
  let count = 0; // 첫 인출

  for (let money of arr) {
    if (current < money) {
      current = mid;
      count++;
      if (count > M) break; // 인출 횟수 초과 시 중단
    }
    current -= money;
  }

  if (count <= M) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);
