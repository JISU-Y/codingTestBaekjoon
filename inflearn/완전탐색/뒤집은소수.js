// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면
// 그 소수를 출력하는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다.
// 그러면 23을 출력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

let N = 9
let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]

const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return num === 1 ? false : true
}

console.log(arr)

arr = arr.map((el) => Number(el.toString().split("").reverse().join(""))).filter((el) => isPrime(el))

console.log(arr)
