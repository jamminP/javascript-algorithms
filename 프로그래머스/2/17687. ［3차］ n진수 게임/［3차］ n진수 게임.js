function solution(n, t, m, p) {
  let stream = ""; 
  let num = 0;

  const needLen = (t - 1) * m + p;

  while (stream.length < needLen) {
    stream += num.toString(n).toUpperCase();
    num++;
  }

  let answer = "";
  for (let i = 0; i < t; i++) {
    answer += stream[(p - 1) + i * m];
  }

  return answer;
}
