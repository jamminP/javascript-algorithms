function solution(clothes) {
    var answer = 1;
    
    let clothesMap = new Map();
    
    for(let i = 0; i < clothes.length; i++){
        const type = clothes[i][1];
        clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
    }
    
    for( let count of clothesMap.values() ){
        answer *= (count + 1);
    }
    
    answer -= 1;
    
    return answer;
}