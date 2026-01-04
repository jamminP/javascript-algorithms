function solution(n) {
  // n x n 배열 (실제로는 삼각형 부분만 사용)
  const tri = Array.from({ length: n }, () => Array(n).fill(0));

  // 방향: 아래(down), 오른쪽(right), 왼쪽위(up-left)
  const dr = [1, 0, -1];
  const dc = [0, 1, -1];

  let r = -1, c = 0;
  let num = 1;

  for (let i = 0; i < n; i++) {
    const dir = i % 3;          // 0:down, 1:right, 2:up-left
    const steps = n - i;        // 이번 턴에서 이동할 칸 수

    for (let s = 0; s < steps; s++) {
      r += dr[dir];
      c += dc[dir];
      tri[r][c] = num++;
    }
  }

  // 삼각형 부분만(0..i) 순서대로 펼치기
  const answer = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      answer.push(tri[i][j]);
    }
  }

  return answer;
}
