function solution(d, budget) { 
    var answer = 0;
    
    // d[]: 부서별 신청한 금액이 들어있는 배열, budget: 지원금
    if(d.length < 1 || d.length > 100 || budget < 1 || budget > 10000000 || d.some(x => x < 1 || x > 100000))
        return false;
    
     // 정렬하여 최대한 작은 값부터 소비되어야 많은 부서에게 할당 가능
    d.sort((a,b) => a - b);
    
    for(let i = 0; i < d.length; i++){
        if(budget >= d[i]){ // 지원이 가능한지 체크
           budget -= d[i];   
           answer++;
        }else{
            break;
        }
        
    }            
    
    return answer;
}