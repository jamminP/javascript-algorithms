function solution(friends, gifts) {
    const n = friends.length;
    
    // 이름 → 인덱스 매핑
    const idx = {};
    friends.forEach((name, i) => idx[name] = i);
    
    // 1️⃣ 선물 기록 (2차원 배열)
    const give = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (const gift of gifts) {
        const [from, to] = gift.split(" ");
        give[idx[from]][idx[to]]++;
    }
    
    // 2️⃣ 선물 지수 계산
    const giftScore = Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        let giveSum = 0;
        let receiveSum = 0;
        
        for (let j = 0; j < n; j++) {
            giveSum += give[i][j];
            receiveSum += give[j][i];
        }
        
        giftScore[i] = giveSum - receiveSum;
    }
    
    // 3️⃣ 다음 달 받을 선물 계산
    const nextGift = Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            
            if (give[i][j] > give[j][i]) {
                nextGift[i]++;
            } else if (give[i][j] < give[j][i]) {
                nextGift[j]++;
            } else {
                // 선물 수 같거나 기록 없음 → 선물 지수 비교
                if (giftScore[i] > giftScore[j]) {
                    nextGift[i]++;
                } else if (giftScore[i] < giftScore[j]) {
                    nextGift[j]++;
                }
                // 같으면 아무 일도 없음
            }
        }
    }
    
    // 최대값 반환
    return Math.max(...nextGift);
}