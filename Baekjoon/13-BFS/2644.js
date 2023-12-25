/* 촌수 계산 */
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
    this.adjacentList.set(fromVertex, [...fromVertexList, toVertex])
    this.adjacentList.set(toVertex, [...toVertexList, fromVertex])
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

  get1chonList(vertex) {
    let neighbors = this.adjacentList.get(vertex)

    return neighbors
  }

  // 이건 DFS 기반이기 떄문에 최단 루트가 아닐 수도 있음.
  getRoute(fromVertex, toVertex) {
    if (!this.dfs(fromVertex).includes(toVertex)) {
      return -1
    }

    let currentVertex = fromVertex
    let chon = 0

    const findToVertex = (vertex, visited = new Map()) => {
      const oneChonList = this.get1chonList(vertex).filter((el) => !visited.get(el))

      if (vertex === toVertex || !oneChonList.length) return chon
      visited.set(fromVertex, true)
      visited.set(vertex, true)

      chon++

      if (oneChonList.includes(toVertex)) return chon

      oneChonList.forEach((oneChon) => {
        findToVertex(oneChon, visited)
      })

      return chon
    }

    return findToVertex(currentVertex)
  }

  // 최단 거리를 구할 수 있도록 BFS를 사용한다.
  getShortestRoute(startVertex, endVertex) {
    let visited = new Map()
    let queue = [[startVertex, 0]]

    visited.set(startVertex, true)

    while (queue.length) {
      let [currentVertex, distance] = queue.shift()
      let neighbors = this.adjacentList.get(currentVertex)

      if (currentVertex === endVertex) {
        return distance
      }

      for (let i = 0; i < neighbors.length; i++) {
        let neighborVertex = neighbors[i]
        if (!visited.get(neighborVertex)) {
          visited.set(neighborVertex, true)
          queue.push([neighborVertex, distance + 1])
        }
      }
    }

    return -1
  }
}

const graph = new Graph()

function solution() {
  const [numberOfPeople] = input[0]
  const [startSibling, endSibling] = input[1]

  new Array(numberOfPeople)
    .fill(0)
    .map((el, index) => index + 1)
    .forEach((el) => graph.addVertex(el))

  const relations = input.slice(3)

  relations.forEach((relation) => {
    graph.addEdge(...relation)
  })

  console.log(graph.getShortestRoute(startSibling, endSibling))
}

//   1
//   | \
//   2  3
//  /|\
// 7 8 9
// 4
// |\
// 5 6

//   1
//   | \
//   2  3
//  /|\
// 7 8 9
//   |
//  10
//  |
// 11
//  |
// 12
//  |
//  4
//  |\
//  5 6
