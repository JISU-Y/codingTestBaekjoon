const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
input = 380

function calChange(paidAmount) {
  // 500엔, 100엔, 50엔, 10엔, 5엔, 1엔 (잔돈에 대한 제한 없음)
  // 항상 1000엔을 냄.

  let changeAmount = 1000 - paidAmount // 총 돌려줘야 하는 돈
  let count = 0 // count

  // 380이 들어왔다면, 돌려줘야 할 돈은 620
  // 620에서 500엔이 넘기 때문에 500엔(500의 배수)을 하나로 거슬러 주면 일단 100을 5개 주는 것 보다 적음 (최적의 해)
  // 그 다음 120 남음. 100엔 배수 1개로 100엔
  // 20남음. 100보다 작은 50, 50보다 작은 10으로 2개
  const coins = [500, 100, 50, 10, 5, 1] // 동전 리스트

  coins.map((coin) => {
    let quantity = Math.floor(changeAmount / coin) // 500을 거스름돈으로 나누면 500 몇 개를 거슬러 줘야 하는지 나옴.
    changeAmount -= quantity * coin // 500과 그 개수만큼 곱해서 거스름돈에서 차감.
    count += quantity // 동전 개수 카운트 (정답을 위한)
  })

  console.log(count)
}

calChange(input)
