function solution(sequence, k) {
  let left = 0;
  let sum = 0;

  let bestL = 0;
  let bestR = sequence.length - 1;
  let bestLen = Infinity; // (R-L)

  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];

    while (sum > k && left <= right) {
      sum -= sequence[left];
      left++;
    }

    if (sum === k) {
      const len = right - left;
      // 짧은 길이 우선, 길이가 같으면 앞쪽(더 작은 left) 우선
      if (len < bestLen) {
        bestLen = len;
        bestL = left;
        bestR = right;
      }
    }
  }

  return [bestL, bestR];
}
