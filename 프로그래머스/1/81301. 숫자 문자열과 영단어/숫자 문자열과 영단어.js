function solution(s) {
    var answer = 0;

    const dataString = s.split('');
    let subString = '';

    // 숫자면 바로 넘기기. 숫자가 아니면 isString에서 false가 아닌 경우에 합치는 걸루
    for(num of dataString){
        if(Number.isInteger(Number(num))){ // 숫자라면? 바로 추가
            if(answer === 0){ // 숫자가 0이라면? 자기 대입
                answer = num;
                continue;
            }
            
            answer += num; // 숫자가 0이 아니면 바로 뒤에 붙이기
        }
        else{ // 숫자가 아닌 경우,
            subString += num; // 영어 단어 만들기 시작.
            
            if(isString(subString)){ // switch문에 false이 아닌 값이 온다면?
                answer += isString(subString);
                console.log(subString);
                subString = ''; // 초기화
            }
        }
    }
    
    return Number(answer);
}

function isString(data){
    
    switch(data){
        case 'zero':
            return '0';
        case 'one':
            return '1';
        case 'two':
            return '2';
        case 'three':
            return '3';
        case 'four':
            return '4';
        case 'five':
            return '5';
        case 'six':
            return '6';
        case 'seven':
            return '7';
        case 'eight':
            return '8';
        case 'nine':
            return '9';
        default:
            return false;
    }
}