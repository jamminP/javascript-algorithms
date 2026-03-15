function solution(points, routes) {
  const robots = [];

  // 각 로봇 이동 경로 생성
  for (let route of routes) {
    const path = [];

    let [r, c] = points[route[0] - 1];
    path.push([r, c]);

    for (let i = 1; i < route.length; i++) {
      let [nr, nc] = points[route[i] - 1];

      // r 이동 먼저
      while (r !== nr) {
        r += r < nr ? 1 : -1;
        path.push([r, c]);
      }

      // c 이동
      while (c !== nc) {
        c += c < nc ? 1 : -1;
        path.push([r, c]);
      }
    }

    robots.push(path);
  }

  const maxTime = Math.max(...robots.map(r => r.length));
  let answer = 0;

  for (let t = 0; t < maxTime; t++) {
    const map = new Map();

    for (let robot of robots) {
      if (t >= robot.length) continue;

      const [r, c] = robot[t];
      const key = `${r},${c}`;

      map.set(key, (map.get(key) || 0) + 1);
    }

    for (let v of map.values()) {
      if (v >= 2) answer++;
    }
  }

  return answer;
}