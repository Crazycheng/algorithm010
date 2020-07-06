/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(!preorder.length) return null
  const node = new TreeNode(preorder[0])
  const index = inorder.indexOf(preorder[0])
  const inLeft = inorder.slice(0, index)
  const inRight = inorder.slice(index + 1)
  const preLeft = preorder.slice(1, index + 1)
  const preRight = preorder.slice(index + 1)
  node.left = buildTree(preLeft, inLeft)
  node.right = buildTree(preRight, inRight)
  return node
};
