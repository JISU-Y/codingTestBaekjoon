// 최단 거리 구하는 문제
// 최단 거리 = bfs?
//

function solution(array) {
  let position = [[0, 0]];
  const [axisX, axisY] = [array[0].length, array.length];
  let visited = new Array(axisY).fill(0).map(() => new Array(axisX).fill(-1));
  let path = [];

  visited[0][0] = 1;

  const neighbors = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (position.length) {
    let curPos = position.shift();

    // 4번재 거만 이렇게 하면 시간 초과 남
    // const nextMoveList = neighbors
    //   .map(([directionX, directionY]) => {
    //     const [x, y] = [curPos[0] + directionX, curPos[1] + directionY];
    //     if (x >= 0 && x < axisX && y >= 0 && y < axisY) return [x, y];
    //   })
    //   .filter((el) => el);

    const nextMoveList = neighbors
      .map(([directionX, directionY]) => [
        curPos[0] + directionX,
        curPos[1] + directionY,
      ])
      .filter(([x, y]) => x >= 0 && x < axisX && y >= 0 && y < axisY);

    let possiblePath = nextMoveList.filter(
      ([nextX, nextY]) => array[nextY][nextX] && visited[nextY][nextX] < 0,
    ); // 갈 수 있으면서 (1) 방문한 적 없는 칸(-1)

    // path 찍기
    path.push(curPos);

    if (curPos[0] === axisX - 1 && curPos[1] === axisY - 1) {
      return visited[axisY - 1][axisX - 1];
    }

    for (let i = 0; i < possiblePath.length; i++) {
      const [nextX, nextY] = possiblePath[i];

      if (array[nextY][nextX] && visited[nextY][nextX] < 0) {
        visited[nextY][nextX] = visited[curPos[1]][curPos[0]] + 1;
        position.push([nextX, nextY]);
      }
    }
  }

  console.log("🚀 ~ solution ~ visited:", visited);

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ]),
); //	11

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ]),
); // -1

console.log(
  solution([
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
  ]),
); //	11
