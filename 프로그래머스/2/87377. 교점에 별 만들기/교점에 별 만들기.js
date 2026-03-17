function solution(line) {
    const points = [];

    // 1. 모든 교점 구하기
    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
            const [A, B, C] = line[i];
            const [D, E, F] = line[j];

            const denominator = A * E - B * D;

            // 평행
            if (denominator === 0) continue;

            const x = (B * F - C * E) / denominator;
            const y = (C * D - A * F) / denominator;

            // 정수인지 체크
            if (Number.isInteger(x) && Number.isInteger(y)) {
                points.push([x, y]);
            }
        }
    }

    // 2. 범위 구하기
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;

    for (const [x, y] of points) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
    }

    const width = maxX - minX + 1;
    const height = maxY - minY + 1;

    // 3. 배열 만들기
    const board = Array.from({ length: height }, () =>
        Array(width).fill('.')
    );

    // 4. 별 찍기
    for (const [x, y] of points) {
        const row = maxY - y;
        const col = x - minX;
        board[row][col] = '*';
    }

    // 5. 문자열로 변환
    return board.map(row => row.join(''));
}