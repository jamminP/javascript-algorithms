function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  
  let maxHealth = health;
  let currentHealth = health;
  let combo = 0; // 연속 성공 시간
  let attackIndex = 0;
  
  // 마지막 공격 시간까지 시뮬레이션
  const lastTime = attacks[attacks.length - 1][0];
  
  for (let time = 1; time <= lastTime; time++) {
    
    // 현재 시간이 공격 시간인 경우
    if (attackIndex < attacks.length && time === attacks[attackIndex][0]) {
      const damage = attacks[attackIndex][1];
      
      currentHealth -= damage;
      combo = 0; // 붕대 취소
      
      if (currentHealth <= 0) return -1;
      
      attackIndex++;
    } else {
      // 붕대 감기 성공
      currentHealth += x;
      combo++;
      
      if (combo === t) {
        currentHealth += y;
        combo = 0;
      }
      
      // 최대 체력 초과 방지
      if (currentHealth > maxHealth) {
        currentHealth = maxHealth;
      }
    }
  }
  
  return currentHealth;
}