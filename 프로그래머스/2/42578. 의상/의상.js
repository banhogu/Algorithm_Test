function solution(clothes) {
    let answer = 1
    let bag = new Map()
    
   clothes.forEach((type)=> {
       if(bag.has(type[1])){
          bag.set(type[1],bag.get(type[1])+1)
          }
       else{
           bag.set(type[1],1)
       }
   })
    for(const[key,value] of bag){
        answer *= value + 1
    }
    return answer -1
    
    
}