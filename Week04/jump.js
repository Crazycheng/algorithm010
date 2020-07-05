/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let length = nums.length;

  if (!length) return -1;

  let dp = new Array(length).fill(length);
  dp[0] = 0;
  let end = 0;

  for (let i = 0; i < length; i++) {
    if (dp[i] >= dp[length - 1]) continue;

    for (let jump = end - i; jump <= nums[i] && jump + i < length; jump++) {
      dp[i + jump] = Math.min(dp[i + jump], dp[i] + 1);
      end = i + jump;
    }
  }
  return dp[length - 1];
};
