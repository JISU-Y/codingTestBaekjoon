function generateAllCombinations(arr) {
  // 결과를 저장할 배열
  const result = [];

  // 재귀 함수 정의
  function generate(index, currentArray) {
    // 모든 원소를 확인했으면 결과에 추가하고 반환
    if (index === arr.length) {
      result.push(currentArray);
      return;
    }

    // 현재 원소에 '-'를 붙이지 않는 경우
    generate(index + 1, [...currentArray, arr[index]]); // arr의 0번째 요소 가장 처음.. 들어갔던 0번째 요소 받고 그 다음 요소 추가

    // 현재 원소에 '-'를 붙이는 경우
    generate(index + 1, [...currentArray, -arr[index]]); // currentArray를 유지하면서 그 다음 요소를 붙이고 안 붙이고 해서 모든 경우의 수를 만들어냄.
  }

  // 재귀 함수 시작
  generate(0, []);

  return result;
}

function solution(numbers, target) {
  let answer = 0;

  const combination = generateAllCombinations(numbers);

  for (combi of combination) {
    const sum = combi.reduce((acc, cur) => (acc += cur), 0);

    if (sum === target) {
      answer++;
    }
  }

  return answer;
}

console.log(solution([4, 1, 2, 1], 4)); // 5

// 1, 1, 1, 1, 1
// -1, -1, -1, -1, -1
// 1 1 -1 1 1
