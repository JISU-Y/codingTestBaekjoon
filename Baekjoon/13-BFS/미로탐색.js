// 최단 경로 찾기
// BFS를 통해 가장 빠른 길을 찾을 수 있다.
// 가장 빠른 길을 어떻게 찾을까?
// 행렬에 가중 치를 더해준다. 그러면 모든 1 길을 다 돌긴 도는데, 마지막 N,M에 왔을 때 어떤 값이 들어있는지를 보면 된다.

// 101111
// 101010
// 101011
// 111011

// 1 0 9 10 11 12
// 2 0 8 0  12 0
// 3 0 7 0  13 14
// 4 5 6 0  14 15 => 15가 가장 짧은 거리!

const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim().split("\n")
    : fs.readFileSync("Baekjoon/input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const grid = input.slice(1).map((row) => row.split("").map(Number));

const directions = [
  [-1, 0], // 상
  [1, 0], // 하
  [0, -1], // 좌
  [0, 1], // 우
];

function bfs() {
  // 방문 배열을 거리 배열로 활용 (1부터 시작)
  const distance = Array.from({ length: N }, () => new Array(M).fill(0));
  distance[0][0] = 1; // 시작점은 1로 설정

  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [currentRow, currentCol] = queue.shift();

    // 목적지 도착 시 바로 반환 (최적화)
    if (currentRow === N - 1 && currentCol === M - 1) {
      return distance[currentRow][currentCol];
    }

    // 4방향 탐색
    for (const [dr, dc] of directions) {
      const nextRow = currentRow + dr;
      const nextCol = currentCol + dc;

      // 범위 체크
      if (nextRow < 0 || nextRow >= N || nextCol < 0 || nextCol >= M) {
        continue;
      }

      // 이동 가능하고 아직 방문하지 않은 칸인지 체크
      if (grid[nextRow][nextCol] === 1 && distance[nextRow][nextCol] === 0) {
        distance[nextRow][nextCol] = distance[currentRow][currentCol] + 1;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  return distance[N - 1][M - 1];
}

console.log(bfs());
