function solution(m, n, puddles) {
  // 일단 dp 용 m,n 배열 만듦
  let dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
  const puddlesArr = puddles.map(([a, b]) => [b - 1, a - 1]);

  // 1,1 에서 2,2 로 가는 경우의 수 -> 2
  // 1,1 에서 2,3 으로 가는 경우의 수 -> 3
  // 1,1 에서 3,3 으로 가는 경우의 수 -> 6 ( 3 + 3 )

  dp[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 첫번째 칸 (집)은 건너 뜀.
      if (i === 0 && j === 0) continue;

      const hasMetPuddle = !!puddlesArr.find(
        (puddle) => puddle[0] === i && puddle[1] === j,
      );

      // 웅덩이 만나면 undefined 표시
      if (hasMetPuddle) {
        dp[i][j] = undefined;
        continue;
      }

      // 첫번째 행이나 첫번째 열인 경우 이전 수가 1이면 1, 0이면 0이어야 함 (왜냐면 가는 길은 하나고 한번 0이면 그쪽으로는 못감) **
      if (i === 0 || j === 0) {
        if (i > 0) {
          dp[i][j] = dp[i - 1][j] % 1000000007;
        }
        if (j > 0) {
          dp[i][j] = dp[i][j - 1] % 1000000007;
        }

        continue;
      }

      dp[i][j] = ((dp[i - 1][j] || 0) + (dp[i][j - 1] || 0)) % 1000000007;
    }
  }

  // dp의 m,n 뽑음
  return dp[n - 1][m - 1] || 0;
}

console.log(solution(4, 3, [[2, 2]])); // 4

// [ [ 0, 1, 1, 1 ],
//   [ 1, 2, 3, 4 ],
//   [ 1, 3, 6, 10 ] ]

// [ [ 0, 1, 1, 1 ],
//   [ 1, p, 1, 2 ],
//   [ 1, 1, 2, 4 ] ]

// [ [ 1, 1, 1, 1 ],
//   [ 1, undefined, 1, 2 ],
//   [ 1, 0, 1, 3 ] ]
