const fs = require("fs");
const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");

const tests = parseInt(input[0]);
let k;
let n;
let array = [];

// test 개수에 따라 k와 n을 각각 array에 저장
for (let i = 1; i < tests * 2; i = i + 2) {
  k = parseInt(input[i]);
  n = parseInt(input[i + 1]);
  array.push([k, n]);
}

let floor = [];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  k = array[i][0];
  n = array[i][1];
  for (let j = 0; j <= k; j++) {
    // 0층부터 k층까지
    floor[j] = []; // floor[0] = [] => floor = [[], [], [], ... ]
    for (let q = 1; q <= n; q++) {
      // 1호부터 n호까지
      if (j === 0) {
        // 0층이면 1, 2, 3, 4 ... 고대로 넣음
        floor[j].push(q); // floor = [[1,2,3,4,5 ... ], [], [], ... ]
      } else {
        // 1층 이상이면 k-1층의 1 ~ n층을 다 더해서 sum에 담음
        sum += floor[j - 1][q - 1]; // floor = [[1,2,3,4,5, ...], [1,3,6,...], [], ... ]
        floor[j].push(sum);
        if (q === n) {
          // 다 더했으면 sum값 초기화
          sum = 0;
        }
      }
    }
  }
  console.log(floor[k][n - 1]);
}
