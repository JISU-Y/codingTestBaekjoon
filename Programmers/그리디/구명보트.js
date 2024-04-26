const people = [70, 50, 80]
const limit = 100

function solution(people, limit) {
  const sortedPeople = people.sort((a, b) => a - b)
  const pairs = findPairOfSumNumber(sortedPeople, limit)
  console.log("🚀 ~ solution ~ pairs:", pairs)

  return pairs.length
}

function findPairOfSumNumber(arr, num) {
  let left = 0 // 배열의 처음부터 시작
  let right = arr.length - 1 // 배열의 마지막 인덱스부터 시작

  let pairs = []

  while (left <= right) {
    let sum = arr[left] + arr[right]

    if (sum <= num) {
      pairs.push([arr[left], arr[right]])

      left++
      right--
    } else if (sum > num) {
      pairs.push([arr[right]])
      right--
    }
  }

  return pairs
}

console.log(solution(people, limit))
