const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

let line = 1;

function remove(array, isFlip) {
  if (array.length > 0) {
    if (isFlip) {
      array.pop();
    } else {
      array.shift();
    }
  } else {
    throw new Error("error");
  }
}

let ans = [];

for (let i = 0; i < Number(input[0]); i++) {
  let commands = input[line];
  let n = Number(input[line + 1]);
  let array = JSON.parse(input[line + 2]);

  if (n === 0) {
    array = [];
  }

  let isFlip = false;

  try {
    commands.split("").forEach((command) => {
      if (command === "R") {
        isFlip = !isFlip;
      } else if (command === "D") {
        remove(array, isFlip);
      }
    });

    if (isFlip) {
      array.reverse();
    }

    ans.push(JSON.stringify(array));
  } catch (e) {
    ans.push("error");
  }

  line += 3;
}

console.log(ans.join("\n"));
