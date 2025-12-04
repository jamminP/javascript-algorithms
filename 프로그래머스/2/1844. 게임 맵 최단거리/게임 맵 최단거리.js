function solution(maps) {
  const n = maps.length;        
  const m = maps[0].length;     

  const dist = Array.from({ length: n }, () => Array(m).fill(0));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const queue = [];
  let head = 0;

  queue.push([0, 0]);
  dist[0][0] = 1; 

  while (head < queue.length) {
    const [x, y] = queue[head++];

    if (x === n - 1 && y === m - 1) {
      return dist[x][y];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (maps[nx][ny] === 0 || dist[nx][ny] !== 0) continue;

      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  return -1;
}
