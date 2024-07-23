function solution(progresses, speeds) {
    let arr = []
    let answer = []
    
    progresses.forEach((item,i)=>{
        arr.push(Math.ceil((100 - Number(item)) / Number(speeds[i])));
    })
    
    let count = 1
    let max = arr[0]
    
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            answer.push(count)
            max = arr[i]
            count=1
        }
        else{
            count++
        }
    }
    answer.push(count)
    return answer
    
}