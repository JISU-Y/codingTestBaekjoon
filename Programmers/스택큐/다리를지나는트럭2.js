const params = [2, 10, [7, 4, 5, 6]]
const params2 = [100, 100, [10]]

// 7 두 대 올라갈 수 있지만 4까지 올라가면 11로 10키로 초과, 그래서 대기
// 7 지나감
// 7 | 4 5 -> 4 5 둘다 동시에 올라갈 수 있음.
// 7 4 | 5 -> 4 먼저 지나감. 5는 지나는 중. 6은 못 올라감 (5, 6)
// 7 4 5 | 6
// 7 4 5 6

// | 07 | 4 5 6
//   __
// | 70 | 4 5 6
//   __
// 7 | 04 | 5 6
//     __
// 7 0 | 45 | 6
//       __
// 7 4 0 | 50 | 6
//         __
// 7 4 0 5 | 06 |
//           __
// 7 4 0 5 0 | 60 |
//             __
// 7 4 0 5 0 6 |   |
//              __

function solution(bridge_length, weight, truck_weights) {
  let count = 0

  let truckList = [...truck_weights]
  let passedList = []
  let passingList = []

  while (passedList.length !== truck_weights.length) {
    const totalWeightOnBridge = passingList.reduce((acc, cur) => (acc += cur), 0)

    if (totalWeightOnBridge + truckList[0] <= weight) {
      const truckOnMove = truckList.shift()

      passingList.push(truckOnMove)
    } else {
      passingList.push(0)
    }

    if (passingList.length === bridge_length) {
      const passingTruck = passingList.shift()

      if (passingTruck) {
        passedList.push(passingTruck)
      }
    }

    count++
  }

  return ++count
}

console.log(solution(...params))
