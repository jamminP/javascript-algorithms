function solution(left, right) {
    var answer = 0;
    
    for(left; left <= right; left++){
        let count = 0;
        
        for(let k = 1; k <= left; k++){
            if(left % k === 0){
                count++;
            }
        }
        
        if(count % 2 === 0)
            answer += left;
        else
            answer -= left;
    }
    
    return answer;
}