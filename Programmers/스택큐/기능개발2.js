// https://school.programmers.co.kr/learn/courses/30/lessons/42586

// 문제 설명
// 프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

// 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

// 제한 사항
// 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
// 작업 진도는 100 미만의 자연수입니다.
// 작업 속도는 100 이하의 자연수입니다.
// 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

// [93, 30, 55]	[1, 30, 5]	[2, 1]
// [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]

const p = [95, 90, 99, 99, 80, 99];
const s = [1, 1, 1, 1, 1, 1];

// 93퍼 완료되어 있던 첫번째 기능 -> 하루에 1퍼 오름 -> 7일 뒤 배포
// 30퍼 완료되어 있던 두번째 기능 -> 하루에 30퍼 오름 -> 60,90,120 100-30 70/30 = 2.x -> 3일 뒤 배포인데 앞에 첫번쨰 기능을 기다려야 해서 결국 7일 뒤 배포임.
// 55퍼 완료되어 있던 세번쨰 기능 -> 하루에 5퍼 오름 -> 60,65,...100 -> 45/5 = 9일 뒤 배포
// 7일 쨰 배포 2개, 9일 쨰 배포 1개
// 그래서 [2, 1]

// 뭔가 막혀서 같이 배포되어야 함..
// 그리고 먼저 들어간게 먼저 나오는거니까 FIFO => 큐임
// 첫번째 기능 얼마 걸릴지 계산해서 그 값을 queue에 넣음.
// 두번째 기능 계산해서 값을 queue에 넣음
// 세번째 기능 계산해서 값을 queue에 넣음
// 그러고 나서 queue에 있는 걸 하나씩 빼는데, 이 때 빼려는 요소의 값보다 그 다음 값들이 작으면 계속 뺀다.
// 빼고 있던 요소보다 커지는 값이 나오면 그건 다음 배포로 침.
// 그래서 뺴고 있던 기능들의 개수를 세서 배열에 저장해놓는다.

function solution(progress, speeds) {
  const work = [];
  const feature = [];

  for (i = 0; i < progress.length; i++) {
    const releaseDay = Math.ceil((100 - progress[i]) / speeds[i]);
    work.push(releaseDay);
  }

  let current = work[0];
  let featureCount = 0;
  while (work.length) {
    if (current < work[0]) {
      current = work[0];
      feature.push(featureCount);
      featureCount = 0;
    } else {
      work.shift();
      featureCount++;
      if (work.length === 0) {
        feature.push(featureCount);
      }
    }
  }

  return feature;
}

console.log(solution(p, s));

//

function solutionOther(progress, speeds) {
  const work = [];
  const feature = [];

  // 각 작업의 완료일 계산 - O(n)
  for (let i = 0; i < progress.length; i++) {
    const releaseDay = Math.ceil((100 - progress[i]) / speeds[i]);
    work.push(releaseDay);
  }

  let maxDay = work[0];
  let count = 1;

  // 포인터를 사용하여 순차 접근 - O(n)
  for (let i = 1; i < work.length; i++) {
    if (work[i] <= maxDay) {
      count++;
    } else {
      feature.push(count);
      maxDay = work[i];
      count = 1;
    }
  }

  feature.push(count);
  return feature;
}
