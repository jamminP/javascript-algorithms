function solution(numbers) {
    var answer = [];

    if(numbers.length < 2 && numbers.length > 100) // numbers의 길이는 2 이상 100 이하입니다.
        return false;
    
    if(!numbers.every(number => number >= 0 && number <= 100)) // numbers의 모든 수는 0 이상 100 이하입니다.
        return false;
    
    let sum;
    
    for(let i = 0; i < numbers.length; i++){
        const data = numbers[i]; 
        
        for(let j = 0; j < numbers.length; j++){ // j값이 같은 이유는 원본 배열을 수정하지 않기 때문.
            sum = numbers[i] + numbers[j];
            if(i === j) // 서로 다른 인덱스에 있는 값을 더해야 하기 때문에.
                continue;
            
            if(!answer.includes(sum)) // 안에 들어있는 값이 아직 넣어지지 않는 경우,
                answer.push(sum);
        }
    }
    
    answer.sort((a,b) => a - b);
    
    return answer;
}