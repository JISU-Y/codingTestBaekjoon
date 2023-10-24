function solution(s1, s2) {
  return combineStrings(s1, s2).length <= combineStrings(s2, s1).length ? combineStrings(s1, s2) : combineStrings(s2, s1)
}

function combineStrings(s1, s2) {
  let answer = ""

  for (let i = 0; i < s1.length; i++) {
    const commonStr = s1.slice(s1.length - 1 - i, s1.length)
    if (s2.includes(commonStr)) {
      answer = s1 + s2.slice(i + 1, s2.length)
    }
  }
  return answer
}

solution("xyZA", "ABCxy")
