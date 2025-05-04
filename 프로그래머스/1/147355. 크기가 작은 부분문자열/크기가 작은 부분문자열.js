function solution(t, p) {
    var answer = 0;
    
    if(p.length < 1 || p.length > 18)
        return false;
    
    if(p.lenght > t.length || t.lenght > 10000)
        return false;
     
    
    
    const pLenght = p.length; // p의 길이
    
    for (let i = 0; i <= t.length - pLenght; i++) {
        const sliced = t.slice(i, i + pLenght); // 연속된 부분 문자열
        if (sliced <= p) {
            answer++;
        }
    }
    
    return answer;
}