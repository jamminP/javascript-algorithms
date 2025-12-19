function solution(s, skip, index) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  const available = alphabet
    .split('')
    .filter(ch => !skip.includes(ch)); 

  let result = '';

  for (const ch of s) {
    const currentIdx = available.indexOf(ch);

    const nextIdx = (currentIdx + index) % available.length;

    result += available[nextIdx];
  }

  return result;
}
