function solution(n, arr1, arr2) {
    var answer = [];
    
    const data1 = arr1.map(arr => arr.toString(2).padStart(n, '0'));
    const data2 = arr2.map(arr => arr.toString(2).padStart(n, '0'));
    
    // 둘 중 하나라도 1이면 #, 아니면 " "
    for(let i = 0; i < n; i++){
        let dataString = "";
        
        let mapA = data1[i].split('');
        let mapB = data2[i].split('');
        
        for(let j = 0; j < n; j++){
            if(mapA[j] === "1" || mapB[j] === "1")
                dataString += "#"
            else
                dataString += " "
        }
        answer.push(dataString);
    }
         
    
    
    return answer;
}