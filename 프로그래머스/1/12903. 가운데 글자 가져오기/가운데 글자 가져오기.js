function solution(s) {
    var answer = '';
    let stringLeng = s.length;
    
    if(s.length % 2 === 0){ // 길이가 짝수이면,
        answer = s[stringLeng/2 - 1] + s[stringLeng/2]
    }else{ // 길이가 홀수인 경우,
        answer = s[Math.floor(stringLeng/2)];
    }
    
    return answer;
}