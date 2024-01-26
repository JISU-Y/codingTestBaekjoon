/* 지름길 */
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
  const [numberOfShortcut, lengthOfHighway] = input.shift()
  const shortcutList = input

  const graph = Array.from({ length: lengthOfHighway + 1 }, () => [])
  const distance = Array(lengthOfHighway + 1).fill(Infinity) // 특정 인덱스 까지의 거리

  // console.log(shortcutList)
  for (let i = 0; i < numberOfShortcut; i++) {
    const [start, end, weight] = shortcutList[i]

    if (end > lengthOfHighway) continue // 지름길의 도착지점이 실제 도착보다 길면 안됨.
    if (end - start <= weight) continue // 지름길이 더 멀면 안됨.

    graph[start].push([end, weight])
  }

  // console.log(graph)

  for (let i = 0; i <= lengthOfHighway; i++) {
    if (i > 0) {
      distance[i] = Math.min(distance[i], distance[i - 1] + 1)
    }

    for (let [end, weight] of graph[i]) {
      console.log(i)
      // 더 짧게 걸리는 것으로 대체
      if (distance[end] > distance[i] + weight) {
        distance[end] = distance[i] + weight
      }
    }
  }

  console.log(distance[lengthOfHighway])

  process.exit()
})
