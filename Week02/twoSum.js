/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 新建一个map
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // 计算当前循环到的数字与目标值的差值
    let dValue = target - nums[i];

    // 如果map内包含该值，则证明找到了这两个数，按照题目要求返回存储的index和当前的index
    if (map.has(dValue)) {
      return [map.get(dValue), i]
    } else {
      // 如果没有，则在map内设置当前的数字，以及该数字的index值
      map.set(nums[i], i)
    }
  }
};
