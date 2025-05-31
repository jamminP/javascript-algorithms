function solution(n, words) {
    var answer = [];

    const set = new Set();
    
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let prev = words[i - 1];
        
        if(set.has(word)){
            let num = (i % n) + 1;
            let turm = Math.floor(i / n) + 1;     
            return [num, turm];
        }
        
        if(i > 0 && word[0] !== prev[prev.length - 1]){ // 뒷글자의 맨 앞 char과 앞글자의 마지막 char 비교
            let num = (i % n) + 1;
            let turm = Math.floor(i / n) + 1;     
            return [num, turm];
        }
        
        
        set.add(word);
    }
    
    answer = [0,0];

    return answer;
}