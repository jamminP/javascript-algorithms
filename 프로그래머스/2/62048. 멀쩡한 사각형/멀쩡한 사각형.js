function solution(W, H) {
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }
    
    return W * H - W - H + gcd(W, H);
}
