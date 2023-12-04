/* 거스름돈 */
const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
// input = input.toString().trim().split("\n")[0]
input = 3

function changeCoins(paidAmount) {
  let count = 0

  if (paidAmount < 2) return -1

  // 13 = 2 + 11 / 4 + 9 / 6 + 7 / 8 + 5
  // 16 = 2 + 14 / 4 + 12 / 6 + 10
  // 17 = 2 + 15
  // 21 = 2 + 19 / 4 + 17 / 6 + 15
  // 31 = 2 + 29 / 4 + 27 / 6 + 25

  // 5의 배수가 남는 최소한의 2의 배수
  let leftAmount = paidAmount
  let quantity2 = 0

  while (1) {
    leftAmount = paidAmount - 2 * quantity2

    if (leftAmount === 1) return -1
    if (leftAmount % 5 === 0) break

    quantity2++
  }

  let quantity5 = leftAmount / 5

  count = quantity2 + quantity5

  return count
}

console.log(changeCoins(input))
