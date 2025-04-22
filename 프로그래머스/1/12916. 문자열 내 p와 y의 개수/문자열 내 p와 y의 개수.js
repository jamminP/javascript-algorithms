function solution(s){
    var answer = true;
    var p = 0;
    var y = 0;
    s = s.toLowerCase();

    for(let i = 0; i < s.length; i++){
        if(s[i] === 'p')
            p++;
        else if(s[i] === 'y')
            y++;
    }
    
    if( (p - y) !== 0){
        answer = false;
    }
    
    return answer;
}

let s = '';
solution(s);