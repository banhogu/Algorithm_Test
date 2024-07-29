function solution(progresses, speeds) {
    var answer = [];
    let arr = []
    
    progresses.forEach((item,i)=>{
        let a = 100 - Number(item)
        arr.push(Math.ceil(a/speeds[i]))
    })
    
    let count = 1
    let max = arr[0]
    
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            answer.push(count)
            count = 1
            max = arr[i]
        }
        else{
            count++
        }
    }
    answer.push(count)
        
    // console.log(arr)
    
    return answer;
}