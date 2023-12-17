/* 연결 요소의 개수 */
const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
let input = `
6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3
`
const N = Number(input.toString().trim().split("\n")[0].split(" ")[0])
const M = Number(input.toString().trim().split("\n")[0].split(" ")[1])
const relationList = input.toString().trim().split("\n").slice(1)
// console.log("N, M", N, M)

// 1 -- 2 3
//  \  /  |
//   5    |
// 4 - 6  |
// \______|

class Graph {
  constructor() {
    this.adjacencyList = new Map()
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, [])
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2)
    this.adjacencyList.get(vertex2).push(vertex1)
  }

  dfs_recursive(vertex, visited = new Map()) {
    visited.set(vertex, true)
    let result = [vertex]

    const neighborListOfThisVertext = this.adjacencyList.get(vertex)
    neighborListOfThisVertext.forEach((neighbor) => {
      if (!visited.get(neighbor)) {
        result.push(...this.dfs_recursive(neighbor, visited))
      }
    })

    return result
  }

  connectedComponents() {
    const visited = new Map()
    let components = []

    this.adjacencyList.forEach((value, neighbor) => {
      if (!visited.get(neighbor)) {
        components.push(this.dfs_recursive(neighbor, visited))
      }
    })

    return { count: components.length, components }
  }

  // 재귀없는 dfs
  dfs(startNode) {
    const stack = [startNode]
    const result = []
    const visited = new Map()

    visited.set(startNode, true)

    let currentVertex

    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjacencyList.get(currentVertex).forEach((neighbor) => {
        if (!visited.get(neighbor)) {
          visited.set(neighbor, true)
          stack.push(neighbor)
        }
      })
    }

    return result
  }
}

const array = new Array(N).fill(0).map((e, i) => i + 1)
const graph = new Graph(N)
array.forEach((el) => graph.addVertex(el))

relationList.forEach((el) => {
  const [u, v] = el.split(" ").map((e) => Number(e))

  graph.addEdge(u, v)
})

console.log(graph.connectedComponents().count)
