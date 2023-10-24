function solution(office, k) {
  const answer = []

  for (let index = 0; index < office.length - 1; index++) {
    for (let jindex = 0; jindex < office.length - 1; jindex++) {
      let count = 0
      for (let i = index; i < index + k; i++) {
        for (let j = jindex; j < jindex + k; j++) {
          if (office[i][j]) {
            count++
            console.log(i, j)
          }
        }
      }
      answer.push(count)
      console.log("\n")
    }
  }
  console.log(Math.max(...answer))
  return Math.max(...answer)
}

solution(
  [
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
  ],
  2
)
