function solution(arr)
{
    var answer = [];

    if(arr.length > 1000000) // 배열 arr의 크기 : 1,000,000 이하의 자연수
        return false;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0 && arr[i] > 9) // 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
            return false;
        
        if(i === 0)
            answer.push(arr[i]);
        else{
            if(arr[i] === answer[answer.length - 1])
                continue;
            else
                answer.push(arr[i]);
        }
    }
    
    return answer;
}