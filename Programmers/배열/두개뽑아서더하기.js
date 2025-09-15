// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// [2,1,3,4,1] -> [2,3,4,5,6,7]
// [5,0,2,7] -> [2,5,7,9,12]

const numbers = [2, 1, 3, 4, 1];

// 일단 모든 뽑을 수 있는 경우의 수를 보면 5개 중에 2개를 뽑는 것
// 그리고 순서는 상관이 없기 때문에 따라서 nC2 가 된다. 즉 5C2는 5*4 / 2*1 = 10가지
// 하지만 모두 더하면 같은 수인데도 다른 요소에 각각 저장이 되므로
// 중복을 제거해줄 수 있을 수 것 같다.

// i + (i+1), i + i+2, i + i+3 ...
// i+1 + i+2 ...
// 이런 식으로 중복해서 더하는 것이 가장 간단함.
function solution(nums) {
  let set = new Set();
  let i = 0,
    j = 0;
  for (i; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      console.log(i, j);
      set.add(nums[i] + nums[j]);
    }
  }
  return Array.from(set).sort((a, b) => a - b);
}

console.log(solution(numbers));

// 이런 식으로 넣고 있던 array에 이미 들어가있는 것을 탐자해서 넣어줄 수도 있다.
function solutionOther1(numbers) {
  var answer = [];
  numbers = numbers.sort();
  console.log(numbers);
  for (var i = 0; i < numbers.length; i++) {
    for (var k = i + 1; k < numbers.length; k++) {
      if (!answer.includes(numbers[i] + numbers[k])) {
        answer.push(numbers[i] + numbers[k]);
      }
    }
  }
  answer = answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}
