function solution(bridge_length, weight, truck_weights) {
  let sec = 0
  let trucks = truck_weights.length
  let passed = []
  let passing = []

  // 다리를 건넌 트럭이 원래 건너려고 했던 트럭 수와 같아지면 (다 건넜다면)
  // 트럭이 없어진 것만 세면 마지막 거를 계산 못함
  while (passed.length !== trucks) {
    // 다리에 올라가 있는 트럭의 무게를 다 더하고, 들어가야 할 트럭의 무게를 다 더해서
    const sum = passing.reduce((acc, cur) => (acc += cur), 0) + truck_weights[0]
    // 하중을 견딜 수 있는 무게이면
    if (sum <= weight) {
      // 지나가게 하고
      passing.push(truck_weights.shift())
    } else {
      // 아니면 0을 넣음 (다리 길이를 구현하기 위해)
      passing.push(0)
    }

    console.log(passing)

    // 다라 위의 트럭들이 나갈 때가 되면
    if (passing.length === bridge_length) {
      // 0이면 그냥 앞으로 땡겨주는 것이고
      if (passing[0] === 0) {
        passing.shift()
      } else {
        // 그게 아니면 지나갔다는 트럭에 넣어줌
        passed.push(passing.shift())
      }
    }

    sec++
  }

  console.log(passed)
  console.log(sec + 1)

  return sec + 1
}

// solution(2, 10, [7, 4, 5, 6])
solution(100, 100, [10])
// solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
