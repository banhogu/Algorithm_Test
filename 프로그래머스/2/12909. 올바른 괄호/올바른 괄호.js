function solution(s){

    let stack = []
    let balanced = true
    
    for(let x of s){
        if(x === '('){
            stack.push(x)
        }
        else if(x === ')'){
            if(s.length === 0 || stack[stack.length-1] !== '('){
                balanced = false
                break;
            }
            stack.pop()
        }
    }
    if(stack.length === 0 && balanced ){
        return true
    }
    else{
        return false
    }
}