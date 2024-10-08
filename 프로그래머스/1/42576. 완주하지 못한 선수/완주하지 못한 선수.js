function solution(participant, completion) {
    let answer = ''
   let bag = new Map()
   participant.forEach((item)=>{
       if(bag.has(item)){
           bag.set(item, bag.get(item)+1)
       }
       else{
           bag.set(item,1)
       }
   })
    completion.forEach((item)=>{
        if(bag.has(item)){
            bag.set(item, bag.get(item)-1)
        }
    })
    
    for([key,value] of bag){
        if(value === 1){
            answer = key
        }
    }
    
    return(answer)
}