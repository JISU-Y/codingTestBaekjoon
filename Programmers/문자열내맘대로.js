function solution(strings, n) {
  const answer = strings.sort((word1, word2) => {
    if (word1[n] > word2[n]) {
      return 1
    } else if (word1[n] < word2[n]) {
      return -1
    } else {
      for (let i = 0; word1[i] && word2[i]; i++) {
        console.log(word1[i], word2[i])
        if (word1[i] > word2[i]) {
          return 1
        } else if (word1[i] < word2[i]) {
          return -1
        }
      }
      return 0
    }
  })

  console.log(answer)

  return answer
}

// const [strings, n] = [["sun", "bed", "car"], 1]
const [strings, n] = [["abce", "abcd", "cdx"], 2]

solution(strings, n)
