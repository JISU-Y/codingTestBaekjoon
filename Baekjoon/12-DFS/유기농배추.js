// 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
// 1 초	512 MB	233482	98739	65109	39.827%
// 문제
// 차세대 영농인 한나는 강원도 고랭지에서 유기농 배추를 재배하기로 하였다. 농약을 쓰지 않고 배추를 재배하려면 배추를 해충으로부터 보호하는 것이 중요하기 때문에, 한나는 해충 방지에 효과적인 배추흰지렁이를 구입하기로 결심한다. 이 지렁이는 배추근처에 서식하며 해충을 잡아 먹음으로써 배추를 보호한다. 특히, 어떤 배추에 배추흰지렁이가 한 마리라도 살고 있으면 이 지렁이는 인접한 다른 배추로 이동할 수 있어, 그 배추들 역시 해충으로부터 보호받을 수 있다. 한 배추의 상하좌우 네 방향에 다른 배추가 위치한 경우에 서로 인접해있는 것이다.

// 한나가 배추를 재배하는 땅은 고르지 못해서 배추를 군데군데 심어 놓았다. 배추들이 모여있는 곳에는 배추흰지렁이가 한 마리만 있으면 되므로 서로 인접해있는 배추들이 몇 군데에 퍼져있는지 조사하면 총 몇 마리의 지렁이가 필요한지 알 수 있다. 예를 들어 배추밭이 아래와 같이 구성되어 있으면 최소 5마리의 배추흰지렁이가 필요하다. 0은 배추가 심어져 있지 않은 땅이고, 1은 배추가 심어져 있는 땅을 나타낸다.

// 1    1	0	0	0	0	0	0	0	0
// 0	1	0	0	0	0	0	0	0	0
// 0	0	0	0	1	0	0	0	0	0
// 0	0	0	0	1	0	0	0	0	0
// 0	0	1	1	0	0	0	1	1	1
// 0	0	0	0	1	0	0	1	1	1
const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().trim().split("\n");
const T = Number(input[0]);
let lineIndex = 1;

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[lineIndex].split(" ").map(Number);
  lineIndex++;

  const grid = Array.from({ length: N }, () => new Array(M).fill(0));
  for (let i = 0; i < K; i++) {
    const [col, row] = input[lineIndex].split(" ").map(Number);

    grid[row][col] = 1;

    lineIndex++;
  }

  const warmCount = getWarmsNeeded(grid, N, M);
  console.log(warmCount);
}

function getWarmsNeeded(grid, row, col) {
  let count = 0;
  const visited = Array.from({ length: row }, () => new Array(col).fill(false));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        dfs(grid, visited, i, j);
        count++;
      }
    }
  }

  return count;
}

function dfs(grid, visited, currentRow, currentCol) {
  if (
    currentRow < 0 ||
    currentCol < 0 ||
    currentRow >= grid.length ||
    currentCol >= grid[0].length
  )
    return;

  if (visited[currentRow][currentCol] || grid[currentRow][currentCol] === 0)
    return;

  visited[currentRow][currentCol] = true;

  for (const [dr, dc] of directions) {
    dfs(grid, visited, currentRow + dr, currentCol + dc);
  }

  return;
}
