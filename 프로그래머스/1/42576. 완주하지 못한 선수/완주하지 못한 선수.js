function solution(participant, completion) {
    let answer = ''
    let bag = new Map()
    participant.forEach((name)=>{
        if(bag.has(name)){
            bag.set(name,bag.get(name)+1)
        }
        else{
            bag.set(name,1)
        }
    })
    completion.forEach((name)=>{
        if(bag.get(name) === 1){
            bag.delete(name)
        }
        else{
            bag.set(name,bag.get(name)-1)
        }
    })
    
    for(const[key,value] of  bag){
        answer = key
    }
    return answer
    
}