function solution(a, b) {
    var answer = 1234567890;
    let sum = 0;
    
    for (i in a){
        sum += (a[i] * b[i]);    
    }
    
    answer = sum;
    
    return answer;
}