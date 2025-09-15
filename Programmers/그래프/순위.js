class Graph {
  constructor() {
    this.adjacentList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacentList.has(vertex)) {
      this.adjacentList.set(vertex, []);
    }
  }

  addEdge(fromVertex, toVertex) {
    const fromVertexList = this.adjacentList.get(fromVertex);
    this.adjacentList.set(fromVertex, [...fromVertexList, toVertex]);
  }

  dfs(vertex, visited = new Map()) {
    visited.set(vertex, true);
    let result = [vertex];

    this.adjacentList.get(vertex).forEach((neighbor) => {
      if (!visited.get(neighbor)) {
        result.push(...this.dfs(neighbor, visited));
      }
    });

    return result;
  }

  bfs(vertex) {
    let visited = new Map();
    let queue = [vertex];
    let result = [];

    visited.set(vertex, true);

    while (queue.length) {
      let currentVertex = queue.shift();
      let neighbors = this.adjacentList.get(currentVertex);

      result.push(currentVertex);

      for (let i = 0; i < neighbors.length; i++) {
        let neighborVertex = neighbors[i];
        if (!visited.get(neighborVertex)) {
          visited.set(neighborVertex, true);
          queue.push(neighborVertex);
        }
      }
    }

    return result;
  }
}

function solution(n, results) {
  let answer = 0;

  const winGraph = new Graph(); // adjacentList Map의 "키"값이 가지고 있는 배열은 싸워서 내가 이기는 사람
  const loseGraph = new Graph(); // adjacentList Map의 "키"값이 가지고 있는 배열은 싸워서 내가 지는 사람

  const array = new Array(n).fill(0);

  array.forEach((value, index) => {
    winGraph.addVertex(index + 1);
    loseGraph.addVertex(index + 1);
  });

  results.forEach(([winner, loser]) => {
    winGraph.addEdge(winner, loser);
    loseGraph.addEdge(loser, winner);
  });

  // ex) 1은 winGraph에서 1 > 2 > 5 로 2명을 이김. 근데 loserGraph 에서는 누구 한테 지는지를 알 수 없음
  // 서로 더하면 1은 순위를 정확히 알 수 없음 (2명을 이기므로 최소 3위)
  // ex2) 2는 winGraph에서 2 > 5 로 1명을 이김. loserGraph 에서는 2 > 4, 3, 1 이어서 3명한테 짐
  // 서로 더하면 4 즉 자기를 포함해서 몇명한테 이기는지, 몇명한테 지는지 알기 때문에 정확히 순위를 알 수 있음 (4위)

  // 몇명한테 이기거나 지거나 알아갈 때 bfs 로 찾아야 함 (2 -> 4,3,1) 이렇게 되어 있으므로 2는 3명한테 이미 진 거니까
  // 2 -> 4 -> ? 이렇게 dfs로 가면 몇명한테 지는지 알 수 없음.

  for (let i = 1; i <= n; i++) {
    const winCount = winGraph.bfs(i).length - 1;
    const loseCount = loseGraph.bfs(i).length - 1;

    if (winCount + loseCount === n - 1) {
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ]),
); // 2

// 4 > 3
// 4 > 2
// 3 > 2
// 1 > 2
// 2 > 5

// 1 -> 2
// 2 -> 5
// 3 -> 2
// 4 -> 3, 2
// 5 ->

// 1 -> ?
// 2 -> 4, 3, 1
// 3 -> 4
// 4 -> ?
// 5 -> 2

// 1, 4, 3 -> 2 -> 5
// 1 4 3 (2) (5)
// 4 3 1 (2) (5)

//
//  1-2-5
//   /
//  3
// /
//4

// 풀이 과정 영감: https://uic11.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B7%B8%EB%9E%98%ED%94%84-%EC%88%9C%EC%9C%84-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4-featJS
