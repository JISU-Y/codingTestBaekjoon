const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

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
    if (this.head === null) {
      this.head = node
      this.head.next = this.tail
    } else this.tail.next = node

    this.tail = node
    this.size += 1
  }

  length() {
    return this.size
  }

  popLeft() {
    const popedItem = this.head
    this.head = this.head.next
    this.size -= 1
    return popedItem
  }

  print() {
    let current = this.head
    while (current) {
      console.log(current.item)
      current = current.next
    }
  }
}

const queue = new Queue()

let result = ""

for (let i = 0; i < Number(input[0]); i++) {
  switch (input[i].split(" ")[0].toString().trim()) {
    case "pop":
      result += `${queue[0] ? queue[0] : -1}\n`
      break
    case "size":
      result += `${queue.length()}\n`
      break
    case "empty":
      result += `${queue.length() === 0 ? 1 : 0}\n`
      break
    case "front":
      result += `${queue[0] ? queue[0] : -1}\n`
      break
    case "back":
      result += `${queue[queue.length - 1] ? queue[queue.length - 1] : -1}\n`
      break
    default:
      queue.push(Number(input[i].split(" ")[1]))
      break
  }

  console.log(queue)
}
console.log(result)
