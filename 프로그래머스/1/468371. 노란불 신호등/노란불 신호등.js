function solution(signals) {
    // 최대공약수
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    // 최소공배수
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    // 전체 주기의 LCM 구하기
    let totalLCM = 1;
    const cycles = signals.map(([G, Y, R]) => G + Y + R);

    for (let c of cycles) {
        totalLCM = lcm(totalLCM, c);
    }

    // 시간 탐색
    for (let t = 1; t <= totalLCM; t++) {
        let allYellow = true;

        for (let [G, Y, R] of signals) {
            let cycle = G + Y + R;
            let time = (t - 1) % cycle + 1; // 1초부터 시작 보정

            if (!(time > G && time <= G + Y)) {
                allYellow = false;
                break;
            }
        }

        if (allYellow) return t;
    }

    return -1;
}