/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let result = [], map = new Map();
  let n = nums.length - 1;
  let m = 0;

  while (n >= 0) {
    map.set(nums[n], map.get(nums[n]) + 1 || 1);
    n--;
  }

  let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(sortedArray[i][0])
  }

  return result;
};
