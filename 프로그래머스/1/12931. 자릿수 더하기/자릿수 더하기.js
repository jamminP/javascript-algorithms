let n = 987;
solution(n);

function solution(n)
{
    var answer = 0;
    var i = 0;
    var digit = n;
    // n을 10^n만큼 나누는 작업을 한다. 그럼 N의 자릿수를 우선 알아야 한다.
    while(1){
        digit = parseInt(n / Math.pow(10, i));

        if(digit === 0)
            break;

        i++;
    }

    // N의 값은 10^i의 자릿수를 가짐. ex) 123인 경우, 3자리 인 것을 알수 있음.

    for(let j = 0; j < i; j++){
        answer += n % 10; // 10으로 나누고 나머지 값을 더하기
        n = parseInt(n/10); // 이후 자릿수를 내리기 위해 10으로 나눔.
    }

    console.log(answer);

    return answer;
}