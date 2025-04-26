function solution(A,B){
    var answer = 0;

    if(A.length > 1000 || B.length > 1000)
        return false;
    
    // A 배열에서 가장 작은 값과 B 배열에서 가장 큰 값을 곱함.
    // 가장 작은 값 끼리 곱을 하다보면, 마지막에 큰 값끼리 곱을 하게 되어 값이 크게 됨.
    // 버블 정렬로 하니 시간복잡도 O(N^2)로 실패가 됨. 
//     // A 배열 정렬
//     for(let i = 0; i < A.length; i++){
//         for(let j = 0; j < A.length - i - 1; j++){
//             if(A[j] > 1000)
//                 return false;
                
//             if(A[j] > A[j+1]){
//                 let temp = A[j];
//                 A[j] = A[j+1];
//                 A[j+1] = temp;
//             }
//         }
//     }
    
//     // B 배열 정렬 (A 배열 정렬의 부등호 하나만 반대)
//     for(let i = 0; i < B.length; i++){
//         for(let j = 0; j < B.length - i - 1; j++){
//             if(B[j] > 1000)
//                 return false;
            
//             if(B[j] < B[j+1]){
//                 let temp = B[j];
//                 B[j] = B[j+1];
//                 B[j+1] = temp;
//             }
//         }
//     }
    
    // 시간 복잡도 문제로 JS내장 함수 sort() 사용
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    
    // 배열 인덱스를 순회해서 느리게 판정이 되는 건지 확인
    // for(let a in A){
    //     answer += (A[a] * B[a]);
    // }

    //일반 for문 사용.
    for(let i = 0; i < A.length; i++){
        answer += (A[i] * B[i]);
    }
    
    return answer;
}