function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    if(bridge_length < 1 || bridge_length > 10000) // bridge_length는 1 이상 10,000 이하입니다.
        return false;
    
    if(weight < 1 || weight > 10000) // weight는 1 이상 10,000 이하입니다.
        return false;
    
    if(truck_weights.length < 1 || truck_weights.length > 10000) // truck_weights의 길이는 1 이상 10,000 이하입니다.
        return false; 
    
    if(!truck_weights.every(truck => truck >= 1 && truck <= weight)) // 모든 트럭의 무게는 1 이상 weight 이하입니다.
        return false;
    
    const queue = new Array(bridge_length).fill(0); // 최대 올라갈 수 있는 댓수
    let bridgeWeight  = 0; // 최대로 건딜 수 있는 무게.
    
    while(truck_weights.length > 0 || bridgeWeight > 0){    
        const outData = queue.shift(); // 다리 맨 앞의 트럭이 나오면서 그 값을 대입
        
        bridgeWeight -= outData; // 트럭이 빠져나오면서 생기는 여유 무게.
        
        if(truck_weights.length > 0){ // 0보다 큰 경우는 아직 대기하는 트럭이 있다는 의미
            const truckData = truck_weights[0]; // 비교할 트럭 데이터
            
            if(bridgeWeight + truckData <= weight){ // 트럭이 들어올 수 있는 경우의 수,
                queue.push(truckData);
                bridgeWeight += truckData;
                truck_weights.shift(); // 빠져나온 트럭은 제거.
            }else{
                queue.push(0); // 트럭이 진입하지 못하므로 빈공간을 다시 유지.
            }
        }else{
            //트럭이 이제 존재하지 않으므로 0으로 빈공간 유지.
            queue.push(0);
        }
        
        answer++;
    }
    
    return answer;
}