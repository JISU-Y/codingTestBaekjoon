const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString().trim()
    : fs.readFileSync("input.txt").toString().trim();
const number = parseInt(input);

let sum = 0;
for (let i = 1; i < number; i++) {
  sum = i; // sum에다가 일단 자기 자신의 값을 넣어놓고
  const stringValue = i.toString(); // i를 string으로 분해 각각 더하려고

  for (let j = 0; j < stringValue.length; j++) {
    // 각각 자리수끼리 더함
    sum += parseInt(stringValue[j]);
  }

  if (sum === number) {
    console.log(i);
    return; // sum이 input과 같아지는 순간 i 출력하고 코드 종료
  }
}
console.log(0); // for문 끝까지 돌았는데도 생성자가 없으면 0 출력
