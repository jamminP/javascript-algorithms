function solution(citations) {
    var answer = 0;
    let length = citations.length;
    
    for(let i = 0; i <= length; i++){
        const count = citations.filter(acc => acc >= i).length;
        
        if(count >= i){
            answer = i;
        }
    }
    
    return answer;
}