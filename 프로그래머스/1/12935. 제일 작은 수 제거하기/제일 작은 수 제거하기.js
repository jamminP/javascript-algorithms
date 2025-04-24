function solution(arr) { // [4,3,2,1]
    var answer = [];
    
    if(arr.length === 1){
        answer.push(-1);
        return answer;
    }
    
    // 가장 작은 수를 제거
    let min = arr[0]; // 처음수를 가장 작은 수로 지정.
    let minWhere = 0; // 가장 작은 배열 위치

    for (let a in arr){ 
        if(min > arr[a]){
            min = arr[a];
            minWhere = a;
        }
    }
    console.log(minWhere);
    arr.splice(minWhere,1);
    
    answer = arr;
    
    return answer;
}