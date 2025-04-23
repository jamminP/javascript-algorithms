function solution(x) {
    var answer = true;
    var number = x;
    var sum = 0;
    
    while(x > 0){
        sum = Math.floor(sum + (x % 10));
        Math.floor(x /= 10);
    }
    
    console.log(sum);
    
    if(number % sum === 0){
        answer = true;
    }else answer = false;
    
    
    
    return answer;
}