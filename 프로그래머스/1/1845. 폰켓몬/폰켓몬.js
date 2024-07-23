function solution(nums) {
   let answer = 0
   let bag = new Map()
   
   nums.forEach((poke)=>{
       if(bag.has(poke)){
           bag.set(poke,bag.get(poke)+1)
       }
       else{
           bag.set(poke,1)
       }
   })
    
    if(bag.size > nums.length / 2){
        answer = nums.length / 2
    }
    else{
        answer = bag.size
    }
    
    return answer
}