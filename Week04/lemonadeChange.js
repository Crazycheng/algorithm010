/**
 * @param {number[]} bills
 * @return {boolean}
 *
 * 下面解法的时间复杂度为O(N)，其中N为bills的长度
 * 空间复杂度为O(1)
 */
var lemonadeChange = function(bills) {
  // 最初，我们既没有 5 美元也没有 10 美元。
  let five = 0, ten = 0;
  // 循环bills数组
  for (let bill in bills) {
    if (bill === 5) { // 假设如果进账一张 5 美元，则加一张 5 美元的数量
      five++;
    } else if (bill === 10) { // 假设如果进账一张10 美元，此时我们需要找零一张 5 美元
      // 假如没有 5 美元，则无法给顾客正确找零，直接返回false
      if (!five) return false;
      // 如果有 5 美元，那么此时我们会加一张 10 美元数量，减一张 5 美元数量
      ten++;
      five--;
    } else { //如果顾客支付了 20 美元，我们必须找回 15 美元。
      // 此时如果手上同时有 10 美元和 5 美元，优先找出 5 美元和 10 美元
      if (five && ten) {
        // 各找出一张 5 美元和 10 美元
        ten--;
        five--;
      } else if (five >= 3) { // 如果我们有三张 5 美元
        // 找出三张 5 美元
        ten -= 3;
      } else {
        // 如果我们不满足上述两个条件，证明无法正确找零，返回false
        return false;
      }
    }
  }

  // 如果都满足条件，则证明可以正常找零
  return true
};
