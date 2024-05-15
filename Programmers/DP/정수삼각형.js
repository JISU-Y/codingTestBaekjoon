function solution(triangle) {
  // 모든 요소의 경로를 돌면서 숫자를 더해 나갈 것 (그 자리에 경로로 더한 숫자를 대신 넣을 것)
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      let pathStack;

      // 삼각형에서 가장 왼쪽에 붙어있는 경로는 딱 한 경로만 존재 (j가 모두 0인 경우)
      if (j === 0) pathStack = triangle[i - 1][j];
      // 삼각형에서 가장 오른쪽에 붙어있는 경로는 딱 한 경로만 존재 (j가 모두 i인 경우)
      else if (j === i) pathStack = triangle[i - 1][j - 1];
      // 삼각형의 안쪽에 있어서 경로가 여러 개일 수 있는 경로는 최대 값을 계산해줌.
      // i - 1 단계에서 가능한 경로 j-1, j 중 큰 값을 저장
      else pathStack = Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);

      triangle[i][j] += pathStack;
    }
  }

  // 가장 마지막 아래까지 가서 경로의 숫자를 모두 더한 층이 arr.length - 1 층 -> 거기서 max 값이 경로의 최대값이 됨.
  return triangle[triangle.length - 1].sort((a, b) => b - a)[0]; // Math.max로 하면 딱 하나 시간 초과.. 찾아보니 Math.max도 On이라고 하는데? best On, worst O(nlogn)이라고 하는 sort는 왜 되니?
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));

// DP를 그저 피보나치 점화식으로 생각해버려서 왼쪽과 오른쪽은 무조건 하나의 경우밖에 없는 사실을 알았음에도
// 규칙을 일반화 하지 못하고, DP에 어떻게 저장할지도 몰랐던 것.

// https://gobae.tistory.com/27 -> 매우 직관적인 풀이!!
