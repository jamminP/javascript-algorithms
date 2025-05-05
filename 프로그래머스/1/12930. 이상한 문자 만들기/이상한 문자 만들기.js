function solution(s) {
    var answer = '';
    
    const dataSet1 = s.split(' '); // 공백기준의 데이터셋 구성 {try},{hello},{world}
    const arr = [];
    for(let i = 0; i < dataSet1.length; i++){
        const dataSet2 = dataSet1[i].split(''); // 데이터 나누기
        let count = 0; // 짝수 홀수 구분자
        
        for(let j = 0; j < dataSet2.length; j++){
            if(count % 2 === 0) // 짝수인 경우, 
                dataSet2[j] = dataSet2[j].toUpperCase();
            else // 홀수인 경우,
                dataSet2[j] = dataSet2[j].toLowerCase();
            
            count++;
        }  
        arr[i] = dataSet2.join('');
    }
    
    answer = arr.join(" ");
        
    return answer;
}