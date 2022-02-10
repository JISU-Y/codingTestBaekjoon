// 순열과 조합
// https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

// 조합 (nCr)
function getCombinations(arr, selectNum) {
  const result = []

  if (selectNum === 1) return arr.map((el) => [el])
  // 뽑을 개수가 1이 되면 받은 배열 그 안에 요소들을 배열을 씌워서 return

  arr.forEach((fixed, index, origin) => {
    // fixed를 제외한 나머지 요소들 (재귀 함수에 arr로 넣을 것들)
    const rest = origin.slice(index + 1) // 1, [2,3,4]

    // 조합 (처음 뽑은 한 개를 제외한 배열로 다시 조합을 구함, 그렇기 떄문에 뽑는 개수 한 개 줄음)
    const combinations = getCombinations(rest, selectNum - 1) // return [[3], [4]]

    // 나머지에 대해서 조합
    const attached = combinations.map((el) => [fixed, ...el]) // [[2,3], [2,4]]

    result.push(...attached)
  })

  return result
}

console.log(getCombinations([1, 2, 3, 4], 3))

// 순열 (nPr)

function getPermutation(arr, selectNum) {
  const result = []

  if (selectNum === 1) return arr.map((el) => [el])

  arr.forEach((fixed, index, origin) => {
    // fixed를 제외한 나버지 배열 (index 번째 요소만 쏙 빼놓고)
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]

    const permutations = getPermutation(rest, selectNum - 1)

    const attached = permutations.map((el) => [fixed, ...el])

    result.push(...attached)
  })

  return result
}

console.log(getPermutation([1, 2, 3, 4], 3))
