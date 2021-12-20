// 해쉬 테이블
const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().split("\n")

const len = Number(input[0])
const str = input[1]
const R = 31

let sum = 0
for (let idx = 0; idx < len; idx++) {
  const i = str[idx].charCodeAt() - 96
  sum += i * Math.pow(R, idx)
}
console.log(sum)
