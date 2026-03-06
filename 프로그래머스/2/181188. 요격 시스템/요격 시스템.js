function solution(targets) {
    // 끝점 기준 정렬
    targets.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let last = -Infinity;

    for (const [s, e] of targets) {
        // 현재 미사일로 요격 불가능하면 새로 발사
        if (last <= s) {
            count++;
            last = e;
        }
    }

    return count;
}