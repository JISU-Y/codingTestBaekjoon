/* NBA 농구 */
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
  const goals = input.shift()

  let teamGoal = {
    1: 0,
    2: 0,
  }
  let teamOne = {
    sec: 0,
    min: 0,
  }
  let teamTwo = {
    sec: 0,
    min: 0,
  }
  let winningTeam = 0

  input.push([0, "48:00"])

  input.forEach(([team, time], index) => {
    const [curMin, curSec] = time.split(":").map((el) => +el)
    const prevMin = index - 1 < 0 ? 0 : Number(input[index - 1][1].split(":")[0])
    const prevSec = index - 1 < 0 ? 0 : Number(input[index - 1][1].split(":")[1])

    const seconds = curSec - prevSec + (curSec - prevSec < 0 ? 60 : 0)
    const minutes = curMin - prevMin + (curSec - prevSec < 0 ? -1 : 0)

    if (winningTeam === 1) {
      teamOne.min = teamOne.min + minutes + (teamOne.sec + seconds >= 60 ? 1 : 0)
      teamOne.sec = teamOne.sec + seconds + (teamOne.sec + seconds >= 60 ? -60 : 0)
    }
    if (winningTeam === 2) {
      teamTwo.min = teamTwo.min + minutes + (teamTwo.sec + seconds >= 60 ? 1 : 0)
      teamTwo.sec = teamTwo.sec + seconds + (teamTwo.sec + seconds >= 60 ? -60 : 0)
    }

    team && teamGoal[team]++

    if (teamGoal[1] > teamGoal[2]) {
      winningTeam = 1
    }
    if (teamGoal[1] < teamGoal[2]) {
      winningTeam = 2
    }
    if (teamGoal[1] === teamGoal[2]) {
      winningTeam = 0
    }
  })

  console.log(
    `${teamOne.min < 10 ? `0${teamOne.min}` : teamOne.min}:${teamOne.sec < 10 ? `0${teamOne.sec}` : teamOne.sec}`
  )
  console.log(
    `${teamTwo.min < 10 ? `0${teamTwo.min}` : teamTwo.min}:${teamTwo.sec < 10 ? `0${teamTwo.sec}` : teamTwo.sec}`
  )

  process.exit()
})
