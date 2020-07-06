/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let ans;
  function dfs (root, p, q) {
    if (!root) return false;

    const leftSon = dfs(root.left, p, q);
    const rightSon = dfs(root.right, p, q);

    if ((leftSon && rightSon) || ((root.val === p.val || root.val === q.val) && (leftSon || rightSon))) {
      ans = root;
    }

    return leftSon || rightSon || (root.val === p.val || root.val === q.val);
  }

  dfs(root, p, q);
  return ans;
};
