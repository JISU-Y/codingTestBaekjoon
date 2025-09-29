// 문제
// <그림 1>과 같이 정사각형 모양의 지도가 있다. 1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다. 철수는 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 단지에 번호를 붙이려 한다. 여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우를 말한다. 대각선상에 집이 있는 경우는 연결된 것이 아니다. <그림 2>는 <그림 1>을 단지별로 번호를 붙인 것이다. 지도를 입력하여 단지수를 출력하고, 각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하는 프로그램을 작성하시오.

const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().trim().split("\n");
const N = Number(input[0]);
console.log("🚀 ~ N:", N);
const adjacencyMatrix = input.slice(1).map((row) => row.split("").map(Number));

console.log(adjacencyMatrix);

// 배열에서 1로 이루어진 군을 묶는 문제
// 그렇다면 서로 연결이 되어 있다는 것을 알아야 한다.
// 연결이 되어 있는지 확인하기 좋은 알고리즘이 DFS 알고리즘.
// 깊이를 먼저 탐색해서 노드가 서로 연결되어 있는지 확인하기 쉽다.

// 예제 입력이 이중 배열 matrix로 되어 있다.
// 따라서 인접 리스트 보다 인접 행렬 기반으로 푸는 것이 더 좋겠다.

// 먼저 문제에서 주어진 string을 기반으로 matrix를 만들어야 한다.

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function countGroups(grid) {
  if (!grid || grid.length === 0) return [0];

  const rows = grid.length;
  console.log("🚀 ~ countGroups ~ rows:", rows);
  const cols = grid[0].length;
  console.log("🚀 ~ countGroups ~ cols:", cols);
  const visited = Array.from({ length: rows }, () =>
    new Array(cols).fill(false),
  );

  let groupCount = 0;
  const groupMap = new Map();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        const items = dfs(grid, visited, i, j);
        groupCount++;
        groupMap.set(groupCount, items);
      }
    }
  }

  return [groupCount, ...Array.from(groupMap.values()).sort((a, b) => a - b)];
}

function dfs(grid, visited, currentRow, currentCol) {
  if (
    currentRow < 0 ||
    currentCol < 0 ||
    currentRow >= grid.length ||
    currentCol >= grid[0].length
  )
    return 0;

  if (visited[currentRow][currentCol] || grid[currentRow][currentCol] === 0)
    return 0;

  visited[currentRow][currentCol] = true;
  let itemCount = 1;

  for (const [dr, dc] of directions) {
    itemCount += dfs(grid, visited, currentRow + dr, currentCol + dc);
  }

  return itemCount;
}

console.log(countGroups(adjacencyMatrix).join("\n"));
