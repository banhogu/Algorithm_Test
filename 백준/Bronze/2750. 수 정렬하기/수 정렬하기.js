const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let arr = input.map(Number)
let num = arr[0]
let arr2 = []

for(let i =1; i<=num; i++){
    arr2.push(arr[i])
}

let answer = ''

arr2.sort(function (a, b) {
    return a - b
})

for (let i = 0; i < num; i++) {
   answer += arr2[i] + '\n'
}


console.log(answer)