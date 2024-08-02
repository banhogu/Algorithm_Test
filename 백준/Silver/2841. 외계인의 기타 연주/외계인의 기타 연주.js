const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, P] = input.shift().split(" ").map(Number);
const stacks = Array.from({ length: 6 }, () => []);
let moves = 0;

for (let i = 0; i < N; i++) {
  const [string, fret] = input[i].split(" ").map(Number);
  const stack = stacks[string - 1];

  // 현재 스택의 꼭대기보다 큰 프렛을 연주해야 하는 경우
  while (stack.length > 0 && stack[stack.length - 1] > fret) {
    stack.pop();
    moves++;
  }

  // 현재 스택의 꼭대기와 같은 프렛을 이미 누르고 있는 경우
  if (stack.length === 0 || stack[stack.length - 1] !== fret) {
    stack.push(fret);
    moves++;
  }
}

console.log(moves);
