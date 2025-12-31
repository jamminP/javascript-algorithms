function solution(queue1, queue2) {
    const q = queue1.concat(queue2);
    const n = queue1.length;
    
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    const sum2 = queue2.reduce((a, b) => a + b, 0);
    const total = sum1 + sum2;
    
    // 전체 합이 홀수면 불가능
    if (total % 2 !== 0) return -1;
    
    const target = total / 2;
    
    let left = 0;        // queue1의 시작
    let right = n;       // queue2의 시작
    let count = 0;
    
    // 최대 이동 횟수 (안전장치)
    const maxCount = n * 3;
    
    while (count <= maxCount) {
        if (sum1 === target) {
            return count;
        }
        
        if (sum1 > target) {
            // queue1에서 pop
            sum1 -= q[left];
            left++;
        } else {
            // queue2에서 pop → queue1으로
            sum1 += q[right];
            right++;
        }
        
        count++;
    }
    
    return -1;
}
