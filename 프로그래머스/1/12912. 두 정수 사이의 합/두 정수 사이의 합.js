function solution(a, b) {
    var answer = 0;
    
    var start = Math.min(a, b);
    var end = Math.max(a,b);
    
    for(let i = start; i <= end; i++){
        answer += i;
    }
    
    return answer;
}

var a;
var b;