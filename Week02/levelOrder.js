/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  BFS(root, 0)

  return result;

  function BFS(node, depth) {
    if (!node) return;
    if (depth === result.length) {
      result.push([]);
    }
    result[depth].push(node.val);

    for (let child of node.children) {
      BFS(child, depth + 1)
    }
  }
};
