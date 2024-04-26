const number = "1924"
const k = 2

function permutation(arr, num) {
  let result = []
  if (num === 1) return arr.map((el) => [el])

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
    const combinations = permutation(rest, num - 1)
    const attached = combinations.map((comb) => [fixed, ...comb])

    result.push(...attached)
  })

  return result
}

function getCombinations(arr, selectNum) {
  const result = []

  if (selectNum === 1) return arr.map((el) => [el])

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1)
    const combinations = getCombinations(rest, selectNum - 1)
    const attached = combinations.map((el) => [fixed, ...el])

    result.push(...attached)
  })

  return result
}

function solution(number, k) {
  const stack = []
  let count = 0

  for (let num of number) {
    // 아직 다 제거 안했고,
    // 스택이 비어있지 않으면서
    // 스택에 마지막으로 들어갔던 마지막 요소와 지금 넣어질 요소를 비교
    while (count < k && stack.length && stack[stack.length - 1] < num) {
      // 넣게 될 요소가 더 크면 마지막꺼 꺼냄
      stack.pop()
      count++
    }
    stack.push(num)
  }

  // 스택에 남은 숫자를 문자열로 합치되, k개가 남아있으면 그만큼 뒤에서 제거
  return stack.join("").substring(0, stack.length - k + count)
}

// 사용 예시
console.log(solution("1924", 2)) // "94"
console.log(solution("1231234", 3)) // "3234"
console.log(solution("4177252841", 4)) // "775841"

// 4
// 4 1
// 4
// 7
// 7 7 2
// 7 7 5
