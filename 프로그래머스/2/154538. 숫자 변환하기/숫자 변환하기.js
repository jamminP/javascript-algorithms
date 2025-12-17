function solution(x, y, n) {
  if (x === y) return 0;

  const visited = new Array(y + 1).fill(false);
  const q = [];
  let head = 0;

  q.push([x, 0]);
  visited[x] = true;

  while (head < q.length) {
    const [cur, dist] = q[head++];

    const nexts = [cur + n, cur * 2, cur * 3];

    for (const nxt of nexts) {
      if (nxt > y) continue;
      if (visited[nxt]) continue;

      if (nxt === y) return dist + 1;

      visited[nxt] = true;
      q.push([nxt, dist + 1]);
    }
  }

  return -1;
}
