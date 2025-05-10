function solution(s) {
    var answer = [];
    
    for(let i = 0; i < s.length; i++){
        const data = s.charAt(i); // 값
        const firstIndex = s.indexOf(data);
        
        
        if(s.indexOf(s[i]) === i){
            answer.push(-1);
        }else{
            answer.push(i - s.lastIndexOf(data, i - 1));
        }
    }
    
    return answer;
}