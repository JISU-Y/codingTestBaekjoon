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
  input.push(line.split(" "))
}).on("close", function () {
  const [N, M] = input.shift().map((e) => +e)
  const mazeArr = input.map((el) =>
    String(el[0])
      .split("")
      .map((e) => +e)
  )

  //   [[1, NaN, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, NaN, NaN, 2, 4],
  //   [1, NaN, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, NaN, NaN, 2, 4]]

  solution(mazeArr, N, M)
  process.exit()
})

function solution(array, N, M) {
  let queue = [[0, 0]]
  let visited = new Array(N).fill(0).map(() => new Array(M).fill(-1))
  let result = []

  visited[0][0] = 1

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
      .filter((el) => el && array[el[0]][el[1]] && visited[el[0]][el[1]] < 0)

    result.push(currentPos)

    if (currentPos[0] === N - 1 && currentPos[1] === M - 1) {
      //   console.log("result", result) // 방문했던 모든 노드. BFS traverse
      console.log("visited", visited)
      console.log(visited[N - 1][[M - 1]])
      return result
    }

    for (let i = 0; i < neighbors.length; i++) {
      let neighborPos = neighbors[i]
      if (array[neighborPos[0]][neighborPos[1]] && visited[neighborPos[0]][neighborPos[1]] === -1) {
        visited[neighborPos[0]][neighborPos[1]] = visited[currentPos[0]][currentPos[1]] + 1
        queue.push(neighborPos)
      }
    }
  }
}
