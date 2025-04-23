function solution(n) {
    var answer = -1;
    var x = 2; // 1인 경우 모두 통과 되므로 따로 && 제어 제곱근
    
    if(n === 1)
        return Math.pow((n+1),2)
    
    while(x < n){
        if( n / (x*x) === 1){
            answer = Math.pow((x+1),2);
            break;
        }
        
        x++;
    }
    
    return answer;
}

let n;

solution(n);