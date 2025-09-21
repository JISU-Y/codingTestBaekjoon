// https://school.programmers.co.kr/learn/courses/30/lessons/60059?language=javascript
// 문제 설명
// 고고학자인 "튜브"는 고대 유적지에서 보물과 유적이 가득할 것으로 추정되는 비밀의 문을 발견하였습니다. 그런데 문을 열려고 살펴보니 특이한 형태의 자물쇠로 잠겨 있었고 문 앞에는 특이한 형태의 열쇠와 함께 자물쇠를 푸는 방법에 대해 다음과 같이 설명해 주는 종이가 발견되었습니다.

// 잠겨있는 자물쇠는 격자 한 칸의 크기가 1 x 1인 N x N 크기의 정사각 격자 형태이고 특이한 모양의 열쇠는 M x M 크기인 정사각 격자 형태로 되어 있습니다.

// 자물쇠에는 홈이 파여 있고 열쇠 또한 홈과 돌기 부분이 있습니다. 열쇠는 회전과 이동이 가능하며 열쇠의 돌기 부분을 자물쇠의 홈 부분에 딱 맞게 채우면 자물쇠가 열리게 되는 구조입니다. 자물쇠 영역을 벗어난 부분에 있는 열쇠의 홈과 돌기는 자물쇠를 여는 데 영향을 주지 않지만, 자물쇠 영역 내에서는 열쇠의 돌기 부분과 자물쇠의 홈 부분이 정확히 일치해야 하며 열쇠의 돌기와 자물쇠의 돌기가 만나서는 안됩니다. 또한 자물쇠의 모든 홈을 채워 비어있는 곳이 없어야 자물쇠를 열 수 있습니다.

// 열쇠를 나타내는 2차원 배열 key와 자물쇠를 나타내는 2차원 배열 lock이 매개변수로 주어질 때, 열쇠로 자물쇠를 열수 있으면 true를, 열 수 없으면 false를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// key는 M x M(3 ≤ M ≤ 20, M은 자연수)크기 2차원 배열입니다.
// lock은 N x N(3 ≤ N ≤ 20, N은 자연수)크기 2차원 배열입니다.
// M은 항상 N 이하입니다.
// key와 lock의 원소는 0 또는 1로 이루어져 있습니다.
// 0은 홈 부분, 1은 돌기 부분을 나타냅니다.

// 서로 맞대었을 때 서로의 홈과 돌기가 딱 맞아 떨어져야 함 (빠지는 곳 없이)
// 90도로 돌려서도 가능함
// 완전히 맞대는 건 아니고 움직일 수도 있음 (벗어나도 됨)

const inputKey = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const inputLock = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const inputLock2 = [
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [1, 0, 1, 1],
  [1, 0, 1, 1],
];
// true
// inputKey를 오른쪽 방향으로 회전해서 아래로 한칸 내리고 오른쪽으로 한칸 이동하면 가능
// [0, 1, 0]
// [1, 0, 0]
// [1, 0, 0]

// [-, -, -, -]
// [-, 0, 1, 0]
// [-, 1, 0, 0]
// [-, 1, 0, 0]

// lock의 0을 충족할 수 있는 key의 1을 찾자.
// key 배열에 마킹을 해둘까? 아니면 배열을 따로 만들어서 lock의 0 위치를 기억해보자.
// lock 위치 (1, 2), (2, 1)
// 근데 위치보다도 0의 위치 관계가 더 중요한거 아닌가?
// 일단 key를 만들 수 있는 경우의 수 부터 만들어보자.
//   [0, 0, 0],
//   [1, 0, 0],
//   [0, 1, 1],
// 이러고 시작점을 0,0으로 할지, 0,1로 할지 0, 2로 할지... 3,3(lock의 M,M)까지 시도해볼 수 있음.

//   [0, 0, 0],
//   [1, 0, 0],
//   [0, 1, 1],

//   [0, 1, 0], // 2,0 / 1,0 / 0,0 -> 0,0 / 0,1 / 0,2
//   [1, 0, 0], // 2,1 / 1,1 / 0,1 -> 1,0 / 1,1 / 1,2
//   [1, 0, 0],

//   [1, 1, 0],
//   [0, 0, 1],
//   [0, 0, 0],

//   [0, 0, 1],
//   [0, 0, 1],
//   [0, 1, 0],

//   [0, 0, 1],
//   [0, 0, 1],
//   [0, 1, 0],

// 두 배열의 동일한 요소 값을 더했을 때 딱 1이 나와야 함. 2가 나오면 돌기끼리 충돌한거임. 0이면 홈끼리 만난거임

function solution(key, lock) {
  let result = false;

  let rotatedKey = key;
  // 키를 회전 4면을 회전하기 위해 4번 돌림
  for (k = 0; k < 4; k++) {
    rotatedKey = rotateKey(rotatedKey);
    console.log("🚀 ~ solution ~ rotatedKey:", rotatedKey);

    for (n = 0; n < lock.length; n++) {
      for (m = 0; m < lock.length; m++) {
        result = matchKeyAndLock(rotatedKey, lock, n, m);
      }
    }
  }

  return result;
}

const matchKeyAndLock = (key, lock, xOffset = 0, yOffset = 0) => {
  for (i = 0; i < key.length; i++) {
    for (j = 0; j < lock.length; j++) {
      let sum = 0;
      // 이 부분 구현을 못하겠음.
      if (sum !== 1) return false;
    }
  }
};

const rotateKey = (key) => {
  const newKey = Array.from(new Array(key.length), () =>
    new Array(key.length).fill(0),
  ); // 이중 배열 초기화

  for (i = 0; i < key.length; i++) {
    for (j = 0; j < key.length; j++) {
      const keyLength = key.length - 1;
      newKey[i][j] = key[keyLength - j][i];
    }
  }

  return newKey;
};

console.log(solution(inputKey, inputLock));

// 못풀었다.
// 하지만 답을 보니 어느 정도 접근법은 맞는 것으로 보임
// 내 접근법은 어차피 3~20행이고, rotate한다고 해도 어차피 4방향 밖에 없고, 하나씩 움직이면서 검사한다고 하면 최대 20x20 400 개 정도이니
// 하나씩 다 탐색해도 상관없겠다라고 판단했다.
// 물론 접근법은 맞았지만 구현에서 좌절했다.
// 키를 돌리는 것은 구현 잘했고, 답 여부를 체크하는 것 까지도 했다.
// 하지만 키를 이동시키면서 탐색하는 부분에서 게슈탈트 붕괴가 와버렸다...

// 이분이 가장 나와 비슷하게 풀었다.
//키를 회전하는 함수
const rotationKey = (key) => {
  const len = key.length;
  const ret = Array.from(Array(len), () => Array(len).fill(null));
  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < len; ++j) {
      ret[i][j] = key[len - j - 1][i];
    }
  }
  return ret;
};
//답인지 검사하는 함수
const isAnswer = (newLock, len) => {
  for (let i = len; i < len * 2; i++) {
    for (let j = len; j < len * 2; j++) {
      if (newLock[i][j] !== 1) {
        return false;
      }
    }
  }
  return true;
};
const solutionOther = (key, lock) => {
  let answer = true;
  const len = lock.length;
  const arr = Array.from(Array(len * 3), () => Array(len * 3).fill(null));

  for (let i = len; i < len * 2; i++) {
    for (let j = len; j < len * 2; j++) {
      arr[i][j] = lock[i - len][j - len];
    }
  }
  //키를 회전 시키면서 탐색
  for (let i = 0; i < 4; i++) {
    key = rotationKey(key, i);
    //키를 이동시키면서 탐색
    for (let j = 0; j <= arr.length - key.length; j++) {
      for (let k = 0; k <= arr[0].length - key[0].length; k++) {
        const newLock = arr.map(function (arr) {
          return arr.slice();
        });
        for (let m = 0; m < key.length; m++) {
          for (let n = 0; n < key.length; n++) {
            if (newLock[j + m][k + n] === 1 && key[m][n] === 1) {
              //키가 둘다 1이면 2로바꿈 -> 답이 될수 없음
              newLock[j + m][k + n] = 2;
            } else if (newLock[j + m][k + n] === 1 && key[m][n] === 0) {
              newLock[j + m][k + n] = 1;
            } else {
              newLock[j + m][k + n] = key[m][n];
            }
          }
        }
        if (isAnswer(newLock, len)) {
          return true;
        }
      }
    }
  }
  return false;
};

// key는 영역에서 벗어날 수 있으므로 lock을 확장시켜서 계산하는 방식을 사용한다.
// 즉,
// key 3x3, lock 3x3인 경우
// expandedSize = 3 + (3-1)*2 = 7
// lockStartPos = 3-1 = 2

// 확장된 7x7 배열:
//   0 1 2 3 4 5 6
// 0 [. . . . . . .]
// 1 [. . . . . . .]
// 2 [. . L L L . .] ← 자물쇠 고정 위치 (row 2)
// 3 [. . L L L . .]
// 4 [. . L L L . .]
// 5 [. . . . . . .]
// 6 [. . . . . . .]

// 확장된 보드를 만들어내는 생각을 하는 것이 관건이라고 느껴짐.
// 나는 그냥 냅다 lock 실제 배열에다가 비교하려고 했음. 사실 그렇게 하면 진짜 계산힘들어 질 수 있음.
// key의 2,2가 lock의 0,0 부터 시작하는거니까..
// 아예 확장된 보드를 만들어서 0부터 오른쪽 lock에 하나 걸칠떄 까지 움직이는게 좋음.
// 그리고 알기 쉽게 유틸 함수로 계속 분리하는 연습을 해야할 것 같음.
// 90도 회전도 이참에 외우는 것도 나쁘지 않을듯. 은근 많이 쓰임.
// 깊은 복사에 대해서도 알고 있어야 함.
// 그리고 이게 라이브 코딩으로 나올 것 같지는 않음 솔직히

function solutionOther2(key, lock) {
  const keyLen = key.length;
  const lockLen = lock.length;

  // 확장된 배열 크기: 자물쇠 + 양쪽 여유공간
  const expandedSize = lockLen + (keyLen - 1) * 2; // lockLen와 key와 lock이 최소한으로 겹치는 1개를 뺀 keyLen. 근데 양쪽에 있으니까 * 2

  // 확장된 배열 생성 (expandedSize X expandedSize)
  const expandedLock = Array.from(new Array(expandedSize), () =>
    new Array(expandedSize).fill(0),
  );

  // 자물쇠를 중앙에 고정 배치
  const lockStartPos = keyLen - 1; // 자물쇠 시작 위치 (고정) - 자물쇠는 항상 가운데에 위치함
  for (let i = 0; i < lockLen; i++) {
    for (let j = 0; j < lockLen; j++) {
      expandedLock[lockStartPos + i][lockStartPos + j] = lock[i][j]; // 실제 자물쇠를 확장된 보드에 심는다.
    }
  }

  let rotatedKey = key;

  // 4방향 회전 시도
  for (let rotation = 0; rotation < 4; rotation++) {
    // 열쇠를 모든 가능한 위치에서 시도
    // 끝 index는 expanded size 7에서 keyLen(3)을 빼야 실제 lock의 마지막에 걸칠 수 있어서이다.
    // 둘중 하나다 expandedSize에서 keyLen을 빼든, lockLen에서 keyLen-1을 더하든.
    for (let keyRow = 0; keyRow <= expandedSize - keyLen; keyRow++) {
      for (let keyCol = 0; keyCol <= expandedSize - keyLen; keyCol++) {
        if (
          canUnlock(
            rotatedKey,
            expandedLock,
            keyRow,
            keyCol,
            lockStartPos,
            lockLen,
          )
        ) {
          return true;
        }
      }
    }
    rotatedKey = rotateKey(rotatedKey);
  }

  return false;
}

const canUnlock = (
  key,
  expandedLock,
  keyRow,
  keyCol,
  lockStartPos,
  lockLen,
) => {
  // 확장된 자물쇠의 복사본 생성 (깊은 복사 필요)
  const testLock = expandedLock.map((row) => [...row]); // 아니면 JSON.parse(JSON.stringify(board));

  // 지정된 위치에 열쇠 적용
  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      testLock[keyRow + i][keyCol + j] += key[i][j]; // 자물쇠를 맞춰보기 위한 큰 보드에 현재 key 위치에 들어갈 key를 심는다.
    }
  }

  // 원래 자물쇠 영역(고정 위치)이 모두 1인지 확인
  for (let i = 0; i < lockLen; i++) {
    for (let j = 0; j < lockLen; j++) {
      // lockStartPos는 고정임. (가운데에 항상 고정)
      if (testLock[lockStartPos + i][lockStartPos + j] !== 1) {
        return false;
      }
    }
  }

  return true;
};

const rotateKeyOther2 = (key) => {
  const keyLen = key.length;
  const rotated = Array.from(new Array(keyLen), () =>
    new Array(keyLen).fill(0),
  );

  // 시계방향 90도 회전: (i,j) -> (j, keyLen-1-i)
  for (let i = 0; i < keyLen; i++) {
    for (let j = 0; j < keyLen; j++) {
      rotated[j][keyLen - 1 - i] = key[i][j];
    }
  }

  return rotated;
};
