function solution(k, d) {
  let count = 0;

  for (let x = 0; x <= d; x += k) {
    const maxY = Math.sqrt(d * d - x * x);
    const b = Math.floor(maxY / k);
    count += b + 1;
  }

  return count;
}