function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    let start = null;
    let lever = null;
    let exit = null;

    // S, L, E 위치 찾기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const ch = maps[i][j];
            if (ch === 'S') start = [i, j];
            else if (ch === 'L') lever = [i, j];
            else if (ch === 'E') exit = [i, j];
        }
    }

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    // BFS: (sx, sy)에서 시작해서 targetChar에 도달하는 최소 거리
    function bfs(sx, sy, targetChar) {
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        const queue = [[sx, sy, 0]]; // x, y, dist
        visited[sx][sy] = true;

        while (queue.length > 0) {
            const [x, y, dist] = queue.shift();

            // 목표 문자에 도달하면 거리 반환
            if (maps[x][y] === targetChar) {
                return dist;
            }

            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;

                if (
                    nx < 0 || nx >= n ||
                    ny < 0 || ny >= m
                ) continue;

                if (visited[nx][ny]) continue;
                if (maps[nx][ny] === 'X') continue; // 벽은 통과 불가

                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }

        // 목표에 도달하지 못한 경우
        return -1;
    }

    // 1. S -> L
    const distS2L = bfs(start[0], start[1], 'L');
    if (distS2L === -1) return -1;

    // 2. L -> E
    const distL2E = bfs(lever[0], lever[1], 'E');
    if (distL2E === -1) return -1;

    // 둘 다 도달 가능하면 합
    return distS2L + distL2E;
}
