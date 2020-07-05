/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  // 如果数组内只有一个元素，直接返回
  if (nums.length === 1) return nums[0]
  let left = 0, right = nums.length - 1

  // 如果最后一个元素大于第一个元素，则证明未旋转，是已排序数组，返回第一个数组
  if (nums[right] > nums[0]) return nums[0]

  while (right >= left) {
    let mid = left + Math.floor((right - left) / 2)

    if (nums[mid] > nums[mid + 1]) return nums[mid + 1]

    if (nums[mid - 1] > nums[mid]) return nums[mid]

    if (nums[mid] > nums[0]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
};
