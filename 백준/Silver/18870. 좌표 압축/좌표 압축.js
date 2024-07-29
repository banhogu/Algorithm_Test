const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let n = Number(input[0])
let arr = input[1].split(' ').map(Number)
let set = [...new Set(arr)]
let set2 = []
let answer = ''

set.sort((a,b)=>{
    return a-b
})

let mySet = new Map()

for(let i=0; i<set.length; i++){
    mySet.set(set[i],i)
}

for(x of arr){
    answer += mySet.get(x) + " "
}


console.log(answer)