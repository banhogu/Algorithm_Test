function solution(nums) {
    
    let bag = new Set()
    nums.forEach((item) => {
        bag.add(item)
    })
    
    if(bag.size >= nums.length/2){
        return(nums.length/2)
    }
    else{
        return(bag.size)
    }

}