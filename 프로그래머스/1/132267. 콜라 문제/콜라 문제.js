function solution(a, b, n) {
    var answer = 0;
    let remain = 0;

    //n = 콜라의 갯수, a = 빈 병당 , b = x개의 콜라룰 줌. 
    while (n >= a) {
        const exchanged = Math.floor(n / a) * b;
        answer += exchanged;
        n = exchanged + (n % a);
    }
    
    return answer;
}