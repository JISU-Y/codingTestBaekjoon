function solution(name) {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let answer = 0
  let initialName = new Array(name.length).fill("A")

  console.log(initialName)

  // A에서 특정 문자로 갈 때 순방향으로 가는 것이 빠른지 역방향으로 가는 것이 빠른지 체크
  const diffName = name.split("").map((el, index) => {
    const nameElIndex = alphabet.indexOf(el)
    const initialNameElIndex = alphabet.indexOf(initialName[index])
    if (nameElIndex - initialNameElIndex > initialNameElIndex - nameElIndex + 26) {
      return initialNameElIndex - nameElIndex + 26
    } else {
      return nameElIndex - initialNameElIndex
    }
  })

  console.log(diffName)

  // 자리를 찾을 때도 왼쪽으로 가는 게 빠른지 오른쪽으로 가는 게 빠른지 체크

  let power = 0
  if (!diffName.includes(0)) {
    // 0 없으면 그냥 도는 것임
    power += diffName.length - 1
  } else {
    // ...
  }

  // 다 더하기
  return answer
}

// solution("JEROEN") // 56
solution("JAZ") // 11
// solution("JAN") // 23
