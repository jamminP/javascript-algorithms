let n = 12;
let string = "";
const data = solution(n);

console.log(`${n}의 약수는 ${string}입니다. 이를 모두 더하면 ${data}입니다.`);

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      if (i != n) string += `${i}, `;
      else string += `${i}`;

      answer += i;
    }
  }

  return answer;
}
