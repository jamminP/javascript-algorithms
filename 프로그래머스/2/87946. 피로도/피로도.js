function solution(k, dungeons) {
    let max = 0;
    
    const visited = Array(dungeons.length).fill(false);
    
    function dfs(initHeath, count){
        max = Math.max(max, count);
        
        for(let i = 0; i < dungeons.length; i++){
            const [need, cost] = dungeons[i];
            
            if(!visited[i] && initHeath >= need){
                visited[i] = true;
                dfs(initHeath - cost, count + 1);
                visited[i] = false;
            }
        }
        
    }
    
    dfs(k, 0);
    
    return max;
}