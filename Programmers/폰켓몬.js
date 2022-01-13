function solution(nums) {
  const species = new Set(nums)

  return species.size > nums.length / 2 ? nums.length / 2 : species.size
}

const nums = [3, 3, 3, 2, 2, 4]

solution(nums)
