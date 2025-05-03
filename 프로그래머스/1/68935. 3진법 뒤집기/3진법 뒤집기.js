function solution(n) {
    var answer = 0;
    let third = []; // 반전된 3진법 들어가 있을 배열셋
    let pushData = 0;
    let popData = 0;
    let count = 0;
    
    if(n < 1 || n > 100000000)
        return false;
    
    while(n >= 3){ // 3보다 작아지면 더이상 남지 않기 때문.
        pushData = Math.floor(n % 3);
        third.push(pushData); // 어차피 앞뒤 반전 할 것이기 때문에 스택처럼 쌓기 시작.
        n = Math.floor(n / 3);
    }
    
    third.push(n); // 마지막에 남은 데이터를 넣기 위해
    
    while(third.length){ // pop을 통해 데이터를 추출 시, 길이가 0이 안될때까지 
        popData = third.pop();
        
        answer = answer + (popData * (Math.pow(3,count)));
        
        count++;
    }
    
    return answer;
}