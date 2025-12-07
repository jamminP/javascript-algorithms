function solution(dirs) {
  let x = 0;
  let y = 0;

  const visited = new Set();

  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  for (const dir of dirs) {
    const [dx, dy] = move[dir];
    const nx = x + dx;
    const ny = y + dy;

    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
      continue;
    }

    const from = `${x},${y}`;
    const to = `${nx},${ny}`;
    const edgeKey = from < to ? `${from}-${to}` : `${to}-${from}`;

    visited.add(edgeKey);

    x = nx;
    y = ny;
  }

  return visited.size;
}
