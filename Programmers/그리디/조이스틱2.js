// 이번주는 requestAnimationframe 알아봐야지 ㅎ
// 그리고 visualViewport도 (+ 키패드와의 관련성)

const name1 = "JEROEN"; // 56
const name2 = "JAN"; // 23
const name3 = "JAZ"; // 11
const name4 = "JAAAZ"; // 11

function solution(name) {
  let verticalSum = 0; // 알파벳 선택해서 움직인 개수 (위 아래)

  for (let i = 0; i < name.length; i++) {
    const alphaNumber = name.charCodeAt([i]) - 65;
    const movingNum = alphaNumber > 13 ? 26 - alphaNumber : alphaNumber;
    verticalSum += movingNum;
  }

  let horizontalSum = 0; // 알파벳 바꿀 위치를 움직인 개수 (좌우)
  let moves = [0];

  // for (let i = 0; i < name.length; i++) {

  // }

  horizontalSum -= Math.max(...moves) + 1;

  return verticalSum + horizontalSum;
}

// 받은 name에서 처음부터 A가 얼마나 반복되는지 (연속으로 있는지)
function aAgain(name) {
  let repeat = 0;

  for (let i = 0; i < name.length; i++) {
    if (name[i] !== "A") break;
    repeat++;
  }

  return repeat;
}

console.log(solution(name1));
// console.log(solution(name2))
console.log(solution(name3));
console.log(solution(name4));

console.log(aAgain("AAJAAAAZA"));
