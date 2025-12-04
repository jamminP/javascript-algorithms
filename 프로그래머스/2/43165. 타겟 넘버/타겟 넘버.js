function solution(numbers, target) {
  function dfs(index, sum) {
    if (index === numbers.length) {
      return sum === target ? 1 : 0;
    }

    const plus = dfs(index + 1, sum + numbers[index]);

    const minus = dfs(index + 1, sum - numbers[index]);

    return plus + minus;
  }

  return dfs(0, 0);
}