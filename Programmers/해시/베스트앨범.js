const genres = ["classic", "pop", "classic", "classic", "pop"]
const plays = [500, 600, 150, 800, 2500]

// genres 배열에서 가장 많이 나온 요소가 먼저
// 그 다음 plays에서 같은 순번의 genre를 모두 더함
// 그 다음은 그냥 genres 배열에 나온 순서

// 일단 genre 의 모든 play 수 구해야 함.
// 이후 재생수 가장 높은 genre부터 plays 수 높은 대로 push. (2개까지만 / 하나면 하나만)
// 이후 genre 다 합침.

function solution(genres, plays) {
  let answer = []
  let songArr = []
  let songObj = {}

  for (let i = 0; i < genres.length; i++) {
    songObj[genres[i]] = songObj[genres[i]] ? songObj[genres[i]] + plays[i] : plays[i]
    songArr.push({ id: i, genre: genres[i], numOfPlay: plays[i] })
  }

  const sortedSongArr = Object.entries(songObj)
    .sort(([aGenres, aPlays], [bGenres, bPlays]) => bPlays - aPlays)
    .map(([genre, _]) => genre)

  sortedSongArr.forEach((genre) => {
    songArr
      .filter((song) => song.genre === genre)
      .sort((a, b) => b.numOfPlay - a.numOfPlay)
      .slice(0, 2)
      .map(({ id }) => {
        answer.push(id)
      })
  })

  return answer
}

console.log(solution(genres, plays))
