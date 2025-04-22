function solution(n) {
    var answer = 0;
    var temp = 0;
    var index = n.toString().split('').map(Number);
    
    for(let i = 0; i < index.length; i++){
        for(let j = 0; j < index.length - i; j++){
            if(index[j] < index[j+1]){
                temp = index[j];
                index[j] = index[j+1];
                index[j+1] = temp;
            }
        }
    }
    console.log(index);
    
    answer = Number(index.join(''));
    
    return answer;
}

var n = 118372;
solution(n);