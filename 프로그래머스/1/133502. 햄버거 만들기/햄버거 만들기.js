function solution(ingredient) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    // 끝 4개가 1,2,3,1인지 확인
    if (stack.length >= 4) {
      const n = stack.length;
      if (
        stack[n - 4] === 1 &&
        stack[n - 3] === 2 &&
        stack[n - 2] === 3 &&
        stack[n - 1] === 1
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  }

  return count;
}
