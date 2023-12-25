/* DFS와 BFS */
/* ! 테스트 */
const path = "./input.txt"
const fs = require("fs")

const readline = require("readline")
const rl = readline.createInterface({
  input: fs.createReadStream(path),
  output: process.stdout,
})

// /* ! 제출용 */
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

let input = []

rl.on("line", function (line) {
  input.push(line.split(" ").map((e) => +e))
}).on("close", function () {
  solution()
  process.exit()
})

class Graph {
  constructor() {
    this.adjacentList = new Map()
  }

  addVertex(vertex) {
    if (!this.adjacentList.has(vertex)) {
      this.adjacentList.set(vertex, [])
    }
  }

  addEdge(fromVertex, toVertex) {
    const fromVertexList = this.adjacentList.get(fromVertex)
    const toVertexList = this.adjacentList.get(toVertex)
    this.adjacentList.set(
      fromVertex,
      [...fromVertexList, toVertex].sort((a, b) => a - b)
    )
    this.adjacentList.set(
      toVertex,
      [...toVertexList, fromVertex].sort((a, b) => a - b)
    )
  }

  dfs(vertex, visited = new Map()) {
    visited.set(vertex, true)
    let result = [vertex]

    this.adjacentList.get(vertex).forEach((neighbor) => {
      if (!visited.get(neighbor)) {
        result.push(...this.dfs(neighbor, visited))
      }
    })

    return result
  }

  bfs(vertex) {
    let visited = new Map()
    let queue = [vertex]
    let result = []

    visited.set(vertex, true)

    while (queue.length) {
      let currentVertex = queue.shift()
      let neighbors = this.adjacentList.get(currentVertex)

      result.push(currentVertex)

      for (let i = 0; i < neighbors.length; i++) {
        let neighborVertex = neighbors[i]
        if (!visited.get(neighborVertex)) {
          visited.set(neighborVertex, true)
          queue.push(neighborVertex)
        }
      }
    }

    return result
  }
}

function solution() {
  const [numOfVertex, numOfEdge, startVertex] = input.shift()

  const graph = new Graph()

  new Array(numOfVertex).fill(0).forEach((el, index) => {
    graph.addVertex(index + 1)
  })

  input.forEach((el) => {
    graph.addEdge(...el)
  })

  console.log(graph.dfs(startVertex).join(" "))
  console.log(graph.bfs(startVertex).join(" "))
}
