const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")

const testCase = Number(input[0])

for (let i = 1; i <= testCase; i++) {
  let score = 0,
    j = 1
  input[i].split("").forEach((el) => {
    el === "O" ? (score += j++) : (j = 1)
  })
  console.log(score)
}
