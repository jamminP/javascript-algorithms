function solution(k, score) {
    var answer = [];
    
    let count = 0;
    let Honor = [];
    for (data of score){
        if(count < k){
            Honor.push(data);
            count++;
            Honor.sort((a,b) => a - b);
            answer.push(Honor[0]);
            continue;
        }
        
        if(Honor[0] < data){
            Honor.shift();
            Honor.push(data);
            Honor.sort((a,b) => a - b);
        }
        answer.push(Honor[0]);
    }
    
    return answer;
}