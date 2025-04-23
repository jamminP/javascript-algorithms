function solution(phone_number) { // 01033334444
    var answer = '';
    
    let phoneNum = phone_number.split(''); // String을 배열로 변경
    
    for(let i = 0; i < (phone_number.length) - 4; i++){
        phoneNum[i] = '*'; // 문자열인 String에서 배열로 되었기 때문에 배치가능
    }
    
    answer = phoneNum.join(''); // ''으로 하여 빈칸없이 합친다.
    
    return answer;
}