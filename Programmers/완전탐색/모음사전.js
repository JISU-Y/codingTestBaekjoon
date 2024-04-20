const word = "AAAAE" // 6

function generateCombinations() {
  const words = ["A", "E", "I", "O", "U"]

  let result = []

  function recurse(current, depth) {
    if (current.length === depth) {
      result.push(current)
      return
    }

    for (let i = 0; i < words.length; i++) {
      recurse(current + words[i], depth)
    }
  }

  for (let length = 1; length <= words.length; length++) {
    recurse("", length)
  }

  return result
}

function solution(word) {
  const wordList = generateCombinations()
  const sortedWordList = wordList.sort()

  return sortedWordList.indexOf(word) + 1
}

console.log(solution(word))
