function solution(prices) { // 주식가격이 담긴 배열 prices[]
    var answer = []; 
    const stack = []; // 가격이 떨어지지 않은 것을 담은 공간.
    
    if(prices.length < 2 || prices.length > 100000) // prices의 길이는 2 이상 100,000 이하입니다.
        throw new Error(`Error`); 
    
    //가격이 떨어지지 않은 시간초 구하기.
    for(let i = 0; i < prices.length; i++){
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            // 조건1. 스택의 길이가 1이상인 경우,
            // 조건2. 가격이 떨어진 경우, catch 하여 값을 뺄지말지 생각. & 작아진 배열크기로 나머지 구간도 돌면서 확인.
            const top = stack.pop();
            answer[top] = i - top;
        }
        stack.push(i); // 조건에 다 안걸리면 가격이 떨어지지 않는 것이니, stack에 넣기.
    }
    
    // 가격이 떨어지지 않은 값에 대하여 연산을 하여, answer에 대입 시작.
    while(stack.length){ // stack의 길이가 0이 아닐 때까지,
        const place = stack.pop();

        answer[place] = prices.length - place - 1;
    }
    
    return answer;
}

