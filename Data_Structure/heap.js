class MaxHeap {
  constructor() {
    this.heap = []
  }

  // 부모 인덱스를 구하는 내부 메서드
  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  // 왼쪽 자식 인덱스를 구하는 내부 메서드
  getLeftChildIndex(i) {
    return 2 * i + 1 // 0의 left는 1 / 1의 left는 3
  }

  // 오른쪽 자식 인덱스를 구하는 내부 메서드
  getRightChildIndex(i) {
    return 2 * i + 2 // 0의 right는 2 / 1의 right는 4
  }

  // 값 삽입
  insert(value) {
    this.heap.push(value) // 일단 가장 뒤에 넣음
    this.bubbleUp(this.heap.length - 1) // 힙 정렬
  }

  // 힙 정렬 (큰 값을 위로)
  bubbleUp(index) {
    // 현재 index의 값이 부모 인덱스의 값보다 작을 때만 반복 -> max값이 위로 올라갈 때 까지 반복
    while (index > 0 && this.heap[this.getParentIndex(index)] < this.heap[index]) {
      // 현재 index와 부모 index의 값을 swap
      ;[this.heap[this.getParentIndex(index)], this.heap[index]] = [
        this.heap[index],
        this.heap[this.getParentIndex(index)],
      ]
      index = this.getParentIndex(index) // 값이 바뀌었으니 부모의 index가 현재 index가 됨
    }
  }

  // 최대값 삭제
  remove() {
    if (this.size() === 0) return undefined // 배열이 없으면 그냥 아무것도 안하면 됨
    if (this.size() === 1) return this.heap.pop() // 하나가 있으면 그냥 그 요소 하나 빼면 됨

    const max = this.heap[0] // 기존의 max 값 (즉, 0번째 index 값)
    this.heap[0] = this.heap.pop() // 가장 뒤에 있는 요소(노드)를 제거하고 가장 처음 요소로 가져다 놓음
    this.bubbleDown(0) // 힙 재정렬
    return max // 기존에 있던 max 값 제거했으니 반환
  }

  // 힙 정렬 (작은 값을 아래로)
  bubbleDown(index) {
    while (true) {
      let largest = index
      const leftIndex = this.getLeftChildIndex(index)
      const rightIndex = this.getRightChildIndex(index)

      // left child가 최대값보다 크면 그 left child의 index를 최대값(index)으로 지정
      if (leftIndex < this.size() && this.heap[leftIndex] > this.heap[largest]) {
        largest = leftIndex
      }

      // right child가 최대값보다 크면 그 right child의 index를 최대값(index)으로 지정
      if (rightIndex < this.size() && this.heap[rightIndex] > this.heap[largest]) {
        largest = rightIndex
      }

      if (largest !== index) {
        // 최대값과 index 값을 swap
        ;[this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
        index = largest
      } else {
        break
      }
    }
  }

  // 힙의 크기 반환
  size() {
    return this.heap.length
  }

  // 힙의 최대값 조회
  peek() {
    return this.heap[0]
  }
}

// 예제 사용
const heap = new MaxHeap()
heap.insert(10)
heap.insert(20)
heap.insert(15)
heap.insert(30)
console.log(heap.peek()) // 30
heap.remove()
console.log(heap.peek()) // 20
