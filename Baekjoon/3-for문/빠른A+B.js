const fs = require("fs")
let input =
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString().split("\n") : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")

const T = input[0]
let result = ""

for (let i = 1; i <= T; i++) {
  result += `${Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1])}` + "\n"
}

console.log(result)
