function solution(array, commands) {
    let answer = [];
    
    commands.forEach((item)=>{
        let start = item[0]
        let end = item[1]
       let target_arry = array.slice(start-1,end)
       target_arry.sort((a,b)=> a-b)
        answer.push((target_arry[item[2]-1]))
    })

    return answer;

}