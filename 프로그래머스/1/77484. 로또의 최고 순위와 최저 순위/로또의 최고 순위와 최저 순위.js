function solution(lottos, win_nums) {
  const winSet = new Set(win_nums);

  let zeroCnt = 0;
  let matchCnt = 0;

  for (const n of lottos) {
    if (n === 0) zeroCnt++;
    else if (winSet.has(n)) matchCnt++;
  }

  const toRank = (cnt) => {
    // cnt: 맞춘 개수
    if (cnt >= 6) return 1;
    if (cnt === 5) return 2;
    if (cnt === 4) return 3;
    if (cnt === 3) return 4;
    if (cnt === 2) return 5;
    return 6;
  };

  const best = matchCnt + zeroCnt;
  const worst = matchCnt;

  return [toRank(best), toRank(worst)];
}
