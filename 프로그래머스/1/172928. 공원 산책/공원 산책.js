function solution(park, routes) {
    const H = park.length;
    const W = park[0].length;

    // 방향 벡터
    const dir = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    };

    // 시작 위치 찾기
    let x = 0, y = 0;
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (park[i][j] === 'S') {
                x = i;
                y = j;
            }
        }
    }

    // 명령 처리
    for (const route of routes) {
        const [op, nStr] = route.split(' ');
        const n = Number(nStr);
        const [dx, dy] = dir[op];

        let nx = x;
        let ny = y;
        let canMove = true;

        // 이동 경로 검증
        for (let i = 1; i <= n; i++) {
            const tx = x + dx * i;
            const ty = y + dy * i;

            // 공원 벗어나거나 장애물 만나면 실패
            if (
                tx < 0 || tx >= H ||
                ty < 0 || ty >= W ||
                park[tx][ty] === 'X'
            ) {
                canMove = false;
                break;
            }
            nx = tx;
            ny = ty;
        }

        // 이동 가능할 때만 위치 갱신
        if (canMove) {
            x = nx;
            y = ny;
        }
    }

    return [x, y];
}
