function solution(sizes) {
    var answer = 0;
    
    if(sizes < 1 || sizes > 10000)
        return false;
    
    // [w,h] 일때, w 또는 h 한쪽으로 큰 값을 배치하는 방향
    // 작은 값을 w, 큰 값을 h에 저장시켜서 진행.
    let wMax = 0;
    let hMax = 0;
    let temp = 0;
    
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] > sizes[i][1]){
            temp = sizes[i][0];
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = temp;
        }
        
        if(wMax < sizes[i][0]){
            wMax = sizes[i][0];
        }
        
        if(hMax < sizes[i][1]){
            hMax = sizes[i][1];
        }
    }
    
    answer = wMax * hMax;
    
    return answer;
}