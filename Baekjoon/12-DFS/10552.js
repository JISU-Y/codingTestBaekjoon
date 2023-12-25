/* DOM */
const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
let input = `3 3 1
1 2
2 3
3 1
`
let [firstEl, ...cases] = input.toString().trim().split("\n")
const [pensioners, channels, initialChannel] = firstEl.split(" ").map((el) => Number(el))

console.log([pensioners, channels, initialChannel])

let caseList = cases.map((el) => el.split(" ").map((e) => +e))

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
    if (!fromVertexList.length) {
      this.adjacentList.set(fromVertex, [...fromVertexList, toVertex])
    }
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

  // 순환 하는지 확인해야 할듯.
}

const graph = new Graph()

for (let i = 0; i < channels; i++) {
  graph.addVertex(i + 1)
}

console.log(graph)

caseList.forEach((info) => {
  const [faveCh, hatedCh] = info

  graph.addEdge(hatedCh, faveCh)
})

console.log(graph.adjacentList)

console.log(graph.dfs(initialChannel))

// 1 2 5
// 2 1 5
// 3 4 6

// 1 <-(3)- 2 <-(2)- -(1)-> 3  4
// 나이가 가중치
//
