function solution(arr, divisor) { // arr = [5,9,7,10], divisor = 5
    
    let answer = [];
    let i = 0;
    
    for (let a of arr){
        if( a % divisor === 0){
            answer[i] = a;
            i++;
        }
    } 
    
    if(i === 0){
        answer[i] = -1
        
        return answer;
    }
    
    // 2, 36, 1, 3
    
    for(let j = 0; j < i; j++){
        for(let k = 0; k < i; k++){
            if(answer[k] > answer[k+1]){
                let temp = answer[k];
                answer[k] = answer[k+1];
                answer[k+1] = temp;
            }
        }
    }
    
    
    return answer;
}