function solution(edges) {
    const inDegree = {};
    const outDegree = {};
    
    // 1. 차수 계산
    for (const [a, b] of edges) {
        outDegree[a] = (outDegree[a] || 0) + 1;
        inDegree[b] = (inDegree[b] || 0) + 1;
        
        if (!(a in inDegree)) inDegree[a] = inDegree[a] || 0;
        if (!(b in outDegree)) outDegree[b] = outDegree[b] || 0;
    }

    let createdNode = 0;
    
    // 2. 생성 정점 찾기
    for (const node in outDegree) {
        if (outDegree[node] >= 2 && inDegree[node] === 0) {
            createdNode = Number(node);
            break;
        }
    }

    let stick = 0;
    let eight = 0;

    // 3. 그래프 유형 판별
    for (const node in inDegree) {
        const inD = inDegree[node] || 0;
        const outD = outDegree[node] || 0;

        // 막대: 끝 노드
        if (outD === 0 && inD >= 1) {
            stick++;
        }

        // 8자: 교차점
        if (inD >= 2 && outD >= 2) {
            eight++;
        }
    }

    const total = outDegree[createdNode];
    const donut = total - stick - eight;

    return [createdNode, donut, stick, eight];
}