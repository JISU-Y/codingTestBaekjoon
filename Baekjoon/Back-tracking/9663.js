const fs = require("fs")
// let input = process.platform === "linux" ? fs.readFileSync("/dev/stdin") : fs.readFileSync("./input.txt")
input = 4

let board = []
let answer = 0

function checkQueensConflictByRow(num) {
  for (let i = 0; i < num; i++) {
    // 현재 queen (board[num])과 이전 행에 놓았던 queen(board[i])과 놓은 col이 같은 경우
    // (일자로 잡아먹는 거)
    if (board[i] === board[num]) return true
    // 대각선에 위치할 때 (두 queen의 행 차이와 열 차이가 같을 때)
    if (Math.abs(board[num] - board[i]) === num - i) return true
  }

  return false
}

// N = 4
//   0 1 2 3
// 0     Q
// 1 Q
// 2       Q
// 3   Q
// 0,2 / 1,0 / 2,3 / 3,1
function putQueen(row) {
  // row 다 돌면
  if (row === input) {
    answer++
    return
  }

  for (let col = 0; col < input; col++) {
    board[row] = col

    // 충돌 안한 경우 다음 줄 row로 넘어감
    if (!checkQueensConflictByRow(row)) {
      putQueen(row + 1) // 기본적으로 재귀를 이용해서 DFS를 기반으로 함.
      // 그러나 조건문을 두어서 아예 가망이 없는 루트는 가지치기
    }
    // 충돌하면 다음 col로 넘어감 0, 1, 2, ...
  }
}

putQueen(0)

console.log(answer)

// 0, 0에 Queen 하나가 있다고 가정
// 일단 같은 0 라인은 모두 불가능.
// 그 다음 줄로 넘어가봄.
// 1, 0 / 1, 1 / 1, 2 / 1, 3 가능성
// 1,0 먼저 본다고 침. 얜 절대 불가. 그럼 1,0 자체에 다음 Queen을 놓지 않아도 되기 떄문에 가지치기
// 1,1 도 절대 안됨.
// 1,2 가능성 있음. 그렇다면 1,2 를 기준으로 또 경우의 수를 알아봄.
// 2, 0 / 2, 1 / 2, 2 / 2, 3 가능성
// 2,0 안됨, 2,1 가능성, 2,2 안됨, 2,3 등등
// 이런식으로 하다보면 0,0에 놓으면 안됨.
// 이게 한 loop
// 그래서 0,1 부터 다시 시작.
// 애초에 0,0 ~ 0,3으로 모든 경우의 수를 탐색하는 것이긴 하나
// 다음 경우의 수는 가지치기를 통해 없앰.

/* 주의: 이 문제는 dev/stdin 으로 하면 시간초과 에러 발생. 같은 로직으로 readline으로 해야 함. */
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    const input = +line
    let board = []
    let answer = 0

    function checkQueensConflictByRow(num) {
      for (let i = 0; i < num; i++) {
        if (board[i] === board[num]) return true
        if (Math.abs(board[num] - board[i]) === num - i) return true
      }

      return false
    }

    function putQueen(row) {
      if (row === input) {
        answer++
        return
      }

      for (let col = 0; col < input; col++) {
        board[row] = col

        if (!checkQueensConflictByRow(row)) {
          putQueen(row + 1)
        }
      }
    }

    putQueen(0)

    console.log(answer)
  })
  .on("close", () => {
    process.exit()
  })
