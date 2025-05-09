function solution(s) {
    const stack = [];

    for (let char of s) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop(); // 짝이면 제거
        } else {
            stack.push(char); // 아니면 넣기
        }
    }

    return stack.length === 0 ? 1 : 0;
}