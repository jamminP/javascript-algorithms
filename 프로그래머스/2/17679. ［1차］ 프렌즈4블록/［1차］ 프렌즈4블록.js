function solution(m, n, board) {
  // 보드를 2차원 배열로 변환
  const b = board.map(row => row.split(""));
  const EMPTY = "0";
  let removed = 0;

  while (true) {
    // 지울 칸 표시용
    const mark = Array.from({ length: m }, () => Array(n).fill(false));
    let found = 0;

    // 1) 2x2 같은 블록 찾기
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const cur = b[i][j];
        if (cur === EMPTY) continue;

        if (
          b[i][j + 1] === cur &&
          b[i + 1][j] === cur &&
          b[i + 1][j + 1] === cur
        ) {
          if (!mark[i][j]) { mark[i][j] = true; found++; }
          if (!mark[i][j + 1]) { mark[i][j + 1] = true; found++; }
          if (!mark[i + 1][j]) { mark[i + 1][j] = true; found++; }
          if (!mark[i + 1][j + 1]) { mark[i + 1][j + 1] = true; found++; }
        }
      }
    }

    // 더 이상 지울 게 없으면 종료
    if (found === 0) break;

    // 2) 지우기
    removed += found;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (mark[i][j]) b[i][j] = EMPTY;
      }
    }

    // 3) 아래로 떨어뜨리기 (열 단위로 압축)
    for (let col = 0; col < n; col++) {
      const stack = [];
      for (let row = m - 1; row >= 0; row--) {
        if (b[row][col] !== EMPTY) stack.push(b[row][col]);
      }

      for (let row = m - 1; row >= 0; row--) {
        b[row][col] = stack.length ? stack.shift() : EMPTY;
      }
    }
  }

  return removed;
}
