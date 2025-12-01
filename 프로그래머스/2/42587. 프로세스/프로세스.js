function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({
    priority,
    index,
  }));

  let order = 0; // 몇 번째로 실행되는지 카운트

  while (queue.length > 0) {
    const current = queue.shift();

    const hasHigherPriority = queue.some(
      (process) => process.priority > current.priority
    );

    if (hasHigherPriority) {
      queue.push(current);
    } else {
      order += 1;

      if (current.index === location) {
        return order;
      }
    }
  }

  return -1;
}
