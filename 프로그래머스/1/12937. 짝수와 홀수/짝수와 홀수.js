function solution(num) {
    var answer = '';
    
    if(num % 2 ===0)
        answer = 'Even';
    else
        answer = 'Odd';
    
    return answer;
}

let num;
solution(num);