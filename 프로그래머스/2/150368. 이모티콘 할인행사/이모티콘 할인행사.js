function solution(users, emoticons) {
  const discounts = [10, 20, 30, 40];
  const m = emoticons.length;
  
  let maxSubscriber = 0;
  let maxRevenue = 0;
  
  function dfs(depth, currentDiscounts) {
    if (depth === m) {
      calculate(currentDiscounts);
      return;
    }
    
    for (let d of discounts) {
      currentDiscounts.push(d);
      dfs(depth + 1, currentDiscounts);
      currentDiscounts.pop();
    }
  }
  
  function calculate(currentDiscounts) {
    let subscriber = 0;
    let revenue = 0;
    
    for (let [minDiscount, limitPrice] of users) {
      let total = 0;
      
      for (let i = 0; i < m; i++) {
        if (currentDiscounts[i] >= minDiscount) {
          total += emoticons[i] * (100 - currentDiscounts[i]) / 100;
        }
      }
      
      if (total >= limitPrice) {
        subscriber++;
      } else {
        revenue += total;
      }
    }
    
    if (subscriber > maxSubscriber) {
      maxSubscriber = subscriber;
      maxRevenue = revenue;
    } else if (subscriber === maxSubscriber) {
      maxRevenue = Math.max(maxRevenue, revenue);
    }
  }
  
  dfs(0, []);
  
  return [maxSubscriber, maxRevenue];
}