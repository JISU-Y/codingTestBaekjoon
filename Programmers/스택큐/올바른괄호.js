const s1 = "()()" // true
const s2 = "(())()" // true
const s3 = ")()(" // false
const s4 = "(()(" // false

// "(" 넣고, "(" 넣고, ")" 넣지 말고 앞에 넣었던 "(" 지우기

function solution(s) {
  const bracketList = [...s.split("")]
  let bracketCountingList = []

  if (bracketList.length % 2 === 1) return false

  while (bracketList.length) {
    const popped = bracketList.pop()

    if (popped === ")") {
      bracketCountingList.push(popped)
    } else {
      if (!bracketCountingList.length) return false

      bracketCountingList.pop()
    }
  }

  if (bracketCountingList.length > 0) return false

  return true
}

//s2
// "("->1 ")"->4
// "("->2 ")"->3
// "("->5 ")"->6

// 앞에 "(" 일 때 "("이면 다른 곳에서 세기 시작, ")" 이면 짝 맞춰주기
//s4
// "("->1
// "("->2 ")"->3
// "("->4

function solution_old(s) {
  const bracketList = [...s.split("")]
  let bracketCountingList = []

  if (bracketList.length % 2 === 1) return false

  try {
    while (bracketList.length) {
      const popped = bracketList.pop()

      if (popped === ")") {
        bracketCountingList.push([popped])
      } else {
        if (bracketCountingList.length === 0) return false

        const closeBracketPosition =
          bracketCountingList.length - bracketCountingList.reverse().findIndex((el) => el.length === 1)

        bracketCountingList[bracketCountingList.length - closeBracketPosition].push(popped)
      }
    }

    if (bracketCountingList.some((el) => el.length === 1)) return false
  } catch (error) {
    return false
  }

  return true
}

console.log(solution(s4))
