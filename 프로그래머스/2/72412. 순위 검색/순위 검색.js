function solution(info, query) {
    const map = new Map();

    function dfs(arr, score, idx, key) {
        if (idx === 4) {
            const k = key.join(" ");
            if (!map.has(k)) map.set(k, []);
            map.get(k).push(score);
            return;
        }

        dfs(arr, score, idx + 1, key);

        const temp = key[idx];
        key[idx] = "-";
        dfs(arr, score, idx + 1, key);
        key[idx] = temp;
    }

    for (let i of info) {
        const split = i.split(" ");
        const score = Number(split.pop());

        dfs(split, score, 0, [...split]);
    }

    for (let v of map.values()) {
        v.sort((a, b) => a - b);
    }

    const answer = [];

    for (let q of query) {
        q = q.replace(/ and /g, " ");
        const arr = q.split(" ");
        const score = Number(arr.pop());

        const key = arr.join(" ");

        if (!map.has(key)) {
            answer.push(0);
            continue;
        }

        const scores = map.get(key);

        let left = 0;
        let right = scores.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (scores[mid] >= score) right = mid;
            else left = mid + 1;
        }

        answer.push(scores.length - left);
    }

    return answer;
}