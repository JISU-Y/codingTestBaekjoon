// 문제
// 신종 바이러스인 웜 바이러스는 네트워크를 통해 전파된다. 한 컴퓨터가 웜 바이러스에 걸리면 그 컴퓨터와 네트워크 상에서 연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 된다.

// 예를 들어 7대의 컴퓨터가 <그림 1>과 같이 네트워크 상에서 연결되어 있다고 하자. 1번 컴퓨터가 웜 바이러스에 걸리면 웜 바이러스는 2번과 5번 컴퓨터를 거쳐 3번과 6번 컴퓨터까지 전파되어 2, 3, 5, 6 네 대의 컴퓨터는 웜 바이러스에 걸리게 된다. 하지만 4번과 7번 컴퓨터는 1번 컴퓨터와 네트워크상에서 연결되어 있지 않기 때문에 영향을 받지 않는다.

// 어느 날 1번 컴퓨터가 웜 바이러스에 걸렸다. 컴퓨터의 수와 네트워크 상에서 서로 연결되어 있는 정보가 주어질 때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 출력하는 프로그램을 작성하시오.

// 이 또한 연결되어 있는 노드 간에 어디까지 연결되어 있고, 그룹이 어떻게 되는지 확인해야 하는 문제이다.
// 형태 또한 인접 리스트로 되어 있음.
// 서로 다른 네트워크인지 판단하고, 그 네트워크에 몇개의 정점이 있는지를 판단하면 된다.

const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n");
const N = Number(input.shift());
console.log("🚀 ~ N:", N);
const M = Number(input.shift());
console.log("🚀 ~ M:", M);
const edges = input.map((e) => e.split(" ").map(Number));
console.log("🚀 ~ edges:", edges);

class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addEdge(aVertex, bVertex) {
    const aList = this.vertices.get(aVertex) || [];
    const bList = this.vertices.get(bVertex) || [];

    this.vertices.set(
      aVertex,
      !aList.includes(bVertex) ? [...aList, bVertex] : aList,
    ); // 굳이 sorting 없어도 될 듯
    this.vertices.set(
      bVertex,
      !bList.includes(aVertex) ? [...bList, aVertex] : bList,
    );
  }

  dfs(start, visited = new Set(), result = []) {
    visited.add(start);
    result.push(start);

    const neighbors = this.vertices.get(start) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfs(neighbor, visited, result);
      }
    }

    return result;
  }

  dfsWhile(start) {
    if (!this.vertices.has(start)) return [];

    const visited = new Set();
    const stack = [start];
    const result = [];

    while (stack.length > 0) {
      const current = stack.pop();

      if (visited.has(current)) continue; // 방문 했었으면 띙구기

      visited.add(current);
      result.push(current);

      const neighbors = this.vertices.get(current) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }

    return result;
  }
}

const graph = new Graph();

edges.forEach((edge) => {
  graph.addEdge(...edge);
});

console.log(graph.vertices);
const zombies = graph.dfsWhile(1); //.filter((d) => d !== 1);
console.log(zombies);
