function solution(array, commands) {
    var answer = [];
    
    // i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수는?
    
    for(num of commands){ // num으로 [2,5,3] 이런식으로 들어온다.
        const dataString = array.slice(num[0] - 1, num[1]).sort((a,b) => a - b);
        answer.push(dataString[num[2] - 1]);
    }
    
    return answer;
}