function solution(relation) {
  const rowCount = relation.length;
  const colCount = relation[0].length;
  const candidateKeys = [];

  // 모든 컬럼 조합 탐색 (1 ~ 2^colCount - 1)
  for (let bit = 1; bit < (1 << colCount); bit++) {
    
    // 1️⃣ 최소성 검사
    let isMinimal = true;
    for (let key of candidateKeys) {
      if ((key & bit) === key) {
        isMinimal = false;
        break;
      }
    }
    if (!isMinimal) continue;

    // 2️⃣ 유일성 검사
    const set = new Set();
    for (let row = 0; row < rowCount; row++) {
      let combined = "";
      for (let col = 0; col < colCount; col++) {
        if (bit & (1 << col)) {
          combined += relation[row][col] + "|";
        }
      }
      set.add(combined);
    }

    if (set.size === rowCount) {
      candidateKeys.push(bit);
    }
  }

  return candidateKeys.length;
}