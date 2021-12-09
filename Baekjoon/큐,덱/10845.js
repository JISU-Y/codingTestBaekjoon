const queue = []

const cmdObj = {
  push: function (x) {
    queue[queue.length] = x
  },
  pop: function () {
    const data = queue[0] ? queue[0] : -1
    queue.shift()
    return data
  },
  size: function () {
    return queue.length
  },
  empty: function () {
    const isEmpty = queue.length === 0 ? 1 : 0
    return isEmpty
  },
  front: function () {
    const data = queue[0] ? queue[0] : -1
    return data
  },
  back: function () {
    const data = queue[queue.length - 1] ? queue[queue.length - 1] : -1
    return data
  },
}

const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let input = []
let answer = ""
let cmdN = 0

rl.on("line", function (line) {
  cmdN = Number(line)
  if (isNaN(cmdN)) {
    input.push(line)
  }
}).on("close", function () {
  input.map((line) => {
    const cmd = line.split(" ")
    if (cmd[0] === "push") {
      cmdObj[cmd[0]](parseInt(cmd[1]))
    } else if (cmd[0] === "pop" || cmd[0] === "size" || cmd[0] === "empty" || cmd[0] === "front" || cmd[0] === "back") {
      answer += cmdObj[cmd[0]]() + "\n"
    }
  })

  console.log(answer)
  process.exit()
})
