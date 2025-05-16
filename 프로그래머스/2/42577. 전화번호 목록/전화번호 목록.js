function solution(phone_book) {
    var answer = true;
    
//     const phoneBook = new Set(phone_book); // 같은 전화번호가 중복해서 들어있지 않게 하기 위해서.
    
//     for(mainNum of phoneBook){
//         let dataString = "";  
        
//         for(num of mainNum){
//             dataString += num;
            
//             if(mainNum !== dataString && phoneBook.has(dataString)){ // 자기 자신을 제외하고 && 접두사가 존재하는 경우. 자기자신의 일부가 어딘가 있는지 찾기.
//                 return false;
//             }
//         }
//     }
    
    
    phone_book.sort();
    
    for(let i = 0; i < phone_book.length - 1; i++){
        if(phone_book[i + 1].startsWith(phone_book[i])){
            answer = false;
            break;
        }
    }
    
    return answer;
}