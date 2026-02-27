function solution(plans) {
  // 1. 시간을 분 단위로 변환 + playtime 숫자 변환
  plans = plans.map(([name, start, playtime]) => {
    const [hour, minute] = start.split(":").map(Number);
    return [name, hour * 60 + minute, Number(playtime)];
  });

  // 2. 시작 시간 기준 정렬
  plans.sort((a, b) => a[1] - b[1]);

  const stack = [];
  const result = [];

  for (let i = 0; i < plans.length; i++) {
    const [name, start, playtime] = plans[i];
    const nextStart = i < plans.length - 1 ? plans[i + 1][1] : Infinity;

    let remainTime = nextStart - start;

    if (playtime <= remainTime) {
      // 현재 과제 끝낼 수 있음
      result.push(name);
      remainTime -= playtime;

      // 남는 시간 동안 멈춘 과제 처리
      while (remainTime > 0 && stack.length > 0) {
        const last = stack.pop();
        if (last.playtime <= remainTime) {
          remainTime -= last.playtime;
          result.push(last.name);
        } else {
          last.playtime -= remainTime;
          stack.push(last);
          break;
        }
      }
    } else {
      // 다 못 끝냄 → 남은 시간 스택에 저장
      stack.push({
        name: name,
        playtime: playtime - remainTime
      });
    }
  }

  // 3. 남은 과제 처리 (LIFO)
  while (stack.length > 0) {
    result.push(stack.pop().name);
  }

  return result;
}