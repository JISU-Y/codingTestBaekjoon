/* 스위치 켜고 끄기 */
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
  input.push(line.split(" ").map((el) => +el))
}).on("close", function () {
  const numOfSwitches = input.shift()
  // console.log("🚀 ~ numOfSwitches:", numOfSwitches)
  let state = input.shift()
  const numOfStudents = input.shift()

  for (let i = 0; i < numOfStudents; i++) {
    const [gender, position] = input.shift()
    // console.log("🚀 ~ gender, position:", gender, position)
    if (gender === 1) {
      state = state.map((el, index) => ((index + 1) % position === 0 ? toggleSwitch(el) : el))
    }
    //   1  2  3  4  5  6  7  8
    // [ 0, 1, 1, 1, 0, 1, 0, 1 ]
    if (gender === 2) {
      let pointer = position - 1

      while (pointer >= 0) {
        if (position - 1 === pointer) {
          state[pointer] = toggleSwitch(state[pointer])

          pointer--

          continue
        }

        const contrastPointer = (position - 1) * 2 - pointer
        if (state[pointer] === state[contrastPointer]) {
          state[pointer] = toggleSwitch(state[pointer])
          state[contrastPointer] = toggleSwitch(state[contrastPointer])

          pointer--

          continue
        } else {
          break
        }
      }
    }
  }

  let answer = []

  for (let i = 0; i < state.length; i = i + 20) {
    answer.push(state.slice(i, i + 20))
  }

  console.log(answer.map((el) => el.join(" ")).join("\n"))

  // 남: N의 배수 상태 바꿈
  // 여: N을 기준으로 대칭되는 구간 모두 상태 바꿈. 대칭 안되면 N만 바꿈

  process.exit()
})

function toggleSwitch(state) {
  if (state === 0) {
    return 1
  }

  return 0
}
