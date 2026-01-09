function solution(n, wires) {
  // 인접 리스트 구성
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    adj[a].push(b);
    adj[b].push(a);
  }

  // start에서 BFS 하되, (cutA, cutB) 간선은 무시
  function bfsCount(start, cutA, cutB) {
    const visited = Array(n + 1).fill(false);
    const queue = [start];
    visited[start] = true;
    let count = 1;

    for (let i = 0; i < queue.length; i++) {
      const cur = queue[i];
      for (const next of adj[cur]) {
        // 끊은 간선이면 스킵 (양방향)
        if ((cur === cutA && next === cutB) || (cur === cutB && next === cutA)) continue;
        if (visited[next]) continue;

        visited[next] = true;
        queue.push(next);
        count++;
      }
    }
    return count;
  }

  let answer = Infinity;

  for (const [a, b] of wires) {
    // a쪽 컴포넌트 크기
    const cnt = bfsCount(a, a, b);
    const diff = Math.abs(n - 2 * cnt); // |cnt - (n-cnt)|
    answer = Math.min(answer, diff);
  }

  return answer;
}
