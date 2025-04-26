function solution(s) {
    var answer = ''; // 아스키코드 기준으로 정렬, 대문자는 소문자보다 작음.
    let temp = '';
    s = s.split('');
    
    
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s.length - i - 1; j++){
            if(s[j] < s[j+1]){
                temp = s[j];
                s[j] = s[j+1];
                s[j+1] = temp;
            }
        }
    }
    
    answer = s.join('');
    
    return answer;
}