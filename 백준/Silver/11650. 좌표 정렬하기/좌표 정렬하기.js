const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let set = []
let arr = []
let answer = ''

for (i = 1; i <= Number(input[0]); i++) {
    arr.push(input[i].split(' '))
}

for (let i = 0; i < arr.length; i++) {
    set.push({ x: Number(arr[i][0]), y: Number(arr[i][1]) })
}

function compare(a, b) {
    if(a.x === b.x){
        return a.y - b.y
    }
    else{
        return a.x - b.x
    }
}

set.sort(compare)

for(i=0; i<set.length; i++){
    answer += `${set[i].x} ${set[i].y}\n`
}

console.log(answer)