function solution(numbers, hand) {
  // 키패드 좌표 매핑 (row, col)
  const pos = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2],
  };

  const leftFixed = new Set([1, 4, 7]);
  const rightFixed = new Set([3, 6, 9]);

  let left = pos['*'];
  let right = pos['#'];
  let answer = '';

  const dist = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

  for (const n of numbers) {
    if (leftFixed.has(n)) {
      answer += 'L';
      left = pos[n];
      continue;
    }

    if (rightFixed.has(n)) {
      answer += 'R';
      right = pos[n];
      continue;
    }

    // 가운데 열(2,5,8,0)
    const target = pos[n];
    const dl = dist(left, target);
    const dr = dist(right, target);

    if (dl < dr) {
      answer += 'L';
      left = target;
    } else if (dr < dl) {
      answer += 'R';
      right = target;
    } else {
      // 거리 같으면 hand 기준
      if (hand === 'right') {
        answer += 'R';
        right = target;
      } else {
        answer += 'L';
        left = target;
      }
    }
  }

  return answer;
}
