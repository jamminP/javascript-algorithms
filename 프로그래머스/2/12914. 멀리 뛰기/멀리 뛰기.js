function solution(n) {
    var answer = 0;
    
    const MOD = 1234567;
    
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    a = 1;
    b = 2;
    
    for(let i = 3; i <= n; i++){
        let temp = (a + b) % MOD;
        a = b;
        b = temp;
    }
    
    answer = b;
    
    return answer;
}