function solution(players, callings) {
  // 이름 -> 현재 인덱스
  const indexMap = new Map();
  players.forEach((name, idx) => {
    indexMap.set(name, idx);
  });

  for (const name of callings) {
    const idx = indexMap.get(name);
    const front = players[idx - 1];

    // players 배열에서 위치 교환
    players[idx - 1] = name;
    players[idx] = front;

    // 인덱스 갱신
    indexMap.set(name, idx - 1);
    indexMap.set(front, idx);
  }

  return players;
}
