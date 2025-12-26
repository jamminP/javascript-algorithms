function solution(files) {
  // 파일명을 HEAD / NUMBER로 쪼개서 정렬 키를 만든다
  const parsed = files.map((name, idx) => {
    let i = 0;

    // 1) HEAD 끝(숫자 시작) 찾기
    while (i < name.length && !isDigit(name[i])) i++;
    const head = name.slice(0, i);

    // 2) NUMBER (연속 숫자, 최대 5자리)
    let j = i;
    while (j < name.length && isDigit(name[j]) && (j - i) < 5) j++;
    const numberStr = name.slice(i, j);
    const numberVal = parseInt(numberStr, 10);

    return {
      name,
      headLower: head.toLowerCase(),
      numberVal,
      idx, // 안정 정렬용(HEAD/NUMBER 같을 때 입력순 유지)
    };
  });

  parsed.sort((a, b) => {
    if (a.headLower < b.headLower) return -1;
    if (a.headLower > b.headLower) return 1;

    if (a.numberVal !== b.numberVal) return a.numberVal - b.numberVal;

    return a.idx - b.idx; // 입력 순서 유지
  });

  return parsed.map(v => v.name);
}

function isDigit(ch) {
  return ch >= "0" && ch <= "9";
}
