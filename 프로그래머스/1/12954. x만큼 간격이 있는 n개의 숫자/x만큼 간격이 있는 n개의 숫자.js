function solution(x, n) {
    var answer = [];
    var data = x;
    for(let i = 0; i < n; i++){
        answer[i] = data;
        data += x;
    }
    
    return answer;
}

let x = 2;
let n = 5;

solution(x, n);