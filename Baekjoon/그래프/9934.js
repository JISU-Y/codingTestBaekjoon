/* 완전 이진 트리 */
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
let tree = []

rl.on("line", function (line) {
  input.push(line.split(" ").map((e) => +e))
}).on("close", function () {
  const level = input.shift()
  const traverseResult = input.shift()

  drawGraph(traverseResult, 0)
  console.log(tree.map((el) => el.join(" ")).join("\n"))

  process.exit()
})

function drawGraph(list, level) {
  if (list.length === 0) return
  const middleIndex = Math.floor(list.length / 2)

  const parent = list[middleIndex]
  const leftList = list.slice(0, middleIndex)
  const rightList = list.slice(middleIndex + 1)

  tree[level] = tree[level] ? [...tree[level], parent] : [parent]

  drawGraph(leftList, level + 1)
  drawGraph(rightList, level + 1)

  return
}
