function solution(land) {
    const n = land.length;
    const m = land[0].length;
    
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const groupId = Array.from({ length: n }, () => Array(m).fill(0));
    
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    let id = 1;
    const groupSize = {}; // id별 크기 저장
    
    // 1️⃣ 석유 덩어리 탐색 (BFS)
    function bfs(startX, startY) {
        const queue = [[startX, startY]];
        visited[startX][startY] = true;
        groupId[startX][startY] = id;
        
        let size = 1;
        
        while (queue.length) {
            const [x, y] = queue.shift();
            
            for (let d = 0; d < 4; d++) {
                const nx = x + dx[d];
                const ny = y + dy[d];
                
                if (
                    nx >= 0 && ny >= 0 &&
                    nx < n && ny < m &&
                    !visited[nx][ny] &&
                    land[nx][ny] === 1
                ) {
                    visited[nx][ny] = true;
                    groupId[nx][ny] = id;
                    queue.push([nx, ny]);
                    size++;
                }
            }
        }
        
        return size;
    }
    
    // 전체 순회하면서 덩어리 구하기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                const size = bfs(i, j);
                groupSize[id] = size;
                id++;
            }
        }
    }
    
    // 2️⃣ 각 열마다 계산
    let maxOil = 0;
    
    for (let col = 0; col < m; col++) {
        const seen = new Set();
        let total = 0;
        
        for (let row = 0; row < n; row++) {
            if (groupId[row][col] !== 0) {
                seen.add(groupId[row][col]);
            }
        }
        
        for (const gid of seen) {
            total += groupSize[gid];
        }
        
        maxOil = Math.max(maxOil, total);
    }
    
    return maxOil;
}