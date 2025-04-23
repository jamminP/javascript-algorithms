function solution(num) {
    var answer = 0;
    var count = 0;
    
    if(num === 1)
        return 0;
    
    while(num > 1){ // 입력되는 값이 2가 될 때까지 반복이 되기 때문에
        if(count === 500){
            return -1;
        }
        
        if(num % 2 === 0)
            num /= 2;
        else
            num = num * 3 + 1;
        
        count++;
    }
    
    return answer = count;
}