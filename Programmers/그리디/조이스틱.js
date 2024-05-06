// https://1coding.tistory.com/171
// https://tobegood.tistory.com/entry/programmersJoystickJavaScript
function solution(name) {
  let move = 0
  const arr = [0]

  // A에서 특정 문자로 갈 때 순방향으로 가는 것이 빠른지 역방향으로 가는 것이 빠른지 체크

  // 자리를 찾을 때도 왼쪽으로 가는 게 빠른지 오른쪽으로 가는 게 빠른지 체크

  for (let i = 0; i < name.length; i++) {
    if (name[i] === "A") {
      // 지금 문자가 A일 때
      if (i === 0) arr.push(aAgain(name) - 1)
      else if (name[i - 1] !== "A") arr.push(aAgain(name.slice(i)) - (i - 1))
      move += 1
    } else {
      // A가 아닐 때
      move += alphabetCount(name, i) + 1
    }
  }

  move = move - Math.max(...arr) - 1

  console.log(move)

  // 다 더하기
  return move
}

function alphabetCount(name, i) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  let count = alphabet.indexOf(name[i]) <= 13 ? alphabet.indexOf(name[i]) : 26 - alphabet.indexOf(name[i])

  return count
}

function aAgain(name) {
  let repeat = 0

  for (let i = 0; i < name.length; i++) {
    if (name[i] !== "A") break
    repeat++
  }

  return repeat
}

solution("JEROEN") // 56
solution("JAAAAZ") // 11
solution("JAN") // 23
