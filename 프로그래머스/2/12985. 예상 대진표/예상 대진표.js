function solution(n,a,b)
{
    var answer = 0;
    
    // 조건1. n-1 <-> n이 승부를 겨루며, 최후의 1인이 남을 때까지 진행.
    // 조건2. a와 b가 몇번째 라운드에서 만나는지? 서로 붙기 전까지 지지 않는다.
    
    while(a !== b){
        // 1번부터 n/2까지 차례대로 배정 받음.
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        
        answer++;
    }
    
    return answer;
}