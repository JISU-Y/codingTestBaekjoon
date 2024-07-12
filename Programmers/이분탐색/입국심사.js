// https://velog.io/@ansrjsdn/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-level3-%EC%9E%85%EA%B5%AD%EC%8B%AC%EC%82%AC

function solution(n, times) {
  times.sort((a, b) => a - b);

  let [left, right] = [times[0], n * times[times.length - 1]];
  // 최소값: 아직 모르지만 어쨌든 제일 빠르게 처리하는 사람들만 있어서 모든 사람이 다 같이 들어가는 그런 행복회로
  // 최대값: 제일 오래 처리하는 사람이 모든 사람을 처리헸을 경우

  let answer = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    times.forEach((value) => {
      count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지 / 총 더해보는 것 / 평균값에서 각 담당자가 처리하는 속도를 나누면 몇명 처리 할 수 있는지 알 수 있음.

      if (count >= n) {
        answer = Math.min(mid, answer); // 최솟값 갱신
        return;
      }
    });

    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

console.log(solution(6, [7, 10])); // 28
