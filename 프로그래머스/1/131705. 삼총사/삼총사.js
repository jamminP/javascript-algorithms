function solution(number) {
    var answer = 0;
    
    if(number.length < 3 || number.length > 13)
        return false;
    
    const arrLen = number.length; // 배열의 길이
    const studentArr = [...number]; // [-2, 3, 0, 2, -5]
    
    for(let i = 0; i < arrLen - 2; i++){
        for(let j = i + 1; j < arrLen - 1; j++){ // 기준점이 i보다 1 늘어남.
            for(let k = j + 1; k < arrLen; k++){ // 기준점이 j보다 1 늘어남.
                const sum = studentArr[i] + studentArr[j] + studentArr[k]
                if(sum === 0)
                    answer++;
            }   
        }
    }
    
    return answer;
}