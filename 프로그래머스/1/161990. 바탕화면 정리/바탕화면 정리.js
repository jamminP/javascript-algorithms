function solution(wallpaper) {
    // 좌표의 최솟값과 최댓값을 구하기 위해 초기값 설정
    let minRow = Infinity;
    let minCol = Infinity;
    let maxRow = -Infinity;
    let maxCol = -Infinity;

    // 바탕화면 전체를 순회
    for (let r = 0; r < wallpaper.length; r++) {
        for (let c = 0; c < wallpaper[r].length; c++) {
            // 파일('#')을 발견했을 때
            if (wallpaper[r][c] === '#') {
                // 시작점(왼쪽 위) 후보 업데이트
                minRow = Math.min(minRow, r);
                minCol = Math.min(minCol, c);
                
                // 끝점(오른쪽 아래) 후보 업데이트
                // 파일이 있는 칸을 모두 감싸야 하므로 r+1, c+1로 계산
                maxRow = Math.max(maxRow, r + 1);
                maxCol = Math.max(maxCol, c + 1);
            }
        }
    }

    return [minRow, minCol, maxRow, maxCol];
}