const fs = require("fs")
let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : fs.readFileSync("Baekjoon/input.txt").toString()

let value = Number(input)

let count = 1

while (1) {
  if (value < 10) {
    value = value * 10 + value
  } else {
    value = (value % 10) * 10 + ((Math.floor(value / 10) + (value % 10)) % 10)
  }

  if (value === Number(input)) break
  count++
}

console.log(count)
