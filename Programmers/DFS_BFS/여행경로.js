// ICN -> JFK -> HND 이렇게 연결되어 있는 거고
// 그러면 ICN에 연결된 노드 리스트를 이용해서 연결 연결 끝까지 찾아가면 되나?
// 그렇게 되면 ICN에서 시작해서 끝까지 탐색하는 거니까 DFS가 되려나
// 일단 알아보기 쉽게 class 형태로 관리하면 좋을 듯

// 그냥 dfs돌면 끝나버릴 수 있음.

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

  dfs_recursive(vertex, visited, path) {
    visited.set(vertex, true);
    path.push(vertex);

    if (path.length === this.adjacencyList.size) {
      return [path.slice()];
    }

    let results = [];
    const neighbors = this.adjacencyList.get(vertex).slice().sort();
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor) || !visited.get(neighbor)) {
        results.push(...this.dfs_recursive(neighbor, visited, path));
        if (results.length > 0) {
          return results;
        }
      }
    }

    path.pop();
    visited.set(vertex, false);
    return results;
  }

  dfs(startVertex) {
    let visited = new Map();
    let path = [];
    return this.dfs_recursive(startVertex, visited, path);
  }
}

function solution(tickets) {
  let graph = new Graph();

  for (let [departure, arrival] of tickets) {
    graph.addVertex(departure);
    graph.addVertex(arrival);
    graph.addEdge(departure, arrival);
  }

  let result = graph.dfs("ICN");

  return result[0];
}

console.log(
  solution([
    ["ICN", "BBB"],
    ["ICN", "CCC"],
    ["CCC", "ICN"],
  ]),
); // AAA, CCC, AAA, BBB
console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ]),
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

console.log(
  solution([
    ["ICN", "D"],
    ["D", "ICN"],
    ["ICN", "B"],
  ]),
); // ['ICN', 'D', 'ICN', 'B']

// Graph {
//   adjacencyList: Map(3) {
//     'ICN' => [ 'ATL', 'SFO' ],
//     'SFO' => [ 'ATL' ],
//     'ATL' => [ 'ICN', 'SFO' ]
//   }
// }
// [ 'ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO' ]
