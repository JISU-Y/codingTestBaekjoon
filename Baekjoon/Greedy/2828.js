/* 사과 담기 게임 */
const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
input = `5 2
4
1
5
1
5
`
input = input.toString().trim().split("\n")

const N = Number(input[0].split(" ")[0])
const M = Number(input[0].split(" ")[1])
const J = Number(input[1])
const position = input.slice(2).map((el) => Number(el))

function calLeastMoving(N, M, J, position) {
  let moveCount = 0
  let coveredLane = new Array(M).fill(1).map((el, index) => index + 1)

  position.forEach((apple) => {
    const isBasketReachable = coveredLane.includes(apple)

    if (isBasketReachable) {
      // don't move
    } else {
      // move
      let basketMove = 0
      if (apple > coveredLane[M - 1]) {
        // 떨어지는 사과가 바구니가 커버하는 위치 가장 오른쪽보다 크면
        basketMove = apple - coveredLane[M - 1]
        moveCount += basketMove
      } else if (apple < coveredLane[0]) {
        // 떨어지는 사과가 바구니가 커버하는 위치 가장 왼쪽보다 작으면
        basketMove = apple - coveredLane[0]
        moveCount += Math.abs(basketMove)
      }

      coveredLane = coveredLane.map((el) => el + basketMove)
    }

    // console.log("moveCount", moveCount)
  })

  return moveCount
}

console.log(calLeastMoving(N, M, J, position))

// |12345|
// |     |
// |==   |
// |_____|
// 1 떨어질 때 0번 움직임 (1,2)
// 5 떨어질 때 3번 움직임 (4,5)
// 1 떨어질 때 3번 움직임 (1,2)
// 5 떨어질 때 3번 움직임 (4,5)

// |12345|
// |     |
// |=    |
// |_____|
// 1 떨어질 때 0번 움직임 (1)
// 5 떨어질 때 4번 움직임 (5)
// 3 떨어질 때 2번 움직임 (3)

// |12345|
// |     |
// |==   |
// |_____|
// 1 떨어질 때 0번 움직임 (1,2)
// 5 떨어질 때 3번 움직임 (4,5)
// 3 떨어질 때 1번 움직임 (3,4)

// |12345|
// |     |
// |===  |
// |_____|
// 1 떨어질 때 0번 움직임 (1,2,3)
// 5 떨어질 때 2번 움직임 (3,4,5)
// 3 떨어질 때 0번 움직임 (3,4,5)
