function solution(msg) {
  const dict = new Map();
  for (let i = 0; i < 26; i++) {
    dict.set(String.fromCharCode(65 + i), i + 1);
  }
  let nextIdx = 27;

  const answer = [];
  let i = 0;

  while (i < msg.length) {
    let w = msg[i];
    let j = i + 1;

    while (j <= msg.length) {
      const cand = msg.slice(i, j);
      if (dict.has(cand)) {
        w = cand;
        j++;
      } else {
        break;
      }
    }

    answer.push(dict.get(w));

    const nextPos = i + w.length;
    if (nextPos < msg.length) {
      const wc = w + msg[nextPos];
      if (!dict.has(wc)) dict.set(wc, nextIdx++);
    }

    i += w.length;
  }

  return answer;
}
