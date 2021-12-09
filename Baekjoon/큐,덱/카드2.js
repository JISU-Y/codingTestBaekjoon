const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("Baekjoon/input.txt").toString()

input = Number(input)

let cardArr = new Array(input).fill(1)
console.log(cardArr.map((el, idx) => el + idx))
cardArr = cardArr.map((el, idx) => el + idx)

let flag = 0
while (cardArr.length > 1) {
  if (flag === 0) {
    cardArr.shift()
    flag = 1
  } else {
    cardArr.push(cardArr.shift())
    flag = 0
  }
}

console.log(cardArr[0])
