function solution(genres, plays) {
    var answer = [];
    
  
    let total={}
    for(let i=0; i<genres.length; i++){
        total[genres[i]] = total[genres[i]] ? total[genres[i]] + plays[i] : plays[i]
    }
    
    const sorted = Object.entries(total)
    sorted.sort((a,b)=>b[1] - a[1])
    
    let allInfo = genres.map((item,i)=>(
    {
        genre:item,
        index:i,
        playCnt:plays[i]
    }
    ))
    
    sorted.forEach((item,i)=>{
        let current=[];
        for(let j=0;j<allInfo.length;j++){
            if(item[0] === allInfo[j].genre){
                current.push(allInfo[j]);
            }
        }
        current.sort((a,b)=> b.playCnt - a.playCnt);
        current.forEach((item, i)=>{
            if(i < 2){
            answer.push(item.index)
            }        
        })
    })
    
    return answer;
}