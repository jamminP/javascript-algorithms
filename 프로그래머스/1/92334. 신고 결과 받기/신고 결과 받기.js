function solution(id_list, report, k) {
  // 1. 중복 신고 제거
  const uniqueReport = [...new Set(report)];

  // 2. 신고당한 횟수 저장
  const reportCount = {};
  id_list.forEach(id => reportCount[id] = 0);

  // 3. 신고자별 신고 목록 저장
  const reportMap = {};
  id_list.forEach(id => reportMap[id] = []);

  // 4. 신고 데이터 파싱
  uniqueReport.forEach(r => {
    const [from, to] = r.split(" ");
    reportCount[to] += 1;
    reportMap[from].push(to);
  });

  // 5. 정지 대상 구하기
  const banned = new Set();
  for (let user in reportCount) {
    if (reportCount[user] >= k) {
      banned.add(user);
    }
  }

  // 6. 결과 메일 카운트
  const result = [];

  for (let user of id_list) {
    let count = 0;
    for (let target of reportMap[user]) {
      if (banned.has(target)) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
}