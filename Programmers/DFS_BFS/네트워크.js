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
  }

  dfs_recursive(vertex, visited = new Map()) {
    visited.set(vertex, true);
    let result = [vertex];

    const neighborListOfThisVertext = this.adjacencyList.get(vertex);
    neighborListOfThisVertext.forEach((neighbor) => {
      if (!visited.get(neighbor)) {
        result.push(...this.dfs_recursive(neighbor, visited));
      }
    });

    return result;
  }

  connectedComponents() {
    const visited = new Map();
    let components = [];

    this.adjacencyList.forEach((value, neighbor) => {
      if (!visited.get(neighbor)) {
        // visited가 다 사라질 때 까지 dfs로 탐색
        components.push(this.dfs_recursive(neighbor, visited)); // dfs 재귀로 연결된 요소를 끝까지 파고들어서 그 요소들을 componets 배열에 넣음.
      }
    });

    // components에 담긴 요소들의 개수가 네트워크의 개수
    return { count: components.length, components };
  }
}

function solution(n, computers) {
  const graph = new Graph();

  for (let i = 0; i < n; i++) {
    graph.addVertex(i);
  }

  computers.map((connection, computer) => {
    connection.map((connect, index) => {
      if (computer !== index && connect === 1) {
        graph.addEdge(computer, index);
      }
    });
  });

  return graph.connectedComponents().count;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ]),
); // 1
