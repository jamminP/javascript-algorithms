class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return max;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] >= this.heap[index]) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  _bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let largest = index;

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      index = largest;
    }
  }
}

function solution(n, k, enemy) {
  const maxHeap = new MaxHeap();

  for (let i = 0; i < enemy.length; i++) {
    const e = enemy[i];
    maxHeap.push(e);
    n -= e;

    if (n < 0) {
      if (k > 0) {
        // 가장 큰 적에게 무적권 사용
        n += maxHeap.pop();
        k--;
      } else {
        return i; // 현재 라운드에서 패배
      }
    }
  }

  return enemy.length;
}
