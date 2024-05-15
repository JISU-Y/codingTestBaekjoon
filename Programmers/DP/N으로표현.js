function solution(N, number) {
  const arr = Array(number + 1).fill(0);

  arr[1] = N >= 2 ? 2 : 1;
  arr[2] = 1;
  arr[3] = 1;

  for (let i = 4; i <= N; i++) {
    pathToOne[i] = pathToOne[i - 1] + 1; // 어떤 수에서 1을 뺀 건 하나의 움직임이니까
    if (i % 2 === 0)
      pathToOne[i] = Math.min(pathToOne[i], pathToOne[i / 2] + 1); // 그냥 1로 뺀 경로 보다 나눈 게 더 작을 수도 있음.
    if (i % 3 === 0)
      pathToOne[i] = Math.min(pathToOne[i], pathToOne[i / 3] + 1);
  }

  return 0;
}

console.log(solution(5, 12));
// 12 = 5 + 5 + (5 / 5) + (5 / 5)
// 12 = 55 / 5 + 5 / 5
// 12 = (55 + 5) / 5

console.log(solution(2, 11));
// 11 = 22 / 2

// 1 2 3 4 5 6 7 8 9
// 1 ~ 32000
// N / N = 1
// (N / N) + (N / N) = 2
// NN / N = 11

// N === 1
// 1 -> 1
// 2 -> 2
// 3 -> 3

// N === 2
// 1 -> 2
// 2 -> 1
// 3 -> 3
// 4 -> 2

// N === 3
// 1 -> 2
// 2 (3 - 1) -> 3
// 3 -> 1
// 4 (3 + 1) -> 3
// 5 (3 + 2) -> 4
// 6 (3 + 3) -> 2
// 7 (3 + 3 + 1) -> 4
// 8 (3*3 - 1) -> 4
// 9 (3*3) -> 2
// 10 (3*3 + 1) -> 4
// 11 (NN / N)-> 3
// 12 3*(3 + 3/3) -> 4
