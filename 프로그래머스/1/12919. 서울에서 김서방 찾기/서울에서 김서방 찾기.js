function solution(seoul) { // ["Jane", "Kim"] 
    var answer = '';
    var place = 0;
    
    for (place in seoul){
        if(seoul[place] === 'Kim')
            break;
    }
    
    answer = `김서방은 ${place}에 있다`;
    
    return answer;
}