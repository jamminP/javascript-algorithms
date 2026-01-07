function solution(board, moves) {
  const n = board.length;
  const basket = [];
  let removed = 0;

  for (const move of moves) {
    const col = move - 1; // moves는 1-based
    let picked = 0;

    // 해당 열에서 가장 위의 인형 찾기
    for (let row = 0; row < n; row++) {
      if (board[row][col] !== 0) {
        picked = board[row][col];
        board[row][col] = 0; // 집었으니 빈칸 처리
        break;
      }
    }

    // 빈 칸이면 아무 일도 없음
    if (picked === 0) continue;

    // 바구니 처리 (연속 동일 인형이면 터짐)
    if (basket.length > 0 && basket[basket.length - 1] === picked) {
      basket.pop();
      removed += 2;
    } else {
      basket.push(picked);
    }
  }

  return removed;
}
