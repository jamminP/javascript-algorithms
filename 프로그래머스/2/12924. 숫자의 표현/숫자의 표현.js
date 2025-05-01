function solution(n) {
    var answer = 0;
    let sum;
    let count = 0; 
    
    if(n < 1 || n > 10000)
        throw new Error('Error');
    
    // 자연수 n을 표현하는 for문 사용하여 연산하기.
    for(let i = 1; i <= n / 2; i++){
        sum = 0;
        let j = i;
        while(sum < n){
            sum += j;
            j++;
        }
        
        if(sum === n)
            count++;
    }    
    
    answer = count + 1;
    
    return answer;
}