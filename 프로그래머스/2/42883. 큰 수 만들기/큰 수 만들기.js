function solution(number, k) {
  const stack = [];

  for (let num of number) {
    // 스택이 비어있지 않고
    // 제거할 수 있는 횟수가 남아 있고
    // 현재 숫자가 스택의 마지막 숫자보다 크면 제거
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }

  // 아직 제거할 횟수가 남아 있다면 뒤에서 제거
  if (k > 0) {
    stack.splice(stack.length - k, k);
  }

  return stack.join('');
}
