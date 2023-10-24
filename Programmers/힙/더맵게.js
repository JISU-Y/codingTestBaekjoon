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

function solution(scoville, K) {
  let answer = 0

  const scovilleHeap = new MinHeap()

  scoville.forEach((scov) => scovilleHeap.insert(scov))

  if (scovilleHeap.size() === 1) {
    if (scovilleHeap.peek() < K) return -1
    else return answer
  }

  // 반복문 도는 것은 peek가 같아지기 전까지만 돌릴 것.
  // K가 되는 순간 모든 조건을 만족하므로 해당 반복문을 돌면 안됨 (음식을 섞으면 안됨)
  while (scovilleHeap.size() > 1 && scovilleHeap.peek() < K) {
    const leastSpicy = scovilleHeap.remove()
    const lessSpicy = scovilleHeap.remove()
    const newScov = leastSpicy + lessSpicy * 2

    scovilleHeap.insert(newScov)

    answer++
  }

  // peek가 K와 같거나 커지면 이제 모든 음식이 조건을 만족하는 것.
  // 그 때는 계산해두었던 answer 반환
  // 다 돌았는데도 peek를 못 넘으면 -1인 것.
  return scovilleHeap.peek() >= K ? answer : -1
}

// console.log(solution([1, 2, 3, 9, 10, 12], 7))
// console.log(solution([2, 3], 7))
// console.log(solution([0, 1], 2))
// console.log(solution([7], 7))
console.log(solution([1, 1, 2, 6], 24)) // 같은 수이면 가장 작은수가 하나인 것. 즉 0 , 1이 가장 작은수, 그 다음 작은 수가 아닐 수도 있음.
