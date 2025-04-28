function solution(s) {
    var answer = [];
    
    if(s.length < 1 || s.length > 150000)
        return false;
    
    let checkOne = 0;
    
    for(let z = 0; z < s.length; z++){
        if(s[z] === '0'){
            checkOne++;
        }
        
        if(checkOne === s.length)
            return false;
    }
    
    // 1. s의 모든 0을 제거
    // 2. s의 길이가 c이면, n을 "c를 2진겁으로 표현한 문자열로 바꿈"
    // 3. s의 값이 '1'이 될때 까지를 반복.
    //  return 할 값: [이진 변환 횟수, 제거된 모든 0의 갯수]
    let change = 0; // 이진 변환 횟수
    let deleteZero = 0; // 제거된 모든 0의 갯수
    while(s !== '1'){
        let beforeLength = s.length;
        
        // 0을 제거
        s = s.split('').filter(c => c !== '0').join('');
        
        // 제거된 0 개수 추가
        deleteZero += beforeLength - s.length; // 전의 길이와 현재 길이를 빼서 제거 된 0의 갯수를 구함.
        
        // 길이를 2진수로 변환
        s = s.length.toString(2);
        
        change++;
    }
    
    answer = [change, deleteZero];
    return answer;
}