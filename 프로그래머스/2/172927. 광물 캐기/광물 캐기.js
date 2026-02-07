function solution(picks, minerals) {
    const [dia, iron, stone] = picks;
    const totalPicks = dia + iron + stone;

    // 1️⃣ 최대 캘 수 있는 광물까지만 자르기
    const sliced = minerals.slice(0, totalPicks * 5);

    // 2️⃣ 5개씩 묶어서 구간 만들기
    const groups = [];
    for (let i = 0; i < sliced.length; i += 5) {
        let d = 0, ir = 0, st = 0;
        for (let j = i; j < i + 5 && j < sliced.length; j++) {
            if (sliced[j] === "diamond") d++;
            else if (sliced[j] === "iron") ir++;
            else st++;
        }
        groups.push([d, ir, st]);
    }

    // 3️⃣ 돌 곡괭이 기준 피로도로 정렬
    groups.sort((a, b) => {
        const fatigueA = a[0] * 25 + a[1] * 5 + a[2];
        const fatigueB = b[0] * 25 + b[1] * 5 + b[2];
        return fatigueB - fatigueA;
    });

    let answer = 0;
    let d = dia, i = iron, s = stone;

    // 4️⃣ 좋은 곡괭이부터 사용
    for (const [dd, ii, ss] of groups) {
        if (d > 0) {
            answer += dd + ii + ss;
            d--;
        } else if (i > 0) {
            answer += dd * 5 + ii + ss;
            i--;
        } else if (s > 0) {
            answer += dd * 25 + ii * 5 + ss;
            s--;
        } else {
            break;
        }
    }

    return answer;
}
