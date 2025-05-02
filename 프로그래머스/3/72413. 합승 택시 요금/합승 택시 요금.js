function solution(n, s, a, b, fares) {
    var answer = 0;
    const Inf = 9999999999999;
    const dist = Array.from({length: n+1}, () => Array(n+1).fill(Inf));
    
    if(n < 3 && n > 200) // 지점갯수 n은 3 이상 200 이하인 자연수입니다.
        throw new Error('지점갯수 n은 3 이상 200 이하인 자연수가 아닙니다.');
    
    if((s === a || s === b || a === b) || (s < 1 && s > n) || (a < 1 && a > n) || (b < 1 && b > n))  
        throw new Error('지점 s, a, b는 1 이상 n 이하인 자연수이며, 각기 서로 다른 값이 아닙니다.');
    
    
    
    // 출발과 도착이 같은 것은 0으로 대입.
    for(let z = 1; z <= n; z++){
        dist[z][z] = 0;
    }
    
    // 배열에 값 대입.
    for(let q = 0; q < fares.length; q++){
        dist[fares[q][0]][fares[q][1]] = fares[q][2];
        dist[fares[q][1]][fares[q][0]] = fares[q][2];
    }
    
    // Floyed - Washall 배열 생성.
    for(let k = 1; k <= n; k++){
        for(let i = 1; i <= n; i++){
            for(let j = 1; j <= n; j++){
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }
    
    // 
    answer = Inf;
    
    for (let k = 1; k <= n; k++) {
        answer = Math.min(answer, dist[s][k] + dist[k][a] + dist[k][b]);
    }

    
    
    return answer;
}