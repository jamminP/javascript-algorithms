function solution(k, tangerine) {
    var answer = 0;
    
    const map = new Map();
    
    for(data of tangerine){
        map.set(data, (map.get(data) || 0) + 1 );
    }
    
    const sortData = Array.from(map.values()).sort((a,b) => b - a);
    
    for (count of sortData){
        k -= count;
        answer++;
        if(k <= 0)
            break;
    }
    
    return answer;
}