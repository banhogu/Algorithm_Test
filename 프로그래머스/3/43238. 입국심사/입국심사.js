function solution(n, times) {
    let arr = times.sort((a,b)=>a-b)
    let start = 1
    let end = arr[arr.length-1] * n
    let result = 0
    
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        let count = 0
        for (let time of times) {
            count += Math.floor(mid / time);
        }
        
        if(count >= n){
            result = mid
            end = mid - 1
        }
        else{
            start = mid + 1
        }
    }
    
    return result
  
}