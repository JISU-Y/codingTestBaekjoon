const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]

function solution(clothes) {
  const clothesObj = {}

  clothes.forEach(([clothName, clothType]) => {
    clothesObj[clothType] = clothesObj[clothType] ? clothesObj[clothType] + 1 : 1
  })

  return Object.values(clothesObj).reduce((acc, cur) => (acc *= cur + 1), 1) - 1
}

console.log(solution(clothes))
