function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (const b of babbling) {
    let i = 0;
    let prev = ""; 
    let ok = true;

    while (i < b.length) {
      let matched = false;

      for (const w of words) {
        if (w === prev) continue;

        if (b.startsWith(w, i)) {
          prev = w;
          i += w.length;
          matched = true;
          break;
        }
      }

      if (!matched) {
        ok = false;
        break;
      }
    }

    if (ok) count++;
  }

  return count;
}
