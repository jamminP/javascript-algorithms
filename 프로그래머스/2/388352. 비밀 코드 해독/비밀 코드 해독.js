function solution(n, q, ans) {
  let result = 0;
  const m = q.length;

  // 1 ~ n 배열 생성
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  // 조합 생성 함수
  function combination(start, selected) {
    // 5개 뽑았으면 검사
    if (selected.length === 5) {
      if (isValid(selected)) {
        result++;
      }
      return;
    }

    for (let i = start; i < n; i++) {
      selected.push(numbers[i]);
      combination(i + 1, selected);
      selected.pop();
    }
  }

  // 모든 질의 조건 만족하는지 검사
  function isValid(candidate) {
    for (let i = 0; i < m; i++) {
      let count = 0;
      for (let num of q[i]) {
        if (candidate.includes(num)) count++;
      }
      if (count !== ans[i]) return false;
    }
    return true;
  }

  combination(0, []);
  return result;
}