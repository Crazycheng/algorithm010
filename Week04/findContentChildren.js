/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  // 处理边界值情况
  if (!g || !g.length || !s || !s.length) return 0;

  // 按照从小到大排列数组内元素
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  // 初始化指针
  let gi = 0, sj = 0;

  // 遍历直到达到某一数组数量的最大值为止
  while (gi < g.length && sj < s.length) {
    // 如果饼干可以满足孩子的胃口，则将孩子胃口数组的指针向前移动一位
    if (s[sj] >= g[gi]) {
      gi++;
    }

    // 饼干列表的指针同时也向前移动一位
    sj++;
  }

  return gi;
};
