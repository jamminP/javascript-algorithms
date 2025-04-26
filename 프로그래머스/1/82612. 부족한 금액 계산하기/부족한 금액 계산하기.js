function solution(price, money, count) {
    var answer = -1;
    let priceData = 0;
    
    for(let i = 1; i <= count; i++){
        priceData = (price * i);
        
        money -= priceData;
    }
    
    if(money === 0 || money > 0) 
        answer = 0;
    else if(money < 0)
        answer = -money;
    
    
    return answer;
}