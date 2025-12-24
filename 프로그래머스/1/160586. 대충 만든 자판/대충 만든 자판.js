function solution(keymap, targets) {
  // 문자 -> 최소 누름 횟수
  const minPress = new Map();

  for (const keys of keymap) {
    for (let i = 0; i < keys.length; i++) {
      const ch = keys[i];
      const pressCount = i + 1; // i번째 위치면 i+1번 눌러야 함

      if (!minPress.has(ch) || pressCount < minPress.get(ch)) {
        minPress.set(ch, pressCount);
      }
    }
  }

  const answer = [];

  for (const target of targets) {
    let sum = 0;
    let possible = true;

    for (const ch of target) {
      if (!minPress.has(ch)) {
        possible = false;
        break;
      }
      sum += minPress.get(ch);
    }

    answer.push(possible ? sum : -1);
  }

  return answer;
}
