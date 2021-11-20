const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin")
    : fs.readFileSync("input.txt");
input = parseInt(input);

let move = 0;
let path = "";
function hanoi(num, from, to, other) {
  if (num === 0) return; // 0이되면 재귀 끝내기
  hanoi(num - 1, from, other, to); // 옮기려고 하는 마지막 원반의 그 위에 원반을 0번째에서 목적지가 아닌 선반으로 옮김
  path += `${from} ${to}\n`;
  hanoi(num - 1, other, to, from); // 목적지가 아닌 선반에 원반을 모두 놓았으면 그것을 목적지에 놓는다
  move++;
  // 자 봐보자
  //                  3,1,3,2
  //       2,1,2,3                2,2,3,1
  // 1,1,3,2    1,3,2,1     1,2,1,3     1,1,3,2
  // num 2가 들어오면
  // 맨위 첫번째 원반을 1->3
  // num 1이 들어온 함수를 탔을 때는 1->3 중간 코드를 실행하고
  // 밑에는 num-1이기 때문에 실행안되고 return 되겠지
  // 그러고 다시 위로 올라가서 2,1,2,3 을 실행하겠지
  // 그러면 두번째 원반을 1,2로 옮기고
  // 밑에 num=1인 1,3,2,1을 옮기겠지 그러면 두번째 원반에 첫번째 원반이 올라간 형상이 되겠지
  // 이렇게 계속 하면 된다
}

hanoi(input, 1, 3, 2); // input개의 원반을 0째 선반에서 2번째 선반으로 옮김 / 다른 선반은 1번째 선반

console.log(move);
console.log(path);
