function solution(order) {
  const n = order.length;
  const stack = [];      // 보조 컨테이너 벨트 (스택)
  let cur = 1;           // 메인 벨트에서 가져올 다음 상자 번호
  let count = 0;         // 트럭에 실은 상자 개수

  for (let i = 0; i < n; i++) {
    const target = order[i]; // 이번에 트럭에 실어야 할 상자 번호

    // 메인 벨트에서 상자를 가져와 보조 벨트에 쌓기
    while (cur <= n && cur <= target) {
      stack.push(cur);
      cur++;
    }

    if (stack.length > 0 && stack[stack.length - 1] === target) {
      stack.pop();
      count++;
    } else {
      break;
    }
  }

  return count;
}
