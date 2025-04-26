function solution(s) {
    var answer = true;
    
    if(s.length === 4 || s.length === 6){
        s = s.split('');
    
        for(let a of s){
            if(isNaN(a)){
                answer = false
                break;
            }
        }
    }else{
        answer = false;
    }
    return answer;
}