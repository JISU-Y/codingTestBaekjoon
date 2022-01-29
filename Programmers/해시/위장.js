function solution(clothes) {
  const clothesObj = {}

  clothes.forEach((el) => {
    clothesObj[el[1]] = clothesObj[el[1]] ? clothesObj[el[1]] + 1 : 1
  })

  return Object.values(clothesObj).reduce((acc, cur) => (acc *= cur + 1), 1) - 1
}

solution([
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
]) // 5

// https://im-developer.tistory.com/128
// https://laycoder.tistory.com/203?category=893543
// function solution(clothes) {
//   const clothesObj = {}
//   console.log(clothes)

//   // 1개고르고, 2개 고르고, 3개 고를 때 모두의 경우의수를 더하기

//   // 이렇게 경우의 수를 구하기 보다
//   // 규칙이
//   // 종류마다의 옷 개수에서 1씩을 더해준다음에 모두 곱해주면 된다.
//   // 왜냐하면, 모든 종류의 옷을 갖춰 입어야 하는 것이 아니기 때문이다.
//   // 결과가 안 입은 것까지 포함시키기 때문에 마지막에 -1만 해주면 된다.

//   clothes.forEach((el) => {
//     clothesObj[el[1]] = clothesObj[el[1]] ? clothesObj[el[1]] + 1 : 1
//   })

//   let result = 1

//   for (const key in clothesObj) {
//     result *= clothesObj[key] + 1
//   }

//   return result - 1
// }

// solution([
//   ["yellowhat", "headgear"],
//   ["bluesunglasses", "eyewear"],
//   ["green_turban", "headgear"],
// ]) // 5
