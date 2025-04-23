function solution(numbers) { //numbers = 0~9의 수가 들어있는 정수 배열
    var answer = 0;
    let numArr = [[0,1,2,3,4,5,6,7,8,9], []];
    
    for(let i = 0; i < 10; i++){
        
        for(let j = 0; j < 10; j++){
            if(numbers[i] === numArr[0][j])
                numArr[1][j] = true;
        }
    }
    
    for(let q = 0; q < 10; q++){
        if(numArr[1][q] != true){
            answer += numArr[0][q];
        }
    }
    
    return answer;
}