function solution(places) {
  const answer = [];

  // 방향 벡터
  const dx1 = [1, -1, 0, 0];
  const dy1 = [0, 0, 1, -1];

  for (const place of places) {
    let isSafe = true;

    for (let i = 0; i < 5 && isSafe; i++) {
      for (let j = 0; j < 5 && isSafe; j++) {
        if (place[i][j] !== 'P') continue;

        // 1️⃣ 상하좌우 거리 1
        for (let d = 0; d < 4; d++) {
          const ni = i + dx1[d];
          const nj = j + dy1[d];
          if (ni < 0 || nj < 0 || ni >= 5 || nj >= 5) continue;
          if (place[ni][nj] === 'P') {
            isSafe = false;
            break;
          }
        }

        // 2️⃣ 직선 거리 2
        const straight = [
          [2, 0], [-2, 0], [0, 2], [0, -2]
        ];
        for (const [dx, dy] of straight) {
          const ni = i + dx;
          const nj = j + dy;
          const mi = i + dx / 2;
          const mj = j + dy / 2;
          if (ni < 0 || nj < 0 || ni >= 5 || nj >= 5) continue;
          if (place[ni][nj] === 'P' && place[mi][mj] === 'O') {
            isSafe = false;
            break;
          }
        }

        // 3️⃣ 대각선
        const diagonal = [
          [1, 1], [1, -1], [-1, 1], [-1, -1]
        ];
        for (const [dx, dy] of diagonal) {
          const ni = i + dx;
          const nj = j + dy;
          if (ni < 0 || nj < 0 || ni >= 5 || nj >= 5) continue;
          if (
            place[ni][nj] === 'P' &&
            (place[i][nj] === 'O' || place[ni][j] === 'O')
          ) {
            isSafe = false;
            break;
          }
        }
      }
    }

    answer.push(isSafe ? 1 : 0);
  }

  return answer;
}
