function solution(n) {
  const MOD = 1000000007;

  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1; // dp[1]
  let b = 2; // dp[2]
  let i = 3;

  while (i + 1 <= n) {
    // dp[i]
    let c = a + b;
    if (c >= MOD) c -= MOD;

    // dp[i+1]
    let d = b + c;
    if (d >= MOD) d -= MOD;

    a = c;
    b = d;
    i += 2;
  }

  // n이 홀수면 한 번 더
  if (i === n) {
    let c = a + b;
    if (c >= MOD) c -= MOD;
    b = c;
  }

  return b;
}
