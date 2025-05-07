function solution(n) {
    var answer = 0;
    const MOD = 1234567;
    
    if(n < 2 || n > 100000)
        return false;
    
    const fib = [];
    fib[0] = 0;
    fib[1] = 1;
    
    for(let i = 2; i <= n; i++){
        fib[i] = (fib[i-1] + fib[i-2]) % MOD;
    }
    
    answer = fib[n];
    
    return answer;
}