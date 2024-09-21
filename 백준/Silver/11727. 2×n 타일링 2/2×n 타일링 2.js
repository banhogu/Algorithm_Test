const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const number = Number(input[0]);
let dp = [];

function sol(n) {
  dp[1] = 1;
  dp[2] = 3;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 2]) % 10007;
  }
  return String(dp[n]);
}

console.log(sol(number));
