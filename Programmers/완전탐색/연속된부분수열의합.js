// https://school.programmers.co.kr/learn/courses/30/lessons/178870?language=javascript

// [1, 2, 3, 4, 5]	7	[2, 3]
// [1, 1, 1, 2, 3, 4, 5]	5	[6, 6]
// [2, 2, 2, 2, 2]	6	[0, 2]

// two sum 문제
// 타겟이 되는 수를 충족하는 연속된 배열 요소를 출력.
// 배열의 요소가 1,000,000 까지 갈 수 있다는 것을 고려해야 한다.
// 일단 가장 쉬운 방법(먼저 떠오른 방법)으로 풀어보면
// 모든 경우의 수를 다 더해볼 수 있을 듯 하다.
// 0 ~ 0, 0 ~ 1, 0 ~ 2, 0 ~ 3, ... 3 ~ 4, 4, 4
//

const sequence = [1, 1, 1, 2, 3, 4, 5]; // 0,0 -> 1, 0,1 -> 3, ... 4,4 -> 10 이렇게 쭉 한번만 돌면 O1으로 가져올 수 있지 않나?
const k = 5;

function solution1(sequence, k) {
  let answer = [];
  let start = 0,
    end = 0;

  for (let i = 0; i < sequence.length; i++) {
    // j도 i와 같은 곳에서 시작할 수 있는 이유는 요소의 값이 target과 같을 때도 가능하기 때문.
    for (let j = i; j < sequence.length; j++) {
      // 여기서 구간에 있는 요소들 모두 더해서 target과 같은지 확인
      const part = sequence.slice(i, j + 1);
      console.log("🚀 ~ solution ~ part:", part);
      const sumOfPart = part.reduce((acc, cur) => acc + cur, 0);
      if (sumOfPart === k) {
        // 그 때의 i,j를 start, end에 저장
        [start, end] = [i, j];
      }
    }
  }

  // 근데 이렇게 하면 문제
  // for 문 두번 -> On^2 안에 slice/reduce On 즉 On^3 이 됨. 일단 효율적이지 않아 보임
  // 그리고 조건을 만족하는 부분 수열 중 길이가 짧은 것이 답이 되어야 함. -> 답을 저장해야 함
  // -> 근데 생각해보니 오름차순으로 되어 있기 때문에 그냥 모든 조합을 다 돌다 보면 가장 뒤늦게 발견되는 부분 수열이 수가 크니 가장 짧아지는 것 같음.
  // 근데 하지만 길이가 같은 경우 앞에 거를 갖다 써야 하니까.. 저장은 필요할 것 같다는 생각이 듦
  // 일단 개선해보고 추가적으로 생각해봐야 할 듯함.
  return [start, end];
}

// 근데 이것도 시간 초과임...
// 여전히 On3 기는 함.
function solution2(sequence, k) {
  let answer = new Map();

  for (let i = 0; i < sequence.length; i++) {
    for (let j = i; j < sequence.length; j++) {
      const part = sequence.slice(i, j + 1);
      const sumOfPart = part.reduce((acc, cur) => acc + cur, 0);
      if (sumOfPart === k) {
        answer.set([i, j], sumOfPart);
      }
    }
  }

  // 나왔음
  console.log("🚀 ~ solution ~ answer:", answer);

  // 여기서 가장 적게 차이나면서 가장 먼저 들어간 구간을 취하면 됨.

  const answerList = Array.from(answer.keys());

  // 가장 적게 차이나는 것을 sorting 어차피 넣은 순서대로니까 앞 순서에 있는 것 고르면 되니 sorting해도 될 것 같음.
  const sorted = answerList.sort((a, b) => {
    const gapB = b[1] - b[0];
    const gapA = a[1] - a[0];
    return gapA - gapB;
  });

  return sorted[0];
}

// 아 투포인터를 쓸 수 있겠다.
// 왜냐면 오름차순으로 되어 있기 때문에!
// 단순 for문을 투포인토를 사용해서
// 근데 1,000,000 이면 얼마나 많은거고 시간 복잡도가 어느 정도 나와야 할까 -> 1,000,000 이면 사실 상 최대가 O(n) 이라고 보면 됨..
function solution3(sequence, k) {
  let answer = new Map();
  const lastIndex = sequence.length - 1;
  let start = 0,
    end = 0;

  while (!(start > lastIndex || end > lastIndex)) {
    const part = sequence.slice(start, end + 1);
    const sumOfPart = part.reduce((acc, cur) => acc + cur, 0);
    if (sumOfPart < k) {
      end++;
    } else if (sumOfPart > k) {
      start++;
    }
    if (sumOfPart === k) {
      answer.set([start, end], sumOfPart);
      start++;
    }
  }

  // 여기서 가장 적게 차이나면서 가장 먼저 들어간 구간을 취하면 됨.

  const answerList = Array.from(answer.keys());

  // 가장 적게 차이나는 것을 sorting 어차피 넣은 순서대로니까 앞 순서에 있는 것 고르면 되니 sorting해도 될 것 같음.
  const sorted = answerList.sort((a, b) => {
    const gapB = b[1] - b[0];
    const gapA = a[1] - a[0];
    return gapA - gapB;
  });

  return sorted[0];
}

function solution(sequence, k) {
  let start = 0,
    end = 0;
  let sum = sequence[0]; // 중요!!! sum을 for문 돌면서 하지 말고 더하고 빼가면서 관리해야 함.
  let answer = [0, sequence.length]; // 최소 길이도 for문 한번에 돌면서 같이 찾아나가기

  while (end < sequence.length) {
    if (sum < k) {
      end++;
      // pointer 움직였으니까 방금 늘어난 요소 더해줌
      sum += sequence[end];
    } else if (sum > k) {
      // start pointer 움직였으니까 방금 줄어든 요소 빼줌
      sum -= sequence[start];
      start++;
    } else if (sum === k) {
      // 더 짧은 구간
      if (end - start < answer[1] - answer[0]) {
        answer = [start, end];
      }
      sum -= sequence[start];
      start++; // 찾아도 계속 가야하니까
    }
  }

  return answer;
}

console.log(solution(sequence, k));
