function solution(n, k) {
  const answer = [];
  const numbers = Array.from({ length: n }, (_, i) => i + 1);

  // factorial 미리 계산
  const fact = Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) {
    fact[i] = fact[i - 1] * i;
  }

  k--; // 0-based index

  for (let i = n; i >= 1; i--) {
    const idx = Math.floor(k / fact[i - 1]);
    answer.push(numbers[idx]);
    numbers.splice(idx, 1);
    k %= fact[i - 1];
  }

  return answer;
}
