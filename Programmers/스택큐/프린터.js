function solution(priorities, location) {
  const printed = []
  let order = location
  let count = 0 // 인쇄된 인쇄물 수

  // queue

  // 순차적으로 인쇄하되
  while (priorities[0]) {
    // 인쇄하기 전에 다른 배열에 나보다 우선순위가 높은 것이 있으면 뒤로 보내기
    if (priorities.filter((p) => p > priorities[0]).length) {
      priorities.push(priorities.shift())
    } else {
      // 그게 아니라면 인쇄된 것으로 처리
      printed.push(priorities.shift())
      // 인쇄되었기 때문에 인쇄물 카운트
      count++
      // 내 location이 0이 되면 내 차례 끝난 것이니까 count로 return
      if (order === 0) return count
    }

    // 맨앞에 있던 것이 뒤로 가거나 앞에 것이 사라질 때마다
    // location도 -1 되어야 함
    order -= 1
    // 근데 아직 차례가 아니면 맨 뒤로 보내지기 때문에 location도 바꿔줌
    if (order < 0) {
      order = priorities.length - 1
    }
  }

  console.log(printed)
  console.log(order + 1)

  return order + 1
}

// solution([2, 1, 3, 2], 2)

solution([1, 1, 9, 1, 1, 1], 0)

// 다른 사람 풀이
function otherSolution(priorities, location) {
  let arr = priorities.map((priority, index) => ({ index, priority }))
  // 일단 priority만 담고있는 배열을 원래 index랑 priority를 고정 시키기 위해 obj 배열로 만들어줌

  let printed = []

  while (arr.length > 0) {
    let firstEl = arr.shift() // 일단 꺼냄

    // some 조건을 만족하는 요소가 있는지 없는지 확인
    let hasHighPriority = arr.some((el) => el.priority > firstEl.priority)

    if (hasHighPriority) {
      // 뒤에 우선순위 높은 거 있으면 꺼낸 거 뒤로 갖다 붙임
      arr.push(firstEl)
    } else {
      // 뒤에 우선순위 높은 거 없으면 내가 우선순위 제일 높은 것이므로 인쇄 해버림
      printed.push(firstEl)
    }
  }

  // location과 index 일치하는 것 찾아주면 됨
  return printed.findIndex((printedEl) => printedEl.index === location) + 1
}
