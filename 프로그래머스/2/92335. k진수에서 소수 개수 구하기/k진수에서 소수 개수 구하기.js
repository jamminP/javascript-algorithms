function solution(n, k) {
  const baseStr = n.toString(k);          
  const parts = baseStr.split('0');       

  let count = 0;

  for (const p of parts) {
    if (p === "") continue;             

    const num = Number(p);              
    if (isPrime(num)) count++;
  }

  return count;
}

function isPrime(x) {
  if (x < 2) return false;
  if (x === 2) return true;
  if (x % 2 === 0) return false;

  const limit = Math.floor(Math.sqrt(x));
  for (let i = 3; i <= limit; i += 2) {
    if (x % i === 0) return false;
  }
  return true;
}
