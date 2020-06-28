/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = [];
  // 处理边界条件
  if (!root) return result;
  // 首先将根节点放入初始化的栈中
  const stack = [ root ];

  while (stack.length) {
    // 取出栈顶的节点
    let node = stack.pop();
    // 将根节点的数值放入数组的尾部
    result.push(node.val);
    // 将所有的右节点推入栈中
    if (node.right) {
      stack.push(node.right);
    }
    // 将所有的左节点推入栈中
    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
};
