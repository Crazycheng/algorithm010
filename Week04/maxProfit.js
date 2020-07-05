/**
 * @param {number[]} prices
 * @return {number}
 *
 * 复杂度分析：
 * 时间复杂度O(N)，N为prices的长度
 * 空间复杂度O(1)
 */
var maxProfit = function(prices) {
  // 初始最大利润为0
  let maxProfitValue = 0;

  // 从第二天开始遍历prices数组
  for (let i = 1; i < prices.length; i++) {
    // 如果后一天比前一天价格高，我们就直接卖出，获取利润
    if (prices[i] > prices[i - 1]) {
      maxProfitValue += prices[i] - prices[i - 1];
    }
  }

  // 输出最大利润
  return maxProfitValue;
};
