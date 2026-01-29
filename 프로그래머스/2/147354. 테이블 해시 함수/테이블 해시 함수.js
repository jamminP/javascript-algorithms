function solution(data, col, row_begin, row_end) {
  // 1. 정렬
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      // 기본키(첫 번째 컬럼) 내림차순
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });

  let answer = 0;

  // 2. S_i 계산 + XOR 누적
  for (let i = row_begin; i <= row_end; i++) {
    const row = data[i - 1]; // i는 1-based
    const Si = row.reduce((sum, value) => sum + (value % i), 0);
    answer ^= Si;
  }

  return answer;
}
