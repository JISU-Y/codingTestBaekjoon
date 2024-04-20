const n = 9
const wires = [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
] // 3

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

  removeEdge(vertex1, vertex2) {
    this.adjacencyList.set(
      vertex1,
      this.adjacencyList.get(vertex1).filter((el) => el !== vertex2)
    )
    this.adjacencyList.set(
      vertex2,
      this.adjacencyList.get(vertex2).filter((el) => el !== vertex1)
    )
  }

  dfs_recursive(vertex, visited = new Map()) {
    visited.set(vertex, true)
    let result = [vertex]

    const neighborListOfThisVertex = this.adjacencyList.get(vertex)
    neighborListOfThisVertex.forEach((neighbor) => {
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
  // dfs(startNode) {
  //   const stack = [startNode]
  //   const result = []
  //   const visited = new Map()

  //   visited.set(startNode, true)

  //   let currentVertex

  //   while (stack.length) {
  //     currentVertex = stack.pop()
  //     result.push(currentVertex)

  //     this.adjacencyList.get(currentVertex).forEach((neighbor) => {
  //       if (!visited.get(neighbor)) {
  //         visited.set(neighbor, true)
  //         stack.push(neighbor)
  //       }
  //     })
  //   }

  //   return result
  // }
}

function solution(n, wires) {
  const graph = new Graph()

  new Array(n).fill(0).map((_, i) => graph.addVertex(i + 1))

  wires.forEach(([a, b]) => {
    graph.addEdge(a, b)
  })

  let diff = 0
  let min = Infinity

  for (let i = 0; i < n - 1; i++) {
    const [a, b] = wires[i]

    graph.removeEdge(a, b)

    const { components } = graph.connectedComponents()

    diff = Math.abs(components[0].length - components[1].length)

    if (diff < min) min = diff

    graph.addEdge(a, b)
  }

  return min
}

console.log(solution(n, wires))
