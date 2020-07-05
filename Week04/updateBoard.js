/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  // 获取列的总数
  const rows = board.length;
  // 获取行的总数
  const columns = board[0].length;

  dfs(click[0], click[1]);

  return board;

  function dfs (i, j) {
    // 如果不存在，则直接return
    if (!board[i][j]) return;
    // 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
    if (board[i][j] === 'M') {
      board[i][j] = 'X';
      return;
    }
    if (board[i][j] !== 'E') return;

    // 检查当前是否有地雷
    const mines = checkForMine(i, j)

    if (mines) {
      board[i][j] = mines.toString();
      return;
    } else {
      // If we haven't got mines, check another cells
      board[i][j] = 'B';
      for (let x = Math.max(i - 1, 0); x < Math.min(i + 2, rows); x++) {
        for (let y = Math.max(j - 1, 0); y < Math.min(j + 2, columns); y++) {
          dfs(x, y);
        }
      }
    }
  }

  function checkForMine(x, y) {
    let mines = 0;
    for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, rows); i++) {
      for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, columns); j++) {
        // 搜寻到地雷，增加数量
        if (board[i][j] === 'M') mines++;
      }
    }

    return mines;
  }
};
