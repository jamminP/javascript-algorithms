function solution(players, m, k) {
  const expire = Array(24 + k + 1).fill(0);
  let active = 0;
  let answer = 0;

  for (let i = 0; i < 24; i++) {
    // i시에 만료되는 서버 반납
    active -= expire[i];

    // i시~i+1시 필요한 증설 서버 수 (핵심: floor)
    const need = Math.floor(players[i] / m);

    if (active < need) {
      const add = need - active;
      answer += add;
      active += add;
      expire[i + k] += add; // i+k 시에 만료
    }
  }

  return answer;
}
