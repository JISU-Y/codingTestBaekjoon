/* 최소 힙 */
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
  input.push(Number(line))
}).on("close", function () {
  const num = input.shift()
  const inputList = input.map((el) => +el)
  const heap = new MinHeap()

  const answer = []

  for (let i = 0; i < num; i++) {
    if (inputList[i] === 0) {
      answer.push(heap.remove())
    } else {
      heap.insert(inputList[i])
    }
  }

  console.log(answer.join("\n"))

  process.exit()
})

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
    if (this.size() === 0) return 0
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
