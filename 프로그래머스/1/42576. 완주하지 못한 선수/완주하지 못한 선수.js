function solution(participant, completion) {
    var answer = '';
    
    if(participant.length < 1 || participant.length > 100000)
        return false;
    
    if(participant.length - completion.length !== 1)
        return false;
    
    if(!participant.every((name => /^[a-z]{1,20}$/.test(name))))
        return false;
    
    participant.sort();
    completion.sort();
    
    console.log(participant);
    console.log(completion);
    
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            break;
        }
    }
    
    return answer;
}