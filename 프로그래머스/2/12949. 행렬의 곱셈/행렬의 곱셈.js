function solution(arr1, arr2) {
    var answer = [[]];
    
    // arr1의 행열, arr2의 행열 구하기.
    const row = arr1.length;
    const col = arr2[0].length;
    const n = arr1[0].length;
    
    
    const arr3 = Array.from({length: row}, () => Array(col).fill(0));
    
    for(let i =0; i < row; i++){
        for(let j = 0; j < col; j++){
            let sum = 0;
            for(let k = 0; k < n; k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            
            arr3[i][j] = sum;
        }
    }
    
    return arr3;
}