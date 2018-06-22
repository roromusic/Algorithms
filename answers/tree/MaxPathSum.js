/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    const [max] = findMax(root);
    
    return max;
};

function findMax(root){
    if(root === null) return [-Infinity, -Infinity];
    
    const [leftMaxTree, leftMaxPath] = findMax(root.left);
    const [rightMaxTree, rightMaxPath] = findMax(root.right);
    
    const maxPath = Math.max(root.val, (root.val + leftMaxPath), (root.val + rightMaxPath));
    const maxTree = Math.max(leftMaxTree, rightMaxTree, maxPath, (root.val + leftMaxPath + rightMaxPath));
    
    return [maxTree, maxPath];
    
}