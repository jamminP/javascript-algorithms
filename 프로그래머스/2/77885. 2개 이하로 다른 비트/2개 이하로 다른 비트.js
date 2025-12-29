function solution(numbers) {
  return numbers.map((num) => {
    const x = BigInt(num);

    // 짝수면 +1
    if ((x & 1n) === 0n) return Number(x + 1n);

    // 홀수면 공식 적용
    const y = x + 1n;
    const diff = x ^ y;              // 바뀐 비트 구간
    const add = diff >> 2n;          // 보정값
    return Number(y + add);
  });
}
