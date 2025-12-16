function solution(land) {
  let dp = land[0].slice(); 

  for (let r = 1; r < land.length; r++) {
    const [a, b, c, d] = dp; 
    const row = land[r];

    const next0 = row[0] + Math.max(b, c, d);
    const next1 = row[1] + Math.max(a, c, d);
    const next2 = row[2] + Math.max(a, b, d);
    const next3 = row[3] + Math.max(a, b, c);

    dp = [next0, next1, next2, next3];
  }

  return Math.max(...dp);
}
