function solution(s) {
  let answer = 0;
  let x = "";     
  let same = 0;   
  let diff = 0;    

  for (const ch of s) {
    if (!x) x = ch;

    if (ch === x) {
      same++;
    } else {
      diff++;
    }

    if (same === diff) {
      answer++;
      x = "";
      same = 0;
      diff = 0;
    }
  }

  if (same !== 0 || diff !== 0) {
    answer++;
  }

  return answer;
}
