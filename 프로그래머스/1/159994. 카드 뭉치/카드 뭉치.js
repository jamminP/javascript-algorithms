function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    let whereData;
    
    for(data of goal){
        if(cards1[0] === data){
            cards1.shift();
        }else if(cards2[0] === data){
            cards2.shift();
        }else{
            return "No";
        }
    }
    
    return answer;
}