function solution(schedules, timelogs, startday) {
  let answer = 0;

  const toMinute = (time) => {
    const h = Math.floor(time / 100);
    const m = time % 100;
    return h * 60 + m;
  };

  for (let i = 0; i < schedules.length; i++) {
    const limit = toMinute(schedules[i]) + 10; // 출근 인정 시각
    let ok = true;

    for (let j = 0; j < 7; j++) {
      const day = (startday + j - 1) % 7 + 1;

      // 토, 일은 무시
      if (day === 6 || day === 7) continue;

      const logTime = toMinute(timelogs[i][j]);
      if (logTime > limit) {
        ok = false;
        break;
      }
    }

    if (ok) answer++;
  }

  return answer;
}
