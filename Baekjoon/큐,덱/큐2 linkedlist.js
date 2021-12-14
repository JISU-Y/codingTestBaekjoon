const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")

class Node {
  constructor(item) {
    this.item = item
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  push(item) {
    const node = new Node(item)

    if (this.head) {
      this.tail.next = node
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
    this.size += 1
  }

  queue_size() {
    return this.size
  }

  empty() {
    return this.size > 0 ? 0 : 1
  }

  popLeft() {
    const popedItem = this.head

    if (this.size > 1) {
      this.head = this.head.next
    } else if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      return -1
    }
    this.size -= 1

    return popedItem.item
  }

  front() {
    return this.head ? this.head.item : -1
  }

  back() {
    return this.tail ? this.tail.item : -1
  }
}

const queue = new Queue()

let result = ""

for (let i = 1; i <= Number(input[0]); i++) {
  switch (input[i].split(" ")[0].toString().trim()) {
    case "pop":
      result += `${queue.popLeft()}\n`
      break
    case "size":
      result += `${queue.queue_size()}\n`
      break
    case "empty":
      result += `${queue.empty()}\n`
      break
    case "front":
      result += `${queue.front()}\n`
      break
    case "back":
      result += `${queue.back()}\n`
      break
    case "push":
      queue.push(Number(input[i].split(" ")[1]))
      break
    default:
      breal
  }
}
console.log(result)
