function solution(weights) {
  // 몸무게별 개수
  const count = new Map();
  for (const w of weights) {
    count.set(w, (count.get(w) || 0) + 1);
  }

  // 조합 nC2
  const comb2 = (n) => (n * (n - 1)) / 2;

  let answer = 0;

  // 1) 같은 무게(같은 거리 2-2, 3-3, 4-4 가능)
  for (const n of count.values()) {
    answer += comb2(n);
  }

  // 2) 서로 다른 거리 비율 케이스 (중복 카운트 방지 위해 "작은 무게 -> 큰 무게"로만 셈)
  // (a, b)에서 b가 정수로 딱 떨어질 때만 카운트
  const ratios = [
    [3, 2], // a * 3/2 = b  (2↔3)
    [2, 1], // a * 2/1 = b  (2↔4)
    [4, 3], // a * 4/3 = b  (3↔4)
  ];

  for (const [num, den] of ratios) {
    for (const [a, ca] of count.entries()) {
      // b = a * num / den
      if ((a * num) % den !== 0) continue;
      const b = (a * num) / den;

      // a < b 일 때만 세서 중복 방지
      if (a >= b) continue;

      const cb = count.get(b);
      if (cb) answer += ca * cb;
    }
  }

  return answer;
}
