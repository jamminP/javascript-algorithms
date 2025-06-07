function solution(elements) {
    var answer = 0;
    
    const set = new Set(); // 중복되는 값을 없애기 위해서 Set를 사용.
    let length = elements.length;
    let dataString = elements.concat(elements); // 원형이기 때문에 둘을 이어붙임.
    let sum = 0;
    let arr = [];
    // [7, 9, 1, 1, 4, 7, 9, 1, 1, 4] 로 이루어짐. start

    
    for(let i = 0; i < length; i++){
        // i가 start값.
        set.add(dataString[i]);
        for(let j = 1; j < length+1; j++){
            arr = dataString.slice(i, i + j);
            set.add(arr.reduce((a,b) => a + b , 0));
            
        }
    }
    
    answer = set.size;
    
    
    return answer;
}