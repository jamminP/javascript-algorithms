const answer = [];

function solution(n) {
    
    move(n,1,2,3);
    return answer;
}

function move(k, from, temp, to){
    if(k === 0)
        return;
    
    move(k-1, from, to, temp);
    answer.push([from, to]);
    move(k-1, temp, from, to);
}