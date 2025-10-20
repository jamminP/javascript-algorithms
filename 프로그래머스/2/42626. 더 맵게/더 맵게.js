// 우선순위큐: 최소 힙 구현
class MinHeap {
  constructor(arr = []) {
    this.a = arr.slice();
    // O(n) heapify
    if (this.a.length > 0) {
      for (let i = Math.floor((this.a.length - 2) / 2); i >= 0; i--) {
        this._down(i);
      }
    }
  }
  size() { return this.a.length; }
  peek() { return this.a.length ? this.a[0] : undefined; }

  push(val) {
    this.a.push(val);
    this._up(this.a.length - 1);
  }
  pop() {
    const n = this.a.length;
    if (n === 0) return undefined;
    const top = this.a[0];
    const last = this.a.pop();
    if (n > 1) {
      this.a[0] = last;
      this._down(0);
    }
    return top;
  }
  _up(i) {
    const a = this.a;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (a[p] <= a[i]) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  _down(i) {
    const a = this.a;
    const n = a.length;
    while (true) {
      let l = i * 2 + 1;
      let r = l + 1;
      let m = i;
      if (l < n && a[l] < a[m]) m = l;
      if (r < n && a[r] < a[m]) m = r;
      if (m === i) break;
      [a[i], a[m]] = [a[m], a[i]];
      i = m;
    }
  }
}

/**
 * scoville: number[], K: number
 * return: 최소 섞는 횟수, 불가능하면 -1
 */
function solution(scoville, K) {
  // K가 0이면 이미 조건 만족
  if (K <= 0) return 0;

  const heap = new MinHeap(scoville);

  // 이미 모두 K 이상인 경우 빠른 종료
  if (heap.peek() >= K) return 0;

  let mixCount = 0;

  while (heap.size() >= 2 && heap.peek() < K) {
    const first = heap.pop();      // 가장 맵지 않은
    const second = heap.pop();     // 두 번째로 맵지 않은
    const mixed = first + second * 2;
    heap.push(mixed);
    mixCount++;
  }

  return heap.peek() >= K ? mixCount : -1;
};
