function solution(rows, columns, queries) {
    // 1. 행렬 생성
    const matrix = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: columns }, (_, j) => i * columns + j + 1)
    );

    const answer = [];

    for (const [x1, y1, x2, y2] of queries) {
        // 인덱스 보정 (0-based)
        const r1 = x1 - 1, c1 = y1 - 1;
        const r2 = x2 - 1, c2 = y2 - 1;

        let prev = matrix[r1][c1];
        let minValue = prev;

        // 위쪽
        for (let c = c1 + 1; c <= c2; c++) {
            const temp = matrix[r1][c];
            matrix[r1][c] = prev;
            prev = temp;
            minValue = Math.min(minValue, prev);
        }

        // 오른쪽
        for (let r = r1 + 1; r <= r2; r++) {
            const temp = matrix[r][c2];
            matrix[r][c2] = prev;
            prev = temp;
            minValue = Math.min(minValue, prev);
        }

        // 아래쪽
        for (let c = c2 - 1; c >= c1; c--) {
            const temp = matrix[r2][c];
            matrix[r2][c] = prev;
            prev = temp;
            minValue = Math.min(minValue, prev);
        }

        // 왼쪽
        for (let r = r2 - 1; r >= r1; r--) {
            const temp = matrix[r][c1];
            matrix[r][c1] = prev;
            prev = temp;
            minValue = Math.min(minValue, prev);
        }

        answer.push(minValue);
    }

    return answer;
}
