// 220201 한번 더 풀어보기
// https://taesung1993.tistory.com/14
// https://zzemal.tistory.com/77

// 소수 판별
function isPrime(num) {
  if (num === 0 || num === 1) return false
  if (num === 2 || num === 3) return true

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

// 순열 함수
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

function solution(numbers) {
  let answer = 0

  numbers = numbers.split("")

  let methods = []

  // 1개, 2개, 3개 고를 때 경우의 수 모두 구함
  for (let i = 1; i <= numbers.length; i++) {
    let final = permutation(numbers, i)
    methods.push(final)
  }

  console.log(methods)

  // 조합이 겹치는 경우도 있으므로 set으로 겹침 제거
  console.log(methods.flat(1).map((el) => Number(el.join(""))))
  let set = [...new Set(methods.flat(1).map((el) => Number(el.join(""))))]

  console.log(set)

  for (let el of set) {
    if (isPrime(el)) {
      answer++
    }
  }

  console.log(answer)

  return answer
}

solution("17")
// solution("011")
