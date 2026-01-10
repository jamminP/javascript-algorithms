function solution(survey, choices) {
  const score = {}; // 각 성격 문자 점수 누적

  for (let i = 0; i < survey.length; i++) {
    const [disagreeType, agreeType] = survey[i];
    const choice = choices[i];

    if (choice < 4) {
      // 1,2,3 -> 비동의 타입에 3,2,1점
      const pts = 4 - choice;
      score[disagreeType] = (score[disagreeType] || 0) + pts;
    } else if (choice > 4) {
      // 5,6,7 -> 동의 타입에 1,2,3점
      const pts = choice - 4;
      score[agreeType] = (score[agreeType] || 0) + pts;
    }
    // choice === 4: 점수 없음
  }

  const pairs = ["RT", "CF", "JM", "AN"];
  let answer = "";

  for (const pair of pairs) {
    const [a, b] = pair; // 지표의 두 타입
    const sa = score[a] || 0;
    const sb = score[b] || 0;

    if (sa > sb) answer += a;
    else if (sb > sa) answer += b;
    else answer += a < b ? a : b; // 동점이면 사전순
  }

  return answer;
}
