const priorities = [2, 1, 3, 2]
const priorities2 = [1, 1, 9, 1, 1, 1]
const location = 2 // 1
const location2 = 0 // 5

// 일단 꺼내야 됨.
// 우선 순위 확인. (높은 게 우선순위 높은 것)
// - 우선순위 더 높은 거 있었으면 꺼낸 거 다시 맨 뒤로 보냄 ㅠ

// 2 | 1 3 2
// -> 1 3 2 2
// 1 | 3 2 2
// -> 3 2 2 1
// 3 | 2 2 1
// 2 | 2 1
// 2 | 1
// 1

function solution(priorities, location) {
  let priorityList = priorities.map((el, index) => ({ priority: el, location: index }))
  let process = []

  while (priorityList.length) {
    const shifted = priorityList.shift()

    if (priorityList.some(({ priority }) => priority > shifted.priority)) {
      priorityList.push(shifted)
    } else {
      process.push(shifted)
    }
  }

  return process.findIndex((el) => el.location === location) + 1
}

console.log(solution(priorities2, location2))
