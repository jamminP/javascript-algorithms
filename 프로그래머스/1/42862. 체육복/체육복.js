function solution(n, lost, reserve) {
  // 1) 겹치는 학생 처리 (자기 것만 남아서 빌려줄 수 없음)
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);

  for (const r of reserve) {
    if (lostSet.has(r)) {
      lostSet.delete(r);
      reserveSet.delete(r);
    }
  }

  // 2) 남은 lost를 오름차순으로 정렬해서 그리디 대여
  const lostArr = [...lostSet].sort((a, b) => a - b);

  for (const student of lostArr) {
    if (reserveSet.has(student - 1)) {
      reserveSet.delete(student - 1);
      lostSet.delete(student);
    } else if (reserveSet.has(student + 1)) {
      reserveSet.delete(student + 1);
      lostSet.delete(student);
    }
  }

  // 수업 들을 수 있는 학생 수 = 전체 - 못 듣는 학생(lostSet에 남은 학생)
  return n - lostSet.size;
}
