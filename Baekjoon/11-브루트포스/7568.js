const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().split("\n")
    : fs.readFileSync("input.txt").toString().split("\n");
const N = parseInt(input[0]);

let people = [];
for (let i = 1; i <= N; i++) {
  people.push([
    parseInt(input[i].split(" ")[0]),
    parseInt(input[i].split(" ")[1]),
  ]);
}

const compareMass = ([w, h], [wCompare, hCompare]) => {
  if (w > wCompare && h > hCompare) {
    return -1;
  } else if (w < wCompare && h < hCompare) {
    return 1;
  } else {
    // same
    return 0;
  }
};

let result = [];

for (let i = 0; i < N; i++) {
  let counter = 0;
  for (let j = 0; j < N; j++) {
    // 중복해서 다 검사하는 거다
    // 1,2 1,3 1,4 1,5 / 2,1 2,3, 2,4 2,5
    // 그래서 만약 자기보다 큰 수가 있으면 카운트를 하나씩 증가 시킨다
    // 그래야 내 등수를 매기니까 (내 앞에 몇명을 세면 내 등수가 나옴)
    if (compareMass(people[i], people[j]) === 1) {
      counter++;
    }
  }
  result.push(counter + 1);
}

console.log(result.join(" "));
