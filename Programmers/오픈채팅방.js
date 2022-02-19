function solution(record) {
  let answer = []
  const namespace = {}
  const command = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  }

  record = record.map((element) => {
    const el = element.split(" ")
    if (el[0] === "Enter") {
      // namespace에 id: 현재 이름 추가
      namespace[el[1]] = el[2]
      return { cmd: el[0], id: el[1] }
    } else if (el[0] === "Leave") {
      return { cmd: el[0], id: el[1] }
    } else {
      namespace[el[1]] = el[2]
      return null
    }
  })

  answer = record.map((el) => (el ? `${namespace[el.id]}${command[el.cmd]}` : null))

  return answer.filter((el) => el)
}

solution([
  "Enter uid1234 Muzi", //
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
])
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

// 다른 사람 풀이
function solution1(record) {
  let answer = []
  const namespace = {}
  const command = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  }

  record.forEach((element) => {
    // 구조 분해 할당 활용
    const [cmd, id, name] = element.split(" ")

    if (name) {
      namespace[id] = name
    }

    if (cmd !== "Change") {
      answer.push({ cmd, id })
    }
  })

  answer = answer.map((el) => `${namespace[el.id]}${command[el.cmd]}`)

  return answer.filter((el) => el)
}
