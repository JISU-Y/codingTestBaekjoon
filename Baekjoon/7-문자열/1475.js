// https://www.acmicpc.net/problem/1475
// 문제
// 다솜이는 은진이의 옆집에 새로 이사왔다. 다솜이는 자기 방 번호를 예쁜 플라스틱 숫자로 문에 붙이려고 한다.
// 다솜이의 옆집에서는 플라스틱 숫자를 한 세트로 판다. 한 세트에는 0번부터 9번까지 숫자가 하나씩 들어있다. 다솜이의 방 번호가 주어졌을 때, 필요한 세트의 개수의 최솟값을 출력하시오. (6은 9를 뒤집어서 이용할 수 있고, 9는 6을 뒤집어서 이용할 수 있다.)

// 첫째 줄에 다솜이의 방 번호 N이 주어진다. N은 1,000,000보다 작거나 같은 자연수이다.

// 1000000 이하면 무조건 for loop으로 다 돌리면 너무 늦어지는 거 맞나? -> ㄴㄴ 자리수라서 7자리임

// 9999 -> 2
// 122 -> 2
// 12635 -> 1
// 888888 -> 6

// 한 세트: 0,1,2,3,4,5,6,7,8,9
// 9999번을 만드려고 하면 원래는 4개의 세트가 필요하겠지만 6과 9는 뒤집어서 사용할 수 있으므로 6,6,9,9 즉 2세트만 있으면 된다.
// 122 => 1, 2, 2 -> 2개
// 12635 => 1, 2, 3, 5, 6 => 1개
// 888888 => 8,8,8,8,8,8 => 6개 필요

const input = 12635;

function solution(roomNumber) {
  const numberArr = String(roomNumber).split("");
  // 각 자리수의 숫자가 얼마나 중복되는지.
  // 각기 다른 숫자가 1개씩만 있으면 1개의 세트로 해결 가능
  // 즉, 중요한 건 중복된 숫자
  let useStatus = {
    [0]: 0,
    [1]: 0,
    [2]: 0,
    [3]: 0,
    [4]: 0,
    [5]: 0,
    [6]: 0,
    [7]: 0,
    [8]: 0,
    [9]: 0,
  };

  // 6 6 6 => 3
  // 9 9 9 9 => 4
  // 6 => 3
  // 7 => 3 + 1
  // 6과 9가 문제, 6이 2개 9가 4개 필요하면 총 6개의 세트가 필요할 것 같지만 사실 6개를 반으로 나눈 3개의 세트만 있으면 완성할 수 있음
  // 6이 3개 9가 4개면 총 7개가 아닌 반으로 나눈 3.5, .5는 1로 쳐야함.
  for (let i = 0; i < numberArr.length; i++) {
    useStatus[numberArr[i]]++;
  }
  const sixAndNine = Math.ceil((useStatus[6] + useStatus[9]) / 2);
  useStatus[6] = sixAndNine;
  useStatus[9] = sixAndNine;

  const valueArr = Object.values(useStatus);

  return Math.max(...valueArr);
}

console.log(solution(input));

// ------------------------------------------------------
const problemNum = 1475;
const input2 = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt",
  )
  .toString()
  .trim()
  .replaceAll("9", "6") // 이걸 이렇게 바꿔버리네.. how clever....
  .split("")
  .map(Number);

const counts = Array(9).fill(0);
input2.forEach((e) => {
  counts[e]++; // 그냥 array의 index를 key로 보고 걍 값을 넣어버렸구나
});
counts[6] = Math.ceil(counts[6] / 2);

console.log(Math.max(...counts));
