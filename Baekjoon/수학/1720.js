/* 타일 코드 */
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
  input.push(Number(line))
}).on("close", function () {
  const [N] = input

  console.log(generateCode(N))

  process.exit()
})

function generateCode(codeLength) {
  const standard = new Array(codeLength).fill("V")
  let allV = standard.join("")
  let count = 1

  // allV, VB, VH, BH, allH, allB, VBH
  // type -> MONO, DOUBLE, TRIPLE
  if (codeLength % 2 === 0) {
    // 짝수인 경우 MONO type이 V, B, H 다 가능
    count += (codeLength / 2 - 1) * 3
  }

  // type = DOUBLE (VH, VB)
  count += Math.floor(codeLength / 2) * 2

  // type = TRIPLE

  return count
}

function isMirror(tileCode) {
  let backFrontStr = []

  for (let i = tileCode.length - 1; i >= 0; i--) {
    backFrontStr.push(tileCode[i])
  }

  return tileCode === backFrontStr.join("")
}

// N = 4
// VVVV
// VVB - VBV
// BB
// VVHH - VHHV
// HHHH
// BHH
