function solution(new_id) {
  // 1단계: 소문자
  let id = new_id.toLowerCase();

  // 2단계: 허용 문자만 남기기
  id = id.replace(/[^a-z0-9\-_.]/g, "");

  // 3단계: 마침표 2번 이상 -> 1개
  id = id.replace(/\.{2,}/g, ".");

  // 4단계: 처음/끝 마침표 제거
  id = id.replace(/^\.|\.$/g, "");

  // 5단계: 빈 문자열이면 "a"
  if (id.length === 0) id = "a";

  // 6단계: 15자 초과면 자르고, 끝 마침표 제거
  if (id.length >= 16) id = id.slice(0, 15).replace(/\.$/g, "");

  // 7단계: 길이 2 이하이면 마지막 문자 반복해서 길이 3 만들기
  while (id.length <= 2) {
    id += id[id.length - 1];
  }

  return id;
}
