function solution(answers) {
    var answer = [];
    
    const supo = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    let supoSum = [0,0,0];
    
    for(let i = 0; i < supo.length; i++){
        
        for(let j = 0; j < answers.length; j ++){
            if(supo[i][j % (supo[i].length)] === answers[j])
                supoSum[i]++;
        }
    }
    
    const maximum = Math.max(supoSum[0], supoSum[1], supoSum[2]);
    
    for(let k = 0; k < 3; k++){
        if(supoSum[k] === maximum){
            answer.push(k+1);
        }
    }
    
    return answer;
}