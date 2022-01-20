function solution(numbers) {
  const answer = []
  // 두개 뽑아서 더한 배열
  numbers.forEach((num, index, self) => {
    // 안에 있는 배열은 앞에 더한 요소들은 아예 제외시킨다.
    self.slice(index + 1).forEach((innerNum) => {
      // 더한 내용이 answer 안에 없을 때만 push 해줌
      if (!answer.includes(num + innerNum)) {
        answer.push(num + innerNum)
      }
    })
  })
  console.log(answer.sort((a, b) => a - b))
  // sorting
  return answer.sort((a, b) => a - b)
}

solution([2, 1, 3, 4, 1])
// solution([5,0,2,7])
