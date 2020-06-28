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
var inorderTraversal = function(root) {
  const result = [];
  const stack = [];
  let node = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }

    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }

  return result;
};
