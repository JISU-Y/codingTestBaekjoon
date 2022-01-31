function solution(citations) {
  let answer = 0

  const cits = citations.sort((a, b) => b - a)

  // citNum = 인용 횟수
  for (let citNum = 0; citNum <= citations.length; citNum++) {
    // 배열 요소마다의 인용 횟수가 지금 인용 횟수보다 많을 때
    if (citNum < cits[citNum]) {
      answer++ // h factor 증가
    }
  }

  return answer
}

solution([3, 0, 6, 1, 5])
