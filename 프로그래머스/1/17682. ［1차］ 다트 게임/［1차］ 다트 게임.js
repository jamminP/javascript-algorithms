function solution(dartResult) {
  // 1. "점수 | 보너스 | 옵션" 패턴을 정규식으로 3세트 뽑기
  // (\d+)  : 숫자 (0~10)
  // ([SDT]): 보너스
  // ([*#]?): 옵션 (없을 수도 있으니 ?)
  const regex = /(\d+)([SDT])([*#]?)/g;
  const scores = [];
  let match;

  while ((match = regex.exec(dartResult)) !== null) {
    let [, numStr, bonus, option] = match;
    let score = Number(numStr);

    // 2. 보너스 처리 (S:1제곱, D:2제곱, T:3제곱)
    if (bonus === 'D') {
      score = score ** 2;
    } else if (bonus === 'T') {
      score = score ** 3;
    }

    // 3. 옵션 처리
    if (option === '*') {
      // 현재 점수 2배
      score *= 2;
      // 바로 이전 점수도 있으면 2배
      if (scores.length > 0) {
        scores[scores.length - 1] *= 2;
      }
    } else if (option === '#') {
      // 현재 점수 마이너스
      score *= -1;
    }

    // 4. 이 턴 점수 저장
    scores.push(score);
  }

  // 5. 총합 반환
  return scores.reduce((acc, cur) => acc + cur, 0);
}
