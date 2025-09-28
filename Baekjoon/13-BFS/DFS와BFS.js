const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n");
const [N, M, firstNode] = input[0].split(" ").map((d) => parseInt(d));
const edges = input.slice(1);
console.log("🚀 ~ N:", N);
console.log("🚀 ~ M:", M);
console.log("🚀 ~ firstNode:", firstNode);
console.log("🚀 ~ edges:", edges);

// 먼저 그래프를 완성해야 함. (정점 vertex와 간선 edge의 현황이 어떻게 되는지 보고 실제로 자료구조로 나타내야 함)
// 방법은 여러 가지 인접 리스트 array를 사용할 수도 있고, Map이나 object 형태로도 나타낼수 있다. 그리고 인접 행렬 형태로도 나타낼 수 있다.
// 일단은 간단하게 Map 형태로 나타내려고 함 (개인적으로 console 찍었을 때 매우 직관적) A => ["B", "C"] 이렇게 A는 B와 C가 연결되어 있음이 잘 나타나는 것 같음.

// class 형태로 구현해서 코드 가독성을 높이는 것을 좋아함!
// 그래프를 구현하는 자료구조는 Map을 이용.

class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addEdge(a, b) {
    if (!this.vertices.has(a)) this.vertices.set(a, []);
    if (!this.vertices.has(b)) this.vertices.set(b, []);

    const aList = this.vertices.get(a);
    const bList = this.vertices.get(b);

    // 중복 제거
    if (!aList.includes(b)) {
      aList.push(b);
      aList.sort((x, y) => x - y); // sorting
    }

    if (!bList.includes(a)) {
      bList.push(a);
      bList.sort((x, y) => x - y);
    }
  }

  // 지역 변수로 visited Set 생성 (방문 완료 처리 마킹)
  // result는 방문 순서 결과를 반환함
  // start는 시작 노드를 가리킴
  dfsRecursive(start, visited = new Set(), result = []) {
    visited.add(start); // 현재 노드 방문 처리
    result.push(start); // 결과 배열에 추가 (방문했으니까)

    const neighbors = this.vertices.get(start) || []; // 인접 노드 가져오기
    // 인접 노드 모두 돌면서 각 인접 노드의 인접 노드들을 끝까지 찾게함 (재귀로)
    for (const neighbor of neighbors) {
      // 인접 노드 방문한적 없는 경우만 재귀 호출
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited, result);
      }
    }

    return result;
  }

  bfs(start) {
    const visited = new Set([start]);
    const queue = [start];
    const result = [];

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current);

      // 지금 인접한 노드 먼저 다 돌아버리기
      const neighbors = this.vertices.get(current) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return result;
  }
}

const graph = new Graph();

edges.forEach((edge) => {
  const [aNode, bNode] = edge.split(" ").map(Number);
  graph.addEdge(aNode, bNode);
});

console.log(graph.vertices);
console.log(graph.dfsRecursive(firstNode));
console.log(graph.bfs(firstNode));

//     1
//    / \
//   2   3
//    \ /
//     4
// DFS: 1 -> 2 -> 4 -> 3
// BFS: 1 -> 2 -> 3 -> 4 (같은 자식이면 작은 수 먼저)

// 5 4
// 5 2
// 1 2
// 3 4
// 3 1

// 5
// | \
// 4  2
// |   \
// 3 - 1
// DFS: 3 -> 1 -> 2 -> 5 -> 4
// BFS: 3 -> 1 -> 4 -> 2 -> 5

// 1000 1 1000
// 999 1000
// 999 - 1000
// 1000 -> 999
