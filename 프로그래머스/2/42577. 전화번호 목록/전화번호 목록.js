function solution(phone_book) {
    let arr = phone_book.sort()
    for(let i=0; i<arr.length; i++){
        if(i !==arr.length-1 &&  arr[i] === arr[i+1].substring(0,arr[i].length)){
            return false
        }
    }
    return true

 
}