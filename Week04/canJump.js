/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // 右边可以达到的最远距离
  let rightMost = 0

  for (let i = 0; i < nums.length; i++) {
    if (rightMost < i) return false;
    rightMost = Math.max(nums[i] + i, rightMost)
  }

  return rightMost >= nums.length - 1
};
