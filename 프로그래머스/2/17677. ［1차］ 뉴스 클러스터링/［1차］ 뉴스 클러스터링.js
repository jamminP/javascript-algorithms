function solution(str1, str2) {

  function makeMultiSet(str) {
    const map = new Map();
    const upper = str.toUpperCase();

    for (let i = 0; i < upper.length - 1; i++) {
      const pair = upper.slice(i, i + 2);
      if (/^[A-Z]{2}$/.test(pair)) {
        map.set(pair, (map.get(pair) || 0) + 1);
      }
    }
    return map;
  }

  const m1 = makeMultiSet(str1);
  const m2 = makeMultiSet(str2);

  if (m1.size === 0 && m2.size === 0) {
    return 65536;
  }

  let intersection = 0;
  let union = 0;

  const allKeys = new Set([...m1.keys(), ...m2.keys()]);

  for (const key of allKeys) {
    const c1 = m1.get(key) || 0;
    const c2 = m2.get(key) || 0;

    intersection += Math.min(c1, c2);
    union += Math.max(c1, c2);
  }

  const jaccard = intersection / union;
  return Math.floor(jaccard * 65536);
}
