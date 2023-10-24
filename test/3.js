function solution(k, user_scores) {
  let answer = 0
  let topK = []

  user_scores.forEach((element) => {
    const [user, score] = element.split(" ")

    if (topK.length < k) {
      topK.push({ user, score })
      topK.sort((a, b) => b.score - a.score)
      answer++
    } else {
      for (let i = 0; i < topK.length; i++) {
        if (topK[i].score < score) {
          topK[i] = { user, score }
          answer++
          break
        }
      }
    }
  })

  return answer
}

solution(3, [
  "alex111 100", //
  "cheries2 200",
  "coco 150",
  "luna 100",
  "alex111 120",
  "coco 300",
  "cheries2 110",
])
