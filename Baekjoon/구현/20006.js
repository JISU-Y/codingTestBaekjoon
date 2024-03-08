/* 랭킹전 대기열 */
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

const STARTED = "Started!"
const WAITING = "Waiting!"

rl.on("line", function (line) {
  input.push(line)
}).on("close", function () {
  input.shift()

  let roomList = []

  input.forEach((user) => {
    // console.log("🚀 ~ input.forEach ~ user:", user)
    const [userLevel, userName] = getUserInfo(user)

    // 다시 각잡고 풀자..
    roomList.forEach((room) => {
      const hostUser = room.find((el) => el.host)

      if (!hostUser) return

      const [hostLevel, hostName] = getUserInfo(hostUser.user)

      if (userLevel >= hostLevel - 10 && userLevel <= hostLevel + 10) {
        room.push({ user, host: false })
        room.sort((a, b) => a.user.split(" ")[1] - b.user.split(" ")[1])
      } else {
        roomList.push([{ user, host: true }])
      }
    })

    roomList.push([{ user, host: true }])
  })

  console.log("roomList", roomList)

  process.exit()
})

const getUserInfo = (userString) => {
  const [lv, name] = userString.split(" ")
  const level = Number(lv)

  return [level, name]
}

// roomList
// room: 10 a | 15 b | 20 c | 17 f | 18 g
// room: 25 d | 30 e | 26 h | 24 i | 28 j

// 10 a
// 15 b
// 20 c
// 25 d
// 30 e
// 17 f
// 18 g
// 26 h
// 24 i
// 28 j
