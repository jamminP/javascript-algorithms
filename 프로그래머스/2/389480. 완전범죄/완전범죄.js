function solution(info, n, m) {
    const INF = Infinity;
    
    // dp[b] = B 흔적이 b일 때 최소 A 흔적
    let dp = Array(m).fill(INF);
    dp[0] = 0;

    for (const [aCost, bCost] of info) {
        const newDp = Array(m).fill(INF);

        for (let b = 0; b < m; b++) {
            if (dp[b] === INF) continue;

            // 1️⃣ A가 훔치는 경우
            const newA = dp[b] + aCost;
            if (newA < n) {
                newDp[b] = Math.min(newDp[b], newA);
            }

            // 2️⃣ B가 훔치는 경우
            const newB = b + bCost;
            if (newB < m) {
                newDp[newB] = Math.min(newDp[newB], dp[b]);
            }
        }

        dp = newDp;
    }

    const result = Math.min(...dp);
    return result === INF ? -1 : result;
}