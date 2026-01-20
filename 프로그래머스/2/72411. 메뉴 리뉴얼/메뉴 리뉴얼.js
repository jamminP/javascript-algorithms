function solution(orders, course) {
  const answer = [];

  // 조합 생성 (sorted string에서 k개 뽑기)
  function comb(arr, k, start, path, out) {
    if (path.length === k) {
      out.push(path.join(''));
      return;
    }
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      comb(arr, k, i + 1, path, out);
      path.pop();
    }
  }

  // 주문들을 미리 정렬해두기
  const sortedOrders = orders.map(o => o.split('').sort().join(''));

  for (const k of course) {
    const freq = new Map();

    for (const order of sortedOrders) {
      if (order.length < k) continue;

      const combos = [];
      comb(order.split(''), k, 0, [], combos);

      for (const c of combos) {
        freq.set(c, (freq.get(c) || 0) + 1);
      }
    }

    // 최대 빈도 찾기 (최소 2 이상만)
    let maxCnt = 0;
    for (const cnt of freq.values()) {
      if (cnt >= 2 && cnt > maxCnt) maxCnt = cnt;
    }

    if (maxCnt >= 2) {
      for (const [menu, cnt] of freq.entries()) {
        if (cnt === maxCnt) answer.push(menu);
      }
    }
  }

  return answer.sort();
}
