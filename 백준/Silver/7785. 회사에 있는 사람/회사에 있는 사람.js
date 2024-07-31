const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let num = Number(input[0]);
const people = new Set();

for (let i = 1; i <= num; i++) {
  const [name, action] = input[i].split(" ");
  if (action === "enter") {
    people.add(name);
  } else if (action === "leave") {
    people.delete(name);
  }
}

// 배열로 변환 후 역순으로 정렬
const sortedPeople = Array.from(people).sort().reverse();
console.log(sortedPeople.join("\n"));
