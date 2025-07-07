function solution(progresses, speeds) {
    var answer = [];
    
    // 앞의 기능이 구현되어야 뒤에 기능도 따라서 나올 수 있기에 Queue로 문제 해결.
    while(progresses.length !== 0 ){
        let count = 0;
        
        for(let i = 0; i < progresses.length; i++){
            progresses[i] = progresses[i] + speeds[i];
        }
        
        while(progresses.length > 0 && progresses[0] >= 100){
            progresses.shift();
            speeds.shift();
            count++;
        }
        
        if(count !== 0){
            answer.push(count);
        }
    }
    
    return answer;
}