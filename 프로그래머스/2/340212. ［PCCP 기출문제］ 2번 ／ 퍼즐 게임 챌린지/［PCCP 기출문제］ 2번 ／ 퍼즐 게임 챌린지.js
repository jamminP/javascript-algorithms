function solution(diffs, times, limit) {
  const n = diffs.length;

  let left = 1;
  let right = 0;
  for (const d of diffs) {
    if (d > right) right = d;
  }

  let answer = right;

  const canSolve = (level) => {
    let total = 0;

    for (let i = 0; i < n; i++) {
      const diff = diffs[i];
      const timeCur = times[i];

      if (diff <= level) {
        total += timeCur;
      } else {
        const mistakes = diff - level;
        const timePrev = times[i - 1];
        total += mistakes * (timeCur + timePrev) + timeCur;
      }

      if (total > limit) return false;
    }
    return true;
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canSolve(mid)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}
