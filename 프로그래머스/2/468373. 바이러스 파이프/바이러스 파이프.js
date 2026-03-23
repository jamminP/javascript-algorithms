function solution(n, infection, edges, k) {
    // 1. 그래프 생성
    const adj = Array.from({ length: n + 1 }, () => []);
    
    for (const [a, b, t] of edges) {
        adj[a].push([b, t]);
        adj[b].push([a, t]);
    }

    let answer = 0;

    // 감염 확산 함수
    function spread(infected, type) {
        const queue = [...infected];
        const visited = new Set(infected);

        while (queue.length) {
            const cur = queue.shift();

            for (const [next, t] of adj[cur]) {
                if (t === type && !visited.has(next)) {
                    visited.add(next);
                    queue.push(next);
                }
            }
        }

        return visited;
    }

    // DFS로 모든 경우 탐색
    function dfs(step, infected) {
        answer = Math.max(answer, infected.size);

        if (step === k) return;

        for (let type = 1; type <= 3; type++) {
            const nextInfected = spread(infected, type);

            // 변화 없으면 굳이 진행 X (가지치기)
            if (nextInfected.size === infected.size) continue;

            dfs(step + 1, nextInfected);
        }
    }

    // 초기 감염 상태
    const start = new Set([infection]);

    dfs(0, start);

    return answer;
}