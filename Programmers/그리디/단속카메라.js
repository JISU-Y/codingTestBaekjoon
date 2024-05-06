function solution(routes) {
  let carCount = routes.length

  let camera = 1

  const sortedRoutesByStart = routes.sort((a, b) => a[0] - b[0])

  let end = sortedRoutesByStart[0][1]

  for (let i = 0; i < carCount; i++) {
    // 구간이 끊겨있는 곳이 있다면 camera + 1
    if (end < sortedRoutesByStart[i][0]) {
      // 앞 차가 나가는 시점 < 현재 차가 들어오는 시점
      camera++

      end = sortedRoutesByStart[i][1] // 현재 차 나가는 시점 저장
    }

    // 현재 차가 앞 차 구간에 속할 때
    // 짧은 거 기준으로 해야 구간에 속한 것도 카메라 세는 것. +
    // 최소한 카메라니까 구간 짧은 것 기준으로 해야 그 다음 차와 겹치는지 끊겨있는지 볼 ㅜㅅ 있음.
    if (end > sortedRoutesByStart[i][1]) {
      end = sortedRoutesByStart[i][1]
    }
  }

  return camera
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
)
