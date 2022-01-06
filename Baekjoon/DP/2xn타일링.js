const fs = require("fs")
let input =
  process.platform === "linux" //
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("Baekjoon/input.txt").toString()

function tile(num) {
  const cache = new Array(num) // 빈 배열 생성
  // 초기값 설정
  cache[0] = 0
  cache[1] = 1
  cache[2] = 2

  // 점화식 값 계산
  for (let index = 3; index <= num; index++) {
    cache[index] = cache[index - 1] + cache[index - 2]
    console.log(cache[index])
  }

  return Number(cache[num] % 10007)
}

console.log(tile(Number(input)))
