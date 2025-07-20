function solution(n, m, section) {
    var answer = 0;
    let i = 0;
    
    while(i < section.length){
        const start = section[i]; // 페인트를 시작할 위치
        answer++;
        
        while(i < section.length && section[i] < start + m){
            i++;
        }    
    }
    
    return answer;
}