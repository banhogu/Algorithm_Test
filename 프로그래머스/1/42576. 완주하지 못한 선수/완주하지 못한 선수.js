function solution(participant, completion) {
    let answer = '';
    let bag = new Map()
    participant.forEach((item)=>{
        if(bag.has(item)){
            bag.set(item,bag.get(item)+1)
        }
        else{
            bag.set(item,1)
        }
    })
    completion.forEach((item)=>{
        if(bag.get(item)===1){
            bag.delete(item)
        }
        else{
            bag.set(item,bag.get(item)-1)
        }
    })
    for(const[key,value] of bag){
        answer = key
    }
    
    return answer;
}