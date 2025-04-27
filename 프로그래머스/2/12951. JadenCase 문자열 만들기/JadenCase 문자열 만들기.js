function solution(s) {
    var answer = '';
    
    if(s.length === 0 && s.length > 200)
        return false;
        
    // 첫문자를 대문자로, 숫자인 경우에는 그대로 진행.
    answer = s.split(' '); // 공백 문자를 기준으로 띄어쓰기. 공백이 연속으로 나와도 ok
    let arr = []; // 빈배열 선언.
    
    for(let i = 0; i < answer.length; i++){
        arr[i] = answer[i].split(""); // 문자열을 나눠서 arr에 삽입
        let numberCount = 0; // 각 문자열의 크기만큼 숫자가 카운트 되면 조건 실패
        
        for(let j = 0; j < arr[i].length; j++){
            if(!isNaN(arr[i][j])){ // 숫자로만 이루어진 단어인지 체크
                numberCount++
                
                if(numberCount === arr[i].length)
                    return false;
            }
            
            if(j === 0)
                arr[i][j] = arr[i][j].toUpperCase();
            else
                arr[i][j] = arr[i][j].toLowerCase();
        }
        
        
        answer[i] = arr[i].join('');
    }
    
    answer = answer.join(" ");
    
    return answer;
}