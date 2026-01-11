class MinHeap {
  constructor() {
    this.h = [];
  }
  size() {
    return this.h.length;
  }
  peek() {
    return this.h[0];
  }
  push(x) {
    const h = this.h;
    h.push(x);
    let i = h.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (h[p] <= h[i]) break;
      [h[p], h[i]] = [h[i], h[p]];
      i = p;
    }
  }
  pop() {
    const h = this.h;
    if (h.length === 1) return h.pop();
    const top = h[0];
    h[0] = h.pop();
    let i = 0;
    while (true) {
      const l = i * 2 + 1;
      const r = i * 2 + 2;
      let smallest = i;
      if (l < h.length && h[l] < h[smallest]) smallest = l;
      if (r < h.length && h[r] < h[smallest]) smallest = r;
      if (smallest === i) break;
      [h[i], h[smallest]] = [h[smallest], h[i]];
      i = smallest;
    }
    return top;
  }
}

function toMin(t) {
  const [hh, mm] = t.split(":").map(Number);
  return hh * 60 + mm;
}

function solution(book_time) {
  // [startMin, endMin+10] 형태로 변환
  const times = book_time
    .map(([s, e]) => [toMin(s), toMin(e) + 10])
    .sort((a, b) => a[0] - b[0]); // 시작시간 기준 정렬

  const heap = new MinHeap();
  let answer = 0;

  for (const [start, nextAvail] of times) {
    // 가장 빨리 비는 방이 start 이전(또는 같은 시각) 에 비면 재사용
    if (heap.size() > 0 && heap.peek() <= start) {
      heap.pop();
    }
    heap.push(nextAvail);
    answer = Math.max(answer, heap.size());
  }

  return answer;
}
