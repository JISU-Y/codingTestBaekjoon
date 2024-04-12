const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
] // 9

// 0부터 시작 3ms
// 1부터 시작 인데 지금 돌고 있는 작업 있어서 3에서 시작 12에서 끝남
// (근데 1부터 12까지 세니까 11ms 걸린 거임)
// 12부터 시작 18까지
// 일단 요청이 들어온 순서대로 정렬 해야 함. (먼저 요청한건 빨리 요청하는 게 제일 빠름)

function solution(jobs) {
  let answer = 0

  let sortedJobs = jobs.sort((a, b) => b - a)
  console.log("🚀 ~ solution ~ sortedJobs:", sortedJobs)
  let max = 0

  jobs.forEach(([requestedAt, workingTime]) => {
    let avg = 0

    console.log(requestedAt, workingTime)
  })

  return answer
}

console.log(solution(jobs))

class MinHeap {
  constructor() {
    this.heap = []
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  getLeftChildIndex(i) {
    return 2 * i + 1
  }

  getRightChildIndex(i) {
    return 2 * i + 2
  }

  insert(value) {
    this.heap.push(value)
    this.bubbleUp(this.heap.length - 1)
  }

  bubbleUp(index) {
    while (index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
      ;[this.heap[this.getParentIndex(index)], this.heap[index]] = [
        this.heap[index],
        this.heap[this.getParentIndex(index)],
      ]
      index = this.getParentIndex(index)
    }
  }

  remove() {
    if (this.size() === 0) return undefined
    if (this.size() === 1) return this.heap.pop()

    const max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown(0)
    return max
  }

  bubbleDown(index) {
    while (true) {
      let largest = index
      const leftIndex = this.getLeftChildIndex(index)
      const rightIndex = this.getRightChildIndex(index)

      if (leftIndex < this.size() && this.heap[leftIndex] < this.heap[largest]) {
        largest = leftIndex
      }

      if (rightIndex < this.size() && this.heap[rightIndex] < this.heap[largest]) {
        largest = rightIndex
      }

      if (largest !== index) {
        ;[this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
        index = largest
      } else {
        break
      }
    }
  }

  size() {
    return this.heap.length
  }

  peek() {
    return this.heap[0]
  }
}
