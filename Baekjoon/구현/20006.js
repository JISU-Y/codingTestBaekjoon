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
  const preInfo = input.shift()
  const [numOfPlayers, limit] = preInfo.split(" ").map((el) => +el)

  let roomList = []

  input.forEach((user) => {
    const [userLevel, userName] = getUserInfo(user)

    for (let room of roomList) {
      if (room.length >= limit) continue

      const hostUser = room.find((el) => el.host)

      const [hostLevel, hostName] = getUserInfo(hostUser.user)

      if (userLevel >= hostLevel - 10 && userLevel <= hostLevel + 10) {
        room.push({ user, host: false })
        room.sort((a, b) => a.user.split(" ")[1].localeCompare(b.user.split(" ")[1]))

        return
      }
    }

    roomList.push([{ user, host: true }])
  })

  const roomResultList = roomList.map((room) => {
    let roomInfoString = room.map(({ user }) => user).join("\n")

    if (room.length === limit) {
      return `${STARTED}\n${roomInfoString}`
    }

    return `${WAITING}\n${roomInfoString}`
  })

  console.log(roomResultList.join("\n"))

  process.exit()
})

const getUserInfo = (userString) => {
  const [lv, name] = userString.split(" ")
  const level = Number(lv)

  return [level, name]
}
