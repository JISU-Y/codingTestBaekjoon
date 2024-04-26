// 이번주는 requestAnimationframe 알아봐야지 ㅎ
// 그리고 visualViewport도 (+ 키패드와의 관련성)

const name1 = "JEROEN" // 56
const name2 = "JAN" // 23
const name3 = "JAZ" // 11
const name4 = "JAAAZ" // 11

function solution(name) {
  let sum = 0

  for (let i = 0; i < name.length; i++) {
    const alphaNumber = name.charCodeAt([i]) - 65
    const movingNum = alphaNumber > 13 ? 26 - alphaNumber : alphaNumber
    sum += movingNum
  }

  let horizontalSum = 0
  let aCountArr = [0]

  // a 계산하는거 다시 풀기
  for (let i = 0; i < name.length; i++) {
    if (name[i] === "A") {
      if (i === 0) aCountArr.push(aAgain(name) - 1)
      else if (name[i - 1] !== "A") aCountArr.push(aAgain(name.slice(i)) - (i - 1))
      horizontalSum += 1
    } else {
      horizontalSum += 1
    }
  }

  horizontalSum -= Math.max(...aCountArr) + 1

  return sum + horizontalSum
}

function aAgain(name) {
  let repeat = 0

  for (let i = 0; i < name.length; i++) {
    if (name[i] !== "A") break
    repeat++
  }

  return repeat
}

console.log(solution(name1))
// console.log(solution(name2))
console.log(solution(name3))
console.log(solution(name4))
