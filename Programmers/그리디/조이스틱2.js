// 이번주는 requestAnimationframe 알아봐야지 ㅎ
// 그리고 visualViewport도 (+ 키패드와의 관련성)

const name1 = "JEROEN"; // 56
const name2 = "JAN"; // 23
const name3 = "JAZ"; // 11
const name4 = "JAAAZ"; // 11

function solution(name) {
  let verticalSum = 0; // 알파벳 선택해서 움직인 개수 (위 아래)
  let min = name.length - 1; // 기본은 커서를 정방향으로 차례대로 모두 움직이는 경우

  for (let i = 0; i < name.length; i++) {
    // 알파벳 선택 움직인 개수 세기
    const alphaNumber = name.charCodeAt([i]) - 65;
    const movingNum = alphaNumber > 13 ? 26 - alphaNumber : alphaNumber;
    verticalSum += movingNum;

    // 커서 움직인 개수 세기 (양옆)

    //  현재 커서에서 그 다음 커서부터 A가 몇개 있는지 셈.
    let nextIndex = i + 1;
    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex += 1;
    }

    min = Math.min(
      min,
      i * 2 + name.length - nextIndex, // 먼저 오른쪽으로 가기
      i + (name.length - nextIndex) * 2, // 처음부터 반대로 가기
    );
  }

  return verticalSum + min;
}

console.log(solution(name1));
console.log(solution(name2));
console.log(solution(name3));
console.log(solution(name4));
