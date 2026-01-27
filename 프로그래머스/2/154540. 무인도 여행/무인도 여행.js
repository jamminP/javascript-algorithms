function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const result = [];

    const bfs = (x, y) => {
        let sum = 0;
        const queue = [[x, y]];
        visited[x][y] = true;

        while (queue.length) {
            const [cx, cy] = queue.shift();
            sum += Number(maps[cx][cy]);

            for (let i = 0; i < 4; i++) {
                const nx = cx + dx[i];
                const ny = cy + dy[i];

                if (
                    nx >= 0 && nx < rows &&
                    ny >= 0 && ny < cols &&
                    !visited[nx][ny] &&
                    maps[nx][ny] !== 'X'
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
        return sum;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!visited[i][j] && maps[i][j] !== 'X') {
                result.push(bfs(i, j));
            }
        }
    }

    return result.length ? result.sort((a, b) => a - b) : [-1];
}
