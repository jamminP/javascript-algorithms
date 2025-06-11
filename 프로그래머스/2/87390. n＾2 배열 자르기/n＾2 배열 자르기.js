function solution(n, left, right) {
    var answer = [];
    
    let row = 0; // 층수
    let col = 0; // 몇 번째 인지
    
    for(let i = left; i <= right; i++){
        row = Math.floor(i / n) + 1;
        col = i % n + 1;
        
        answer.push(Math.max(row,col));
    }

    return answer;
}