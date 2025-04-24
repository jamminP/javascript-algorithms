function solution(s){
    var answer = true;

    let count = 0; // 문자열의 좌우를 판단할 변수
    
    for(let i = 0; i < s.length; i++){
        if(count < 0){
            return false;
        }
        
        if(s[i] === '(')
            count++; // ( 가 나오면 1을 더함.
        else
            count--; // ) 가 나오면 -1을 더함.
    }

    if(count != 0)
        answer = false;
    
    return answer;
}