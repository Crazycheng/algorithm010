/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // 计算岛屿数量
  let count = 0;

  // 遍历二维数组
  // 遍历列
  for (let row = 0; row < grid.length; row++) {
    // 遍历行
    for (let column = 0; column < grid[row].length; column++) {
      // 如果当前坐标为'1'，则证明我们发现了一个岛屿
      if (grid[row][column] === '1') {
        // 增加一个岛屿的计数
        count++;
        // 搜寻岛屿的陆地
        dfs(grid, row, column);
      }
    }
  }

  // 返回岛屿数量
  return count;

  function dfs (grid, row, column) {
    // 如果列的坐标小于0 或者 行的坐标小于0 或者 列的坐标数字大于列的长度 或者 行的坐标index大于行的长度 或者 当前坐标是0 则终止递归
    if (row < 0 || column < 0 || row >= grid.length || column >= grid[row].length || grid[row][column] === '0') return;

    // 当前已经遍历过的网格标记为'0'
    grid[row][column] = '0';

    // 向上
    dfs(grid, row + 1, column);
    // 向下
    dfs(grid, row - 1, column);
    // 向右
    dfs(grid, row, column + 1);
    // 向左
    dfs(grid, row, column - 1);
  }
};
