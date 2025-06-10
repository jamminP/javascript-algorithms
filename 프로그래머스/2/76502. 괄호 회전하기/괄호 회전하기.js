function solution(s) {
    var answer = 0;
    
    const arr = s + s; // 왼쪽으로 x만큼 이동하기 때문에 그냥 이어 붙이기.
    
    for(let i = 0; i < s.length; i++){
        let stack = [];
        let basket = arr.slice(i , s.length + i);
        let isTrue = true;
        
        for(let j = 0; j < basket.length; j++){
            if(basket[j] === '{' || basket[j] === '(' || basket[j] === '[')
                stack.push(basket[j]);
            else{
                if(stack.length === 0) { 
                    isTrue = false;
                    break;
                }
                let popData = stack.pop();
                
                if((popData === '(' && basket[j] !== ')') ||
                    (popData === '{' && basket[j] !== '}') ||
                    (popData === '[' && basket[j] !== ']')){
                    isTrue = false;
                    break;}
            }
        }
         if(isTrue && stack.length === 0){
            answer++;
        }
    }
    
    return answer;
}