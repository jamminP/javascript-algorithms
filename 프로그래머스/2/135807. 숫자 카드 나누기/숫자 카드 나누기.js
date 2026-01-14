function solution(arrayA, arrayB) {
  const gcd = (a, b) => {
    while (b !== 0) {
      const t = a % b;
      a = b;
      b = t;
    }
    return a;
  };

  const gcdArray = (arr) => {
    let g = arr[0];
    for (let i = 1; i < arr.length; i++) {
      g = gcd(g, arr[i]);
      if (g === 1) break; // 더 줄어들 수 없으니 조기 종료
    }
    return g;
  };

  const canUse = (g, otherArr) => {
    for (let i = 0; i < otherArr.length; i++) {
      if (otherArr[i] % g === 0) return 0; // 하나라도 나눠지면 실패
    }
    return g;
  };

  const gA = gcdArray(arrayA);
  const gB = gcdArray(arrayB);

  const candA = canUse(gA, arrayB); // A는 모두 나누고, B는 아무것도 나누면 안 됨
  const candB = canUse(gB, arrayA); // 반대 방향

  return Math.max(candA, candB);
}
