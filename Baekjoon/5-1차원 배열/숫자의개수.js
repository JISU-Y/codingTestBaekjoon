const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")

const abc = Number(input[0]) * Number(input[1]) * Number(input[2])

let count = new Array(10).fill(0)

abc
  .toString()
  .split("")
  .forEach((el) => count[Number(el)]++)

count.forEach((el) => console.log(el))
