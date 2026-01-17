function solution(N, road, K) {
  // 인접 리스트 구성
  const graph = Array.from({ length: N + 1 }, () => []);
  for (const [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  // 최소 힙(우선순위 큐) 구현
  class MinHeap {
    constructor() { this.h = []; }
    push(item) {
      this.h.push(item);
      this._up(this.h.length - 1);
    }
    pop() {
      if (this.h.length === 1) return this.h.pop();
      const top = this.h[0];
      this.h[0] = this.h.pop();
      this._down(0);
      return top;
    }
    get size() { return this.h.length; }
    _up(i) {
      while (i > 0) {
        const p = (i - 1) >> 1;
        if (this.h[p][0] <= this.h[i][0]) break; // dist 기준
        [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
        i = p;
      }
    }
    _down(i) {
      const n = this.h.length;
      while (true) {
        let l = i * 2 + 1, r = l + 1, m = i;
        if (l < n && this.h[l][0] < this.h[m][0]) m = l;
        if (r < n && this.h[r][0] < this.h[m][0]) m = r;
        if (m === i) break;
        [this.h[m], this.h[i]] = [this.h[i], this.h[m]];
        i = m;
      }
    }
  }

  // 다익스트라
  const INF = Number.MAX_SAFE_INTEGER;
  const dist = Array(N + 1).fill(INF);
  dist[1] = 0;

  const pq = new MinHeap();
  pq.push([0, 1]); // [거리, 노드]

  while (pq.size) {
    const [d, u] = pq.pop();
    if (d !== dist[u]) continue;      // 오래된(더 긴) 정보 스킵
    if (d > K) continue;              // K 넘어가면 더 볼 필요 거의 없음(정확성엔 영향 없음)

    for (const [v, w] of graph[u]) {
      const nd = d + w;
      if (nd < dist[v]) {
        dist[v] = nd;
        pq.push([nd, v]);
      }
    }
  }

  // K 이하 마을 수 세기
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (dist[i] <= K) count++;
  }
  return count;
}
