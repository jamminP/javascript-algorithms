function solution(n) {
    var answer = '';
    
    for(let a = 0; a < n; a++){
        if(a % 2 === 0)
            answer += '수';
        else
            answer += '박';
    }
    
    return answer;
}