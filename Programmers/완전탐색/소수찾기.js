// 아직 못 품

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
  if (num === 1) return arr

  arr.forEach((el, index, self) => {
    const rest = [...self.slice(0, index), ...self.slice(index + 1)]
    const combinations = permutation(rest, num - 1)
    const attached = combinations.map((comb) => [el, ...comb])

    result.push(...attached)
  })
  return result
}

function solution(numbers) {
  let answer = 0

  numbers = numbers.split("")

  let methods = []

  for (let i = 1; i <= numbers.length; i++) {
    let final = permutation(numbers, i)
    methods.push(final)
  }

  let set = [...new Set(methods.flatMap((el) => Number(el.join(""))))]

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
