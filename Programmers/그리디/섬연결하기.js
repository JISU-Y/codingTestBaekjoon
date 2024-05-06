const n = 4
const costs = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
] // 4

class Graph {
  constructor() {
    this.adjacencyList = new Map()
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, [])
    }
  }

  addEdge(vertex1, vertex2, cost) {
    if (!cost) return

    const pathCost = this.findPathCost(vertex1, vertex2)

    // 연결할려는 노드 사이 다리가 이미 연결된 경로 합 보다 커버리면 아예 연결 안함
    if (pathCost < 0 || cost < pathCost) {
      this.removePath(vertex1, vertex2) // 새로 넣으려고 하는 경로가 기존 경로보다 적기 때문에 기존 경로 날림

      this.adjacencyList.get(vertex1).push({ vertex: vertex2, cost })
      this.adjacencyList.get(vertex2).push({ vertex: vertex1, cost })
    }
  }

  removePath(vertex1, vertex2) {
    // vertex1에서 vertex2로 가는 모든 경로를 제거
    if (this.adjacencyList.has(vertex1)) {
      const newList = this.adjacencyList.get(vertex1).filter((neighbor) => neighbor.vertex !== vertex2)
      this.adjacencyList.set(vertex1, newList)
    }

    // vertex2에서 vertex1로 가는 모든 경로를 제거
    if (this.adjacencyList.has(vertex2)) {
      const newList = this.adjacencyList.get(vertex2).filter((neighbor) => neighbor.vertex !== vertex1)
      this.adjacencyList.set(vertex2, newList)
    }
  }

  findPathCost(start, end, visited = new Set(), totalCost = 0) {
    if (start === end) return totalCost // 시작 정점과 목표 정점이 같으면 비용을 반환
    visited.add(start) // 현재 정점을 방문한 것으로 표시

    const neighbors = this.adjacencyList.get(start)
    for (const { vertex, cost } of neighbors) {
      if (!visited.has(vertex)) {
        const result = this.findPathCost(vertex, end, visited, totalCost + cost)
        if (result !== -1) return result // 경로를 찾은 경우, 총 비용을 반환
      }
    }

    return -1 // 경로를 찾지 못한 경우, -1을 반환
  }

  dfs_recursive(vertex, visited = new Map(), parent = null) {
    visited.set(vertex, true)
    let result = { vertices: [vertex], totalCost: 0 }

    const neighborListOfThisVertex = this.adjacencyList.get(vertex)
    neighborListOfThisVertex.forEach((neighbor) => {
      if (!visited.get(neighbor.vertex)) {
        const dfsResult = this.dfs_recursive(neighbor.vertex, visited, vertex)
        result.vertices.push(...dfsResult.vertices)
        result.totalCost += dfsResult.totalCost + neighbor.cost // 각 이웃과의 연결 비용을 더함
      }
    })

    return result
  }

  connectedComponents() {
    const visited = new Map()
    let components = []
    let totalCost = 0

    this.adjacencyList.forEach((value, neighbor) => {
      if (!visited.get(neighbor)) {
        const component = this.dfs_recursive(neighbor, visited)
        components.push(component.vertices)
        totalCost += component.totalCost
      }
    })

    return { count: components.length, components, totalCost }
  }
}

function solution(n, costs) {
  const island = new Graph()

  costs.forEach((cost) => {
    const [startNode, endNode, costBetween] = cost

    island.addVertex(startNode)
    island.addVertex(endNode)

    if (costBetween) {
      island.addEdge(startNode, endNode, costBetween)
    }
  })

  console.dir(island.connectedComponents(), { depth: 3 })

  return island.connectedComponents().totalCost
}

console.log(
  solution(4, [
    [0, 1, 5],
    [1, 2, 3],
    [2, 3, 3],
    [1, 3, 2],
    [0, 3, 4],
  ])
)
