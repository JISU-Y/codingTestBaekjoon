class MinMaxHeap {
  constructor() {
    this.heap = []
  }

  size() {
    return this.heap.length
  }

  // 부모 노드 인덱스
  parentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  // 왼쪽 자식 노드 인덱스
  leftChildIndex(index) {
    return 2 * index + 1
  }

  // 오른쪽 자식 노드 인덱스
  rightChildIndex(index) {
    return 2 * index + 2
  }

  // 노드 교환
  swap(index1, index2) {
    ;[this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }

  // Min-Max Heap에 새로운 요소 삽입
  insert(item) {
    this.heap.push(item)
    this.bubbleUp(this.heap.length - 1)
  }

  // 삽입된 요소를 적절한 위치로 이동
  bubbleUp(index) {
    if (index === 0) return

    const parentIdx = this.parentIndex(index)
    const grandParentIdx = this.parentIndex(parentIdx)
    const isEvenLevel = Math.floor(Math.log2(index + 1)) % 2 === 0

    // 짝수 레벨 (최소 레벨)
    if (isEvenLevel) {
      // insert한 값이 부모보다 크다면 부모인 최대 레벨이랑 바꿔줘야 함.
      if (this.heap[index] > this.heap[parentIdx]) {
        this.swap(index, parentIdx)
        this.bubbleUpMax(parentIdx)
      } else {
        // 부모보다 작으면 그게 맞음 (현재 레벨인 짝수 레벨에 있으면 됨)
        // 그러나 2칸씩 띄어서 최소값 정렬 해주어야 함.
        this.bubbleUpMin(index)
      }
    } else {
      // 홀수 레벨 (최대 레벨)
      if (this.heap[index] < this.heap[parentIdx]) {
        this.swap(index, parentIdx)
        this.bubbleUpMin(parentIdx)
      } else {
        this.bubbleUpMax(index)
      }
    }
  }

  // 최소 레벨 정렬
  bubbleUpMin(index) {
    const grandParentIdx = this.parentIndex(this.parentIndex(index))
    if (index > 2 && this.heap[index] < this.heap[grandParentIdx]) {
      this.swap(index, grandParentIdx)
      this.bubbleUpMin(grandParentIdx)
    }
  }

  // 최대 레벨 정렬
  bubbleUpMax(index) {
    const grandParentIdx = this.parentIndex(this.parentIndex(index))
    if (index > 2 && this.heap[index] > this.heap[grandParentIdx]) {
      this.swap(index, grandParentIdx)
      this.bubbleUpMax(grandParentIdx)
    }
  }

  // 최솟값 가져오기
  getMin() {
    return this.heap[0]
  }

  // 최댓값 가져오기
  getMax() {
    if (this.heap.length === 1) {
      return this.heap[0]
    } else if (this.heap.length === 2) {
      return this.heap[1]
    } else {
      return Math.max(this.heap[1], this.heap[2])
    }
  }

  // 최솟값 제거
  removeMin() {
    if (this.heap.length === 0) return null
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown(0)
    return min
  }

  // 최댓값 제거
  removeMax() {
    if (this.heap.length === 0) return null
    let maxIndex
    if (this.heap.length === 1) {
      maxIndex = 0
    } else if (this.heap.length === 2) {
      maxIndex = 1
    } else {
      maxIndex = this.heap[1] > this.heap[2] ? 1 : 2
    }
    const max = this.heap[maxIndex]
    this.heap[maxIndex] = this.heap.pop()
    if (this.heap.length > 2) this.bubbleDown(maxIndex)
    return max
  }

  // 요소를 아래로 내려보내면서 힙 속성 유지
  bubbleDown(index) {
    if (this.isMinLevel(index)) {
      this.bubbleDownMin(index)
    } else {
      this.bubbleDownMax(index)
    }
  }

  bubbleDownMin(index) {
    const length = this.heap.length
    while (index < length) {
      let smallest = index
      const leftChildIndex = this.leftChildIndex(index)
      const rightChildIndex = this.rightChildIndex(index)

      if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex
      }

      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex
      }

      if (smallest !== index) {
        this.swap(index, smallest)
        index = smallest
      } else {
        break
      }
    }
  }

  bubbleDownMax(index) {
    const length = this.heap.length
    while (index < length) {
      let largest = index
      const leftChildIndex = this.leftChildIndex(index)
      const rightChildIndex = this.rightChildIndex(index)

      if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
        largest = leftChildIndex
      }

      if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
        largest = rightChildIndex
      }

      if (largest !== index) {
        this.swap(index, largest)
        index = largest
      } else {
        break
      }
    }
  }

  isMinLevel(index) {
    // 레벨이 짝수이면 최소 레벨, 홀수이면 최대 레벨
    return Math.floor(Math.log2(index + 1)) % 2 === 0
  }
}

const operations = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"] // [0,0]

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

    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown(0)
    return min
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

function solution(operations) {
  //   const heap = new MinMaxHeap()
  const heap = new MinHeap()

  operations.forEach((operation) => {
    const [command, value] = operation.split(" ")
    const num = Number(value)

    if (command === "I") {
      heap.insert(num)
    } else if (command === "D") {
      if (num === 1) {
        const maxValue = Math.max(...heap.heap)
        heap.heap.splice(heap.heap.indexOf(maxValue), 1)
      } else if (num === -1) {
        heap.remove()
      }
    }
  })

  return heap.size() === 0 ? [0, 0] : [Math.max(...heap.heap), heap.peek()]
}

console.log(solution(operations))
