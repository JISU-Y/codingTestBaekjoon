const fs = require("fs")
let input =
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString().split("\n") : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")

let result = ""

for (let i = 0; ; i++) {
  if (!Number(input[i].split(" ")[0])) break
  result += Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]) + "\n"
}
console.log(result)
