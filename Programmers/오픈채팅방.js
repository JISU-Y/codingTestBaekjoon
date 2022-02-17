function solution(record) {
  let answer = []
  const messages = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
    Change: "",
  }
  let nickname = {}

  console.log(record.map((el) => ({ [el.split(" ")[1]]: { behavior: el.split(" ")[0], name: el.split(" ")[2] } })))

  for (let i = 0; i < record.length; i++) {
    const el = record[i].split(" ")

    if (el[0] === "Enter") {
      nickname = { ...nickname, [el[1]]: el[2] }
      answer.push({ behavior: `${el[2]}${messages[el[0]]}`, uid: el[1] })
    }
    if (el[0] === "Leave") {
      answer.push({ behavior: `${nickname[el[1]]}${messages[el[0]]}`, uid: el[1] })
    } else {
      nickname = { ...nickname, [el[1]]: el[2] }
    }
  }

  console.log(answer)
  console.log(nickname)
  return answer
}

solution([
  "Enter uid1234 Muzi", //
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
])
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
