function solution(n) {
  let answer = 0;

  const col = new Set();
  const diag1 = new Set();
  const diag2 = new Set();

  function dfs(row) {
    if (row === n) {
      answer++;
      return;
    }

    for (let c = 0; c < n; c++) {
      if (col.has(c) || diag1.has(row - c) || diag2.has(row + c)) continue;

      col.add(c);
      diag1.add(row - c);
      diag2.add(row + c);

      dfs(row + 1);

      col.delete(c);
      diag1.delete(row - c);
      diag2.delete(row + c);
    }
  }

  dfs(0);

  return answer;
}