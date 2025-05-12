function solution(s, n) {
    var answer = '';
    const sArray = s.split('');   
    
    if(s.length > 8000) // s의 길이는 8000이하입니다.
        return false;
    
    if(n < 1 && n > 25) // n은 1 이상, 25이하인 자연수입니다.
        return false;
    
    
    for(let i = 0; i < s.length; i++){
        let alpha = sArray[i].charCodeAt();
        
        if(alpha === 32){
            answer += ' '; // 공백이면 바로 대입.
        }else if(alpha >= 65 && alpha <= 90){ // 대문자.
            alpha += n; // n값 만큼 밀게한다.
            
            if(alpha > 90){
                alpha -= 26;
            }
            answer += String.fromCharCode(alpha);
        }else if(alpha >= 97 && alpha <= 122){ // 소문자
            alpha += n; // n값 만큼 밀게한다.
            
            if(alpha > 122){
                alpha -= 26;
            }
            answer += String.fromCharCode(alpha);
        }else
            return false; // s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
    }
    
    
    return answer;
}