function solution(skill, skill_trees) {
  let count = 0;

  for (const tree of skill_trees) {
    const filtered = [...tree].filter(ch => skill.includes(ch)).join("");

    if (skill.startsWith(filtered)) count++;
  }

  return count;
}
