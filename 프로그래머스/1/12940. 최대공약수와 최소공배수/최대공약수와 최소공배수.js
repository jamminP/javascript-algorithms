function solution(n, m) {
    var answer = [];
    
    if (n < 1 || n > 1000000 || m < 1 || m > 1000000)
        return false;
    
    let min = 0; // 최소공배수
    let max = 0; // 최대공약수
    
    // 최대공약수 구하기
    if (n < m) {
        for (let i = 1; i <= n; i++) {
            if (m % i === 0 && n % i === 0) {
                max = i;
            }
        }
    } else if (n > m) {
        for (let i = 1; i <= m; i++) {
            if (n % i === 0 && m % i === 0) {
                max = i;
            }
        }
    } else { // n === m
        max = n;
    }
    
    // 최소공배수 구하기
    min = (n * m) / max;
    
    answer.push(max, min);
    
    return answer;
}