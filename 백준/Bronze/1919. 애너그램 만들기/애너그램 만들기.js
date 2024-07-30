const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let line1 = input[0].toString().split("");
let line2 = input[1].toString().split("");

// 두 문자열에 대한 문자 빈도 저장할 Map 객체
let bag1 = new Map();
let bag2 = new Map();

// 첫 번째 문자열의 문자 빈도 계산
line1.forEach((item) => {
  if (bag1.has(item)) {
    bag1.set(item, bag1.get(item) + 1);
  } else {
    bag1.set(item, 1);
  }
});

// 두 번째 문자열의 문자 빈도 계산
line2.forEach((item) => {
  if (bag2.has(item)) {
    bag2.set(item, bag2.get(item) + 1);
  } else {
    bag2.set(item, 1);
  }
});

let deletions = 0;

// 첫 번째 문자열의 문자 빈도와 두 번째 문자열의 문자 빈도를 비교하여 제거할 문자 계산
for (const [key, value] of bag1) {
  if (bag2.has(key)) {
    let diff = Math.abs(value - bag2.get(key));
    deletions += diff;
    bag2.delete(key); // 처리된 문자 제거
  } else {
    deletions += value;
  }
}

// 두 번째 문자열에 남아 있는 문자를 처리
for (const [key, value] of bag2) {
  deletions += value;
}

console.log(deletions);