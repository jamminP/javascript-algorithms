function solution(participant, completion) {
    var answer = '';
    
    if(participant.length < 1 || participant.length > 100000)
        return false;
    
    if(participant.length - completion.length !== 1)
        return false;
    
    if(!participant.every((name => /^[a-z]{1,20}$/.test(name))))
        return false;
    
    // 1. sort()를 사용한 방법
//     participant.sort();
//     completion.sort();
    
//     console.log(participant);
//     console.log(completion);
    
//     for(let i = 0; i < participant.length; i++){
//         if(participant[i] !== completion[i]){
//             answer = participant[i];
//             break;
//         }
//     }
    
    const map = new Map(); // map을 생성.
    
    for (const namePar of completion){
        map.set(namePar, (map.get(namePar) || 0) + 1); 
        // "namePar" : (이렇게 한 이유는 get이 없으면 undefined를 return 하기 때문) 
        // || 연산자는 a || b 일경우, a가 T이면 a값 반환 / a가 F이면 b값 반환.
    }
    
    // completion 기준 map생성 완료. { 'eden' => 1, 'kiki' => 1 }
    
    for(const nameCom of participant){
        // 조건1. key값이 없거나,
        // 조건2. value 값이 0인 경우, 
        if(!map.has(nameCom) || map.get(nameCom) === 0){
            answer += nameCom;
            break; // 1명 이기 때문에 loop문을 바로 종료 시킴. 
        }
        
        map.set(nameCom, map.get(nameCom) - 1); // 값이 새로 생기는것이 아닌 새 값으로 교체가 이루어짐.
    }
    
    return answer;
}