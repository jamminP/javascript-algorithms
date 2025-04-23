function solution(s) {
    var answer = '';
    
    let i = 0; 
    
    let numbers = s.split(' '); // 띄어쓰기로 나누어져 있는 값을 기준으로 배열에 삽임.
    
    numbers = numbers.map(Number) // map 함수를 사용하여 각각에 split으로 삽입된 string타입을 number 타임으로 변경
    
    let min = numbers[i], max = numbers[i]; // 최소값, 최대값
    
    //최소값 최대값 찾는 로직
    for(; i < numbers.length; i++){
        if(max < numbers[i]) // 최대값 찾기
            max = numbers[i];
        
        if(min > numbers[i]) // 최소값 찾기
            min = numbers[i];
    }
    
    answer = ''.concat(min, ' ', max); // 빈문자로 concat 사용, 문제는 앞이 최소값 최대값이 나와야 하면 구분은 공백이므로 중간에 공백 삽입
    
    return answer;
}