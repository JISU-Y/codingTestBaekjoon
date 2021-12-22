function solution(arr) {
  let answer

  answer = arr.filter((el, idx, array) => el !== array[idx + 1])

  console.log(answer)
  return answer
}

// const arr = [1, 1, 3, 3, 0, 1, 1]
const arr = [4, 4, 4, 3, 3]

solution(arr)

// function solution(arr) {
//     let answer

//     answer = arr.join("").toString()

//     for (let i = 0; i < 10; i++) {
//       const regex = new RegExp(`(${i}{2,})`, "gi")
//       answer = answer.replace(regex, i)
//     }

//     answer = answer.split("").map((el) => Number(el))
//     console.log(answer)
//     return answer
//   }
