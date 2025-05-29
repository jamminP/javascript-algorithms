function solution(X, Y) {
    var answer = '-1';
    let leftX = [...X];
    let rigthY = [...Y];
    let dataString = [];
    
    const left = new Map();
    const right = new Map();
    
    for (data of leftX){
        left.set(data, (left.get(data) || 0) + 1);
    }
    
    for (data of rigthY){
        right.set(data, (right.get(data) || 0) + 1);
    }
    
    console.log(left, right);
    
    for(let i = 0; i <= 9; i++){
        let char = i.toString();
        
        if(left.has(char) && right.has(char)){
            let loop = Math.min(left.get(char) , right.get(char));
            for(let j = 0; j < loop; j++){
                dataString.push(char);
            }
        }
    }
    
    if(dataString.length === 0)
        return "-1"
    
    dataString = dataString.map(data => Number(data)).sort((a,b) => b - a).join('');
    
    if(dataString[0] === '0')
        return "0";
    
    answer = dataString.toString();
    
    return answer;
}