class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  bfs(vertex) {
    let visited = new Map();
    let queue = [[vertex, 0]]; // [시작 vertex, vertex와의 거리]
    let result = [];

    let maxDistance = 0;

    visited.set(vertex, true);

    while (queue.length) {
      let [currentVertex, distance] = queue.shift();
      let neighbors = this.adjacencyList.get(currentVertex);

      result.push([currentVertex, distance]);
      maxDistance = distance; // maxDistance 저장

      for (let i = 0; i < neighbors.length; i++) {
        let neighborVertex = neighbors[i];
        if (!visited.get(neighborVertex)) {
          visited.set(neighborVertex, true);
          queue.push([neighborVertex, distance + 1]); // distance 계산
        }
      }
    }

    return { result, maxDistance };
  }
}

function solution(n, edge) {
  const graph = new Graph();

  const array = new Array(n).fill(0);

  array.forEach((value, index) => {
    graph.addVertex(index + 1);
  });

  edge.forEach(([a, b]) => {
    graph.addEdge(a, b);
  });

  const bfsResult = graph.bfs(1);

  const answer = bfsResult.result.filter(
    ([, distance]) => distance === bfsResult.maxDistance,
  ).length;

  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ]),
); // 	3
