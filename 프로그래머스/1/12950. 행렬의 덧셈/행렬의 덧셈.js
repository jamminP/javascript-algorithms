function solution(arr1, arr2) {
    var answer = [[]];
    
    console.log(arr1.length, arr2.length);
    
    if(arr1.length > 500 || arr2.length > 500)
        return [];
    else if(!(arr1.length === arr2.length))
        return [];
    
    answer = arr1.map((row, i) => 
        row.map((col, j) => col + arr2[i][j]));
    
    return answer;
}