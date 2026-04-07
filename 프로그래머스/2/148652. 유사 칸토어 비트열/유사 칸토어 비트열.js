function solution(n, l, r) {

    function count(n, l, r) {
        if (n === 0) return 1; // "1"

        const len = 5 ** (n - 1);
        let result = 0;

        for (let i = 0; i < 5; i++) {
            const start = i * len + 1;
            const end = (i + 1) * len;

            // 겹치는 구간 계산
            const left = Math.max(l, start);
            const right = Math.min(r, end);

            if (left > right) continue;

            // 가운데 블록 (0 덩어리)
            if (i === 2) continue;

            // 전체 포함이면 바로 계산
            if (left === start && right === end) {
                result += 4 ** (n - 1);
            } else {
                // 부분 포함이면 재귀
                result += count(n - 1, left - start + 1, right - start + 1);
            }
        }

        return result;
    }

    return count(n, l, r);
}