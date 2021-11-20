// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
// 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
let fs = require("fs")
// let input = fs.readFileSync("/dev/stdin").toString()
let input = require("fs").readFileSync("../input.txt").toString().split("\n")

console.log(input[0])
console.log(input[1].split(" "))

let N = input[0]
let arr = []

for (let i = 0; i < N; i++) {
  arr.push(parseInt(input[1].split(" ")[i]))
}

console.log(N)
console.log(arr)

let newArr = []

newArr = arr.map((el) =>
  el
    .toString()
    .split("")
    .reduce((acc, cur, idx) => (acc += parseInt(cur)), 0)
)
console.log(arr)
console.log(newArr)

let max = Math.max(...newArr)
let realMax = 0
for (let i = 0; i < arr.length; i++) {
  if (max < newArr[i]) {
    max = newArr[i]
    realMax = arr[i]
  } else if (max === newArr[i]) {
    if (arr[i] > arr[newArr.indexOf(max)]) {
      realMax = arr[i]
    } else {
      realMax = arr[newArr.indexOf(max)]
    } // 같을 때..?
  }
}

console.log(max)
console.log(realMax)
