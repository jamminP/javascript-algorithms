function solution(food) {
    var answer = '';
    
    food.shift();
    
    for(let i = 0; i < food.length; i++){
        for(let j = 0; j < Math.floor(food[i]/2); j++){
               answer += (i + 1);
        }
    }
    answer += 0;
    
    for(let i = food.length - 1; i >= 0; i--){
        for(let j = 0; j < Math.floor(food[i]/2); j++){
               answer += (i + 1);
        }
    }
    
    return answer;
}