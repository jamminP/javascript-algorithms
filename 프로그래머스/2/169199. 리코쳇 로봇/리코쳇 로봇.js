function solution(board) {
    const n = board.length;
    const m = board[0].length;

    // 시작 위치 찾기
    let startX, startY;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') {
                startX = i;
                startY = j;
            }
        }
    }

    // 방문 체크
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[startX][startY] = true;

    // 상, 하, 좌, 우
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    // BFS 큐: [x, y, 이동 횟수]
    const queue = [];
    queue.push([startX, startY, 0]);

    while (queue.length > 0) {
        const [x, y, count] = queue.shift();

        // 목표 도착
        if (board[x][y] === 'G') {
            return count;
        }

        for (const [dx, dy] of directions) {
            let nx = x;
            let ny = y;

            // 장애물이나 벽을 만날 때까지 이동
            while (true) {
                const tx = nx + dx;
                const ty = ny + dy;

                if (
                    tx >= 0 && tx < n &&
                    ty >= 0 && ty < m &&
                    board[tx][ty] !== 'D'
                ) {
                    nx = tx;
                    ny = ty;
                } else {
                    break;
                }
            }

            // 멈춘 위치가 처음이면 방문
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }

    return -1;
}
