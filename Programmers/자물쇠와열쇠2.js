const k = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const l = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

// 0 1 0 (2,0) -> (0,0) / (1,0) -> (0,1) / (0,0) -> (0,2)
// 1 0 0 (2,1) -> (1,0) / (1,1) -> (1,1) / (0,1) -> (1,2)
// 1 0 0 (2,2) -> (2,0)

// true

// 일단 3에서 최대 20까지 가능한데, 키를 이리저리 돌리고, 이동하면서 시도해볼 수 있다.
// 그렇다면 많이 시도해도 20 20 20 60 * 60 정도의 경우의 수가 나올 것 같다 (이건 겹침을 고려하지 않음)
// 그러면 단순히 브루트 포스로 완전 탐색을 해도 괜찮을 것 같다.
// 어떻게 하냐
// 일단 키를 돌릴 수 있어야 함.
// 키는 90도 회전을 하니까 4방향의 키가 있어야 한다.
// 그리고 키 하나를 가지고 자물쇠를 키(N,N)<->(0,0) 부터 (0,1)... 키(0,0)<->(M,M)이 만날때까지 하나씩 다 시도해보면 된다.
// 그리고 시도했을 때 자물쇠와 키의 합이 모두 1이 나오면 열리게 된다. 그럼 true를 반환한다. (0도 안되고 2도 안됨)
// 시도해볼때 어떻게 하는 게 좋을지 보면
// 키의 N,N이 자물외쇠의 0,0 에 맞춰져야 하는데, 그렇게 하려면 자물쇠를 확장하는 게 편하다.
// 즉, 다음과 같은 느낌으로
// . . . . . . . . .
// . . . . . . . . .
// . . . 1 1 1 . . .
// . . . 1 1 0 . . .
// . . . 1 0 1 . . .
// . . . . . . . . .
// . . . . . . . . .
// 근데 주의할 점은 최대 확장은 자물쇠와 키가 한칸이라도 겹쳐야 한다.
// 따라서
// . . . . . . .
// . . . . . . .
// . . 1 1 1 . .
// . . 1 1 0 . .
// . . 1 0 1 . .
// . . . . . . .
// . . . . . . .
// 이렇게 되어야 한다. 계산해보면 키의 길이 3에서 겹치는 1개 빼면 2. 그 부분이 양쪽에 있으므로 2*2 + 원래 자물쇠 길이 3
// 자물쇠는 항상 가운데 있어야 한다. 그러면 자물쇠가 시작하는 보드의 좌표는 키의 길이 3 - 1 = 2 -> 2,2
// 그리고 키가 시작할 수 있는 곳은 0,0 부터 lockLen + keyLen - 1, lockLen + keyLen - 1 임.

function solution(key, lock) {
  let rotatedKey = key;
  let expandedLock = expandLock(key, lock);

  for (r = 0; r < 4; r++) {
    rotatedKey = rotateKey(rotatedKey);

    matchKeyAndLock(rotatedKey, lock, expandedLock, key.length - 1);
  }

  return false;
}

const rotateKey = (key) => {
  const keyLen = key.length;
  let rotated = Array.from(new Array(keyLen), () => new Array(keyLen).fill(0));
  for (i = 0; i < keyLen; i++) {
    for (j = 0; j < keyLen; j++) {
      rotated[i][j] = key[keyLen - 1 - j][i];
    }
  }

  return rotated;
};

const expandLock = (key, lock) => {
  const keyLen = key.length;
  const lockLen = lock.length;
  const expandedLockLen = (keyLen - 1) * 2 + lockLen;

  let newLock = Array.from(new Array(expandedLockLen), () =>
    new Array(expandedLockLen).fill(0),
  );

  for (i = 0; i < lockLen; i++) {
    for (j = 0; j < lockLen; j++) {
      newLock[i + keyLen - 1][j + keyLen - 1] = lock[i][j];
    }
  }

  return newLock;
};

const matchKeyAndLock = (key, lock, expandedLock, lockStart) => {
  const maxMove = lock.length + key.length - 1;
  let copiedLock = JSON.parse(JSON.stringify(expandedLock));
  for (i = 0; i < maxMove; i++) {
    for (j = 0; j < maxMove; j++) {
      for (x = 0; x < key.length; x++) {
        for (y = 0; y < key.length; y++) {
          copiedLock[i + y][j + x] += key[y][x];
        }
      }

      for (row = 0; row < lock.length; row++) {
        for (col = 0; col < lock.length; col++) {
          if (copiedLock[lockStart + row][lockStart + col] !== 1) {
            return false;
          }
        }
      }

      return true;
    }
  }
};

console.log(solution(k, l));
