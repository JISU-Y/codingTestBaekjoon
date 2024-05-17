const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
]; // 9

// 0부터 시작 3ms
// 1부터 시작 인데 지금 돌고 있는 작업 있어서 3에서 시작 12에서 끝남
// (근데 1부터 12까지 세니까 11ms 걸린 거임)
// 12부터 시작 18까지
// 일단 요청이 들어온 순서대로 정렬 해야 함. (먼저 요청한건 빨리 요청하는 게 제일 빠름)

// 들어온 순서대로 가 아닌 가장 빨리 끝낼 수 있는 순으로 처리
// 결국은 빨리 끝낼 수 있는(다음 job이 기다리는 시간을 최소화하는) job 순으로 처리
// https://velog.io/@frontendohs/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%94%94%EC%8A%A4%ED%81%AC-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC-JS
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%94%94%EC%8A%A4%ED%81%AC-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC-JS

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)][1] > this.heap[index][1] // 걸리는 시간 기준으로 정렬
    ) {
      [this.heap[this.getParentIndex(index)], this.heap[index]] = [
        this.heap[index],
        this.heap[this.getParentIndex(index)],
      ];
      index = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.size() === 0) return undefined;
    if (this.size() === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return max;
  }

  bubbleDown(index) {
    while (true) {
      let largest = index;
      const leftIndex = this.getLeftChildIndex(index);
      const rightIndex = this.getRightChildIndex(index);

      if (
        leftIndex < this.size() &&
        this.heap[leftIndex][1] < this.heap[largest][1]
      ) {
        largest = leftIndex;
      }

      if (
        rightIndex < this.size() &&
        this.heap[rightIndex][1] < this.heap[largest][1]
      ) {
        largest = rightIndex;
      }

      if (largest !== index) {
        [this.heap[index], this.heap[largest]] = [
          this.heap[largest],
          this.heap[index],
        ];
        index = largest;
      } else {
        break;
      }
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

function solution(jobs) {
  const minHeap = new MinHeap();

  const jobLength = jobs.length;
  let sortedJobs = jobs.sort((a, b) => a[0] - b[0]); // 일단 요청 순으로 먼저 정렬
  console.log("🚀 ~ solution ~ sortedJobs:", sortedJobs);

  let totalTaskTime = 0; // 총 요청 태스크 시간
  let time = 0; // 초 세기
  let complete = 0; // 끝난 시간

  while (sortedJobs.length || minHeap.size()) {
    while (sortedJobs.length) {
      // 요청 순으로 일단 그 초(시간)에 들어온 요청이 있다면 처리한 것으로 치기 위해 shift 하고 그걸 minHeap에 넣음
      // minHeap에 넣어서 가장 기다림이 적게 끔 해야 하니까.
      if (time === sortedJobs[0][0]) {
        minHeap.insert(sortedJobs.shift());
      } else break;
    }

    if (minHeap.size() && time >= complete) {
      const runningTask = minHeap.remove();

      complete = runningTask[1] + time; // 지금 진행 중인 요청의 길이 + 지금까지 지나온 시간
      totalTaskTime += complete - runningTask[0]; // 실제로 요청을 처리한 건 대기한 시간은 빼줘야 하니까 요청 시간을 complete에서 빼준다.
    }

    time++;
  }

  return Math.floor(totalTaskTime / jobLength);
}

console.log(solution(jobs));
