const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = "";
let arr = [0];
input[1]
  .split(" ")
  .map(Number)
  .reduce((a, c) => {
    arr.push(a + c);
    return a + c;
  }, 0);

for (let i = 2; i < input.length; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  let temp = arr[end] - arr[start - 1];
  answer += temp + "\n";
}

console.log(answer);
