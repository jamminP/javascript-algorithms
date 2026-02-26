function solution(storage, requests) {
  const n = storage.length;
  const m = storage[0].length;

  // 2차원 배열로 변환
  let board = storage.map(row => row.split(''));

  for (let req of requests) {
    const target = req[0];

    // 🔵 크레인 (길이 2)
    if (req.length === 2) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          if (board[i][j] === target) {
            board[i][j] = '.';
          }
        }
      }
    }

    // 🔵 지게차 (길이 1)
    else {
      const visited = Array.from({ length: n + 2 }, () =>
        Array(m + 2).fill(false)
      );

      // 확장된 보드 생성
      const expanded = Array.from({ length: n + 2 }, () =>
        Array(m + 2).fill('.')
      );

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          expanded[i + 1][j + 1] = board[i][j];
        }
      }

      const queue = [];
      queue.push([0, 0]);
      visited[0][0] = true;

      const removeList = [];

      const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];

      while (queue.length) {
        const [x, y] = queue.shift();

        for (let [dx, dy] of directions) {
          const nx = x + dx;
          const ny = y + dy;

          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < n + 2 &&
            ny < m + 2 &&
            !visited[nx][ny]
          ) {
            visited[nx][ny] = true;

            // 빈칸이면 계속 BFS
            if (expanded[nx][ny] === '.') {
              queue.push([nx, ny]);
            }
            // 목표 컨테이너면 제거 후보
            else if (expanded[nx][ny] === target) {
              removeList.push([nx - 1, ny - 1]);
            }
          }
        }
      }

      // 제거
      for (let [x, y] of removeList) {
        board[x][y] = '.';
      }
    }
  }

  // 남은 컨테이너 개수 세기
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] !== '.') answer++;
    }
  }

  return answer;
}