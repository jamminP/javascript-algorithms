function solution(n) {
    var answer = 0;
    let count1 = 0; // n의 1의 갯수
    let data2 = n + 1; // 원본 저장
    
    while(n >= 1){ // n이 1이 아닐 때 까지,
        const data = n % 2;
        n = Math.floor(n/2);
        if(data === 1){
            count1++;
        }
    }
    
    // count1: n의 1의 갯수
    while(1){
        let count2 = 0;
        let data3 = data2;
        while(data3 >= 1){ // n이 1이 아닐 때 까지,
            const data = data3 % 2;
            data3 = Math.floor(data3/2);
            if(data === 1){
                count2++;
            }
        }
        
        if(count1 === count2)
            break;
        
        data2++;
    }
    
    answer = data2;
    
    return answer;
}