const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let testCase = Number(input[0]);
let line = 1;
let answer = [];

for (let i = 0; i < testCase; i++) {
  let [N, M] = input[line].split(" ").map(Number);
  let arr = input[line + 1].split(" ").map(Number);
  let queue = arr.map((priority, index) => ({ index, priority }));
  let count = 0;

  while (queue.length > 0) {
    let current = queue.shift();
    if (queue.some((doc) => doc.priority > current.priority)) {
      queue.push(current);
    } else {
      count++;
      if (current.index === M) {
        answer.push(count);
        break;
      }
    }
  }

  line += 2;
}

console.log(answer.join("\n"));
