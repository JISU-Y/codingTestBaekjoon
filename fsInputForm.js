// const fs = require("fs")
// let input =
//   process.platform === "linux" //
//     ? fs.readFileSync("/dev/stdin").toString().split("\n")
//     : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")

// fs module
const fs = require("fs")
let input = fs.readFileSync("input.txt").toString()

console.log(input)

// readline
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input

rl.on("line", (line) => {
  input = line.split(" ")
  console.log(`print input number ${input[0]}`)
  rl.close()
})
