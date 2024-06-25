// bfs로 하나만 다른 neighbor 리스트 구하고
// visited 찍든지 빼든지하고
// 그러고 그 neighbor에서 하나 골라서 하나만 다른 리스트 뽑고
// 최단 거리 찾으면 될 듯?

function solution(begin, target, words) {
  let visited = Object.fromEntries(words.map((word) => [word, 0]));
  let path = [begin];

  while (path.length > 0) {
    let currentWord = path.shift();

    const neighbors = words.filter(
      (word) => checkDiffOnlyOneOut(currentWord, word) && visited[word] === 0,
    );

    if (currentWord === target) {
      return visited[currentWord];
    }

    for (let i = 0; i < neighbors.length; i++) {
      if (visited[neighbors[i]] === 0) {
        const prevStep = visited[currentWord] || 0;
        visited[neighbors[i]] = prevStep + 1;
        path.push(neighbors[i]);
      }
    }
  }

  return 0;
}

const checkDiffOnlyOneOut = (word, diffWord) => {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === diffWord[i]) count++;
  }

  return count === word.length - 1;
};

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4

console.log(solution("hit", "hot", ["hit", "hot", "lot"])); // 1
