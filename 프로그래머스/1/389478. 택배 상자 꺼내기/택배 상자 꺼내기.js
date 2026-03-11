function solution(n, w, num) {
  let row = Math.floor((num - 1) / w);
  let col;

  if (row % 2 === 0) {
    col = (num - 1) % w;
  } else {
    col = w - 1 - ((num - 1) % w);
  }

  let totalRows = Math.ceil(n / w);
  let count = 1;

  for (let r = row + 1; r < totalRows; r++) {
    let boxesInRow = Math.min(w, n - r * w);

    let targetCol;

    if (r % 2 === 0) {
      targetCol = col;
    } else {
      targetCol = w - 1 - col;
    }

    if (targetCol < boxesInRow) count++;
  }

  return count;
}