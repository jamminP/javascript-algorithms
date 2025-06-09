function solution(want, number, discount) {
    var answer = 0;

    let discountMap = new Map();
    let wantMap = new Map();

    for (let j = 0; j < want.length; j++) {
        wantMap.set(want[j], number[j]);
    }

    for (let k = 0; k <= discount.length - 10; k++) {
        discountMap.clear();

        // 현재 윈도우의 할인 상품 count
        for (let i = k; i < k + 10; i++) {
            discountMap.set(discount[i], (discountMap.get(discount[i]) || 0) + 1);
        }

        let isMatch = true;
        for (const [key, value] of wantMap) {
            if (discountMap.get(key) !== value) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) answer++;
    }

    return answer;
}