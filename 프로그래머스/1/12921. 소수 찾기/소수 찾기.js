function solution(n) {
 
    const isPrime = Array(n + 1).fill(false);
    isPrime[0] = isPrime[1] = true; 

    for (let i = 2; i * i <= n; i++) {
        if (!isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = true;
            }
        }
    }

    return isPrime.filter(v => !v).length;
}
