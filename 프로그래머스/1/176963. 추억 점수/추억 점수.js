function solution(name, yearning, photo) {
    var answer = [];
    
    let nameMap = new Map();
    
    for(let i = 0; i < name.length; i++){
        nameMap.set(name[i], yearning[i]);
    }
    
    
    for(let j = 0; j < photo.length; j++){
        let sum = 0;
        
        for(let k = 0; k < photo[j].length; k++){
            if(nameMap.has(photo[j][k]))
                sum += nameMap.get(photo[j][k]);
        }
        
        answer.push(sum);
    }    
    
    return answer;
}