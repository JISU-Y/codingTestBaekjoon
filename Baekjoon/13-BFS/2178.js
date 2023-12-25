/* 미로 탐색 */
/* ! 테스트 */
const path = "./input.txt"
const fs = require("fs")

const readline = require("readline")
const rl = readline.createInterface({
  input: fs.createReadStream(path),
  output: process.stdout,
})

// /* ! 제출용 */
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

let input = []

rl.on("line", function (line) {
  input.push(line.split(" ").map((e) => +e))
}).on("close", function () {
  const [N, M] = input.shift()
  const mazeArr = input.map((el) =>
    String(el[0])
      .split("")
      .map((e) => +e)
  )
  //   console.log(mazeArr)

  solution(mazeArr, N, M)
  process.exit()
})

function solution(array, N, M) {
  let queue = [[0, 0]]
  let visited = new Array(N).fill(0).map(() => new Array(M).fill(false))
  let result = []

  visited[0][0] = true

  while (queue.length) {
    let currentPos = queue.shift()
    let neighbors = [
      [0, 1], // 오른쪽
      [1, 0], // 아래쪽
      [0, -1], // 왼쪽
      [-1, 0], // 위쪽
    ]
      .map((pos) => {
        const [x, y] = [currentPos[0] + pos[0], currentPos[1] + pos[1]]
        if (x >= 0 && y >= 0 && x < N && y < M) {
          return [x, y]
        }
      })
      .filter((el) => el && array[el[0]][el[1]] && !visited[el[0]][el[1]])

    console.log(neighbors)

    result.push(currentPos)

    if (currentPos[0] === N - 1 && currentPos[1] === M - 1) {
      console.log("result", result)
      console.log("answer", result.length)
      return result
    }

    for (let i = 0; i < neighbors.length; i++) {
      let neighborPos = neighbors[i]
      //   console.log("array", array[neighborPos[0]][neighborPos[1]])
      //   console.log("visited", visited)
      //   if (neighbors.length === 1 && neighbors[0].every((el, i) => el === neighborPos[i])) {
      //     console.log("?>?><", neighborPos)
      //   }
      //   console.log(neighborPos, visited[neighborPos[0]][neighborPos[1]])
      if (array[neighborPos[0]][neighborPos[1]] && !visited[neighborPos[0]][neighborPos[1]]) {
        visited[neighborPos[0]][neighborPos[1]] = true
        queue.push(neighborPos)
      }
    }
  }
}
