function solution(n) {
  let answer = '';

  while (n > 0) {
    const remainder = n % 3;

    if (remainder === 0) {
      answer = '4' + answer;
      n = Math.floor((n - 1) / 3);
    } else if (remainder === 1) {
      answer = '1' + answer;
      n = Math.floor(n / 3);
    } else {
      answer = '2' + answer;
      n = Math.floor(n / 3);
    }
  }

  return answer;
}
