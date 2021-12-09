const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

const queue = []
const C = input.shift()

let result = ""

for (let i = 0; i < C; i++) {
  switch (input[i].split(" ")[0].toString().trim()) {
    case "pop":
      result += `${queue[0] ? queue[0] : -1}\n`
      queue.shift()
      break
    case "size":
      result += `${queue.length}\n`
      break
    case "empty":
      result += `${queue.length === 0 ? 1 : 0}\n`
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
}
console.log(result)

//   if (command === "push") {
//     pushQ(queue, payload)
//   } else if (command === "pop") {
//     result += `${popQ(queue)}` + "\n"
//   } else if (command === "front") {
//     result += `${front(queue)}` + "\n"
//   } else if (command === "back") {
//     result += `${back(queue)}` + "\n"
//   } else if (command === "size") {
//     result += `${size(queue)}` + "\n"
//   } else if (command === "empty") {
//     result += `${empty(queue)}` + "\n"
//   }

// function pushQ(queue, number) {
//   queue.push(number)
// }

// function popQ(queue) {
//   const data = queue[0] ? queue[0] : -1
//   queue.shift()
//   return data
// }

// function front(queue) {
//   const data = queue[0] ? queue[0] : -1
//   return data
// }

// function back(queue) {
//   const data = queue[queue.length - 1] ? queue[queue.length - 1] : -1
//   return data
// }

// function size(queue) {
//   return queue.length
// }

// function empty(queue) {
//   return queue.length === 0 ? 1 : 0
// }

// const command = input[i].split(" ")[0].toString().trim()
// const payload = Number(input[i].split(" ")[1])
