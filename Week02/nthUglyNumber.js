/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  // 排除边缘条件
  if (!n) return 0;

  let i2 = 0, i3 = 0, i5 = 0;
  const nums = [1];

  while (!nums[n - 1]) {
    // 下面我们做了以下的操作
    // 每一步的循环计算所有丑数
    const tmp2 = nums[i2] * 2;
    const tmp3 = nums[i3] * 3;
    const tmp5 = nums[i5] * 5;

    // 在 nums[i2] * 2，nums[i3] * 3 和 nums[i5] * 5 选出最小的数字添加到数组 nums 中。
    const next = Math.min(tmp2, tmp3, tmp5);
    nums.push(next);

    // 将该数字对应的因子指针向前移动一步。
    if (next === tmp2) i2++;
    if (next === tmp3) i3++;
    if (next === tmp5) i5++;
  }

  return nums[n - 1];
};
