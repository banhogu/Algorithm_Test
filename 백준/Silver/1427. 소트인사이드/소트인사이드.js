const input = require('fs').readFileSync('dev/stdin').toString().trim().split('').map(Number);

input.sort((a,b)=>b-a)

let answer =''

for(let i=0; i<input.length; i++){
    answer += `${input[i]}`
}

console.log(answer)