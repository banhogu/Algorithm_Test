function solution(nums) {
    let bag = new Map()
    let count = 0
    nums.forEach((item)=>{
        if(bag.has(item)){
            bag.set(item,bag.get(item)+1)
        }
        else{
            bag.set(item,1)
        }
    })
    
    for(let[key,value] of bag){
        count++
    }
    
    if(count > (nums.length)/2){
        return nums.length/2
    }
    else{
        return count
    }
    
    
    
//     return answer;
}