function solution(brown, yellow) {
    var answer = [];
    
    let row = 0;
    let col = 3;
    const sum = brown + yellow;
    
    for (let row = 3; row <= sum; row++) {
        if (sum % row !== 0) continue;

        let col = sum / row;

        if ((row - 2) * (col - 2) === yellow) {
            answer.push(Math.max(row, col));
            answer.push(Math.min(row, col));
            break;
        }
    }
    
    return answer;
}