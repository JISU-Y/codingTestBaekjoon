const k = 80
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
]

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

function solution(k, dungeons) {
  const arr = permutation(dungeons, dungeons.length)

  let max = 0

  arr.forEach((dungeonOrderArray) => {
    let turn = 0
    let mp = k

    for (let i = 0; i < dungeonOrderArray.length; i++) {
      const [requiredMP, mpToTake] = dungeonOrderArray[i]

      if (mp >= requiredMP) {
        mp -= mpToTake
        turn++
      }
    }

    if (turn > max) max = turn
  })

  return max
}

console.log(solution(k, dungeons))
