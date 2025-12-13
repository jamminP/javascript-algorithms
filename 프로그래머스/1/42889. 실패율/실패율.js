function solution(N, stages) {
  const cnt = Array(N + 2).fill(0);
  for (const s of stages) cnt[s]++;

  let reached = stages.length;
  const arr = []; 

  for (let stage = 1; stage <= N; stage++) {
    const stuck = cnt[stage]; 
    const failRate = reached === 0 ? 0 : stuck / reached;

    arr.push([stage, failRate]);

    reached -= stuck;
  }

  arr.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0] - b[0];
  });

  return arr.map(([stage]) => stage);
}
