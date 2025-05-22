function solution(k, score) {
    var answer = [];
    
    const data = [];
    
    score.reduce((acc,curr) => {
        if(data.length < k){
            data.push(curr);
            data.sort((a,b) => a-b);
            answer.push(data[0]);
        }    
        else{
            if(data[0] < curr){
                data.push(curr);
                data.shift();
                data.sort((a,b) => a-b);
                answer.push(data[0]);
            }else{
                answer.push(data[0]);
            }
        }
    },[]);
    
    return answer;
}