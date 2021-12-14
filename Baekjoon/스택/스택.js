const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")

let stack = []
let result = ""

for (let i = 1; i <= Number(input[0]); i++) {
  switch (input[i].split(" ")[0].toString().trim()) {
    case "pop":
      result += `${stack.length > 0 ? stack.pop() : -1}\n`
      break
    case "size":
      result += `${stack.length}\n`
      break
    case "empty":
      result += `${stack.length > 0 ? 0 : 1}\n`
      break
    case "top":
      result += `${stack.length > 0 ? stack[stack.length - 1] : -1}\n`
      break
    case "push":
      stack.push(Number(input[i].split(" ")[1]))
      break
    default:
      breal
  }
}
console.log(result)
