const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]); //정점의 개수
let m = Number(input[1]); // 간선의 개수
let graph = [];

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ");
  graph[x].push(y);
  graph[y].push(x);
}

let cnt = 0;
let visited = new Array(n + 1).fill(false);

function dfs(x) {
  visited[x] = true;
  cnt++;
  for (let y of graph[x]) {
    if (!visited[y]) {
      dfs(y);
    }
  }
}

dfs(1);

console.log(cnt - 1);
