const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let N = input[0].split(' ').map(Number)[0]
let K = input[0].split(' ').map(Number)[1]
let arr = input[1].split(' ').map(Number)

let start = Math.max(...arr); //원래 start = 0
let end = arr.reduce((a, b) => a + b)
let answer = Number.MAX_SAFE_INTEGER; //원래 answer없었음

while (start <= end) {
   let mid = parseInt((start + end) / 2)
   let sum = 0;
   let cnt = 1

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] + sum <= mid) {
         sum += arr[i]
      }
      else {
         sum = 0 + arr[i]
         cnt++
      }
   }
   if (cnt > K) {
      start = mid + 1
   }
   else {
      end = mid - 1
      result = mid
   }
}

console.log(result)





