const fs = require("fs")
// let input = fs.readFileSync("/dev/stdin")
// input = input.toString().trim().split("\n")[0]
input = `8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
`
const N = parseInt(input.toString().trim().split("\n")[0].split(" ")[0])
const M = parseInt(input.toString().trim().split("\n")[0].split(" ")[1])
const board = input.toString().trim().split("\n").slice(1).join("\n")

const boardStartsWith = {
  W: ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"],
  B: ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"],
}

function fillColorOnBoard(row, col, chessBoard) {
  // 자를 수 있는 기준 먼저 구함
  // 0,1 / 0,2 / 1, 0 ... (8*8) 이니까 10*13에서는 row 0 ~ 5, col: 0 ~ 2

  // 0,0 을 시작으로 먼저 자름
  // W 시작하는 걸로 해서 몇개 칠해야 하는지 구함.
  // B로 시작해서 몇 개 칠해야 하는지 구함
  // 0,1 로 넘어감

  let slicedChessBoards = []

  for (let x = 0; x <= col - 8; x++) {
    for (let y = 0; y <= row - 8; y++) {
      slicedChessBoards.push(
        chessBoard
          .split("\n")
          .slice(y, y + 8)
          .map((chessRow) => chessRow.slice(x, x + 8))
          .join("\n")
      )
    }
  }

  let countList = []

  slicedChessBoards.forEach((slicedBoard) => {
    let countW = 0
    let countB = 0

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (slicedBoard.split("\n")[i][j] !== boardStartsWith.W[i][j]) {
          countW++
        }

        if (slicedBoard.split("\n")[i][j] !== boardStartsWith.B[i][j]) {
          countB++
        }
      }
    }

    countList.push(countW)
    countList.push(countB)
  })

  // 가장 최소로 칠하는 거 뱉어줌.
  return Math.min(...countList)
}

console.log(fillColorOnBoard(N, M, board))

// 0, 2, 4, 6: 0, 2, 4, 6
// 1, 3, 5, 7: 1, 3, 5, 7

// require("readline")
//   .createInterface(process.stdin, process.stdout)
//   .on("line", (line) => {
//     const input = +line
//     const N = input.toString().trim().split("\n")[0].split(" ")[0]
//     const M = input.toString().trim().split("\n")[0].split(" ")[1]
//     const board = input.toString().trim().split("\n").slice(1).join("\n")

//     const boardStartsWith = {
//       W: ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"],
//       B: ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"],
//     }

//     function fillColorOnBoard(row, col, chessBoard) {
//       let slicedChessBoards = []

//       for (let x = 0; x <= col - 8; x++) {
//         for (let y = 0; y <= row - 8; y++) {
//           slicedChessBoards.push(
//             chessBoard
//               .split("\n")
//               .slice(y, y + 8)
//               .map((chessRow) => chessRow.slice(x, x + 8))
//               .join("\n")
//           )
//         }
//       }

//       let countList = []

//       slicedChessBoards.forEach((slicedBoard) => {
//         let countW = 0
//         let countB = 0

//         for (let i = 0; i < 8; i++) {
//           for (let j = 0; j < 8; j++) {
//             if (slicedBoard.split("\n")[i][j] !== boardStartsWith.W[i][j]) {
//               countW++
//             }

//             if (slicedBoard.split("\n")[i][j] !== boardStartsWith.B[i][j]) {
//               countB++
//             }
//           }
//         }

//         countList.push(countW)
//         countList.push(countB)
//       })

//       // 가장 최소로 칠하는 거 뱉어줌.
//       return Math.min(...countList)
//     }

//     console.log(fillColorOnBoard(N, M, board))
//   })
//   .on("close", () => {
//     process.exit()
//   })
