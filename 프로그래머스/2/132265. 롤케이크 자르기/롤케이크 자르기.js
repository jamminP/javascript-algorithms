function solution(topping) {
  const n = topping.length;

  const rightCount = new Map();
  for (const t of topping) {
    rightCount.set(t, (rightCount.get(t) || 0) + 1);
  }

  let rightKinds = rightCount.size;
  const leftCount = new Map();
  let leftKinds = 0;
  let answer = 0;

  for (let i = 0; i < n - 1; i++) {
    const t = topping[i];

    rightCount.set(t, rightCount.get(t) - 1);
    if (rightCount.get(t) === 0) {
      rightCount.delete(t);
      rightKinds--; 
    }

    if (!leftCount.has(t)) {
      leftKinds++; 
      leftCount.set(t, 1);
    } else {
      leftCount.set(t, leftCount.get(t) + 1);
    }

    if (leftKinds === rightKinds) {
      answer++;
    }
  }

  return answer;
}
