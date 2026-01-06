function solution(storey) {
  let answer = 0;

  while (storey > 0) {
    const d = storey % 10;                 // 현재 1의 자리(현재 단계의 자리)
    const next = Math.floor(storey / 10) % 10; // 다음 자리(10의 자리 등)

    if (d < 5) {
      // 내림이 유리
      answer += d;
      storey = Math.floor(storey / 10);
    } else if (d > 5) {
      // 올림이 유리
      answer += (10 - d);
      storey = Math.floor(storey / 10) + 1; // carry
    } else {
      // d == 5: 다음 자리 보고 결정
      if (next >= 5) {
        answer += 5;
        storey = Math.floor(storey / 10) + 1; // carry
      } else {
        answer += 5;
        storey = Math.floor(storey / 10);
      }
    }
  }

  return answer;
}
