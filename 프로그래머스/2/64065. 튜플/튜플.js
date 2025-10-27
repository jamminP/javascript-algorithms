function solution(s) {
  // 1) "{...}" 그룹들을 전부 추출
  const groups = [];
  const regex = /\{([0-9,]+)\}/g; // 숫자와 콤마만 있는 그룹
  let m;
  while ((m = regex.exec(s)) !== null) {
    // "2,1,3" -> [2,1,3]
    groups.push(m[1].split(',').map(Number));
  }

  // 2) 그룹을 원소 개수 오름차순으로 정렬
  groups.sort((a, b) => a.length - b.length);

  // 3) 작은 그룹부터 새로 등장한 숫자만 결과에 추가
  const seen = new Set();
  const result = [];
  for (const arr of groups) {
    for (const x of arr) {
      if (!seen.has(x)) {
        seen.add(x);
        result.push(x);
      }
    }
  }
  return result;
}