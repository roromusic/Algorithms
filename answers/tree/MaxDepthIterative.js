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

var maxDepthIterative = function(root) {
    const stack = [{node: root, depth: 1}];
    let total = 0;
    
    while(stack.length > 0){
        const obj = stack.pop();

        if(obj.node){
            total = Math.max(total, obj.depth);
            stack.push({node: obj.node.left, depth: obj.depth + 1});
            stack.push({node: obj.node.right, depth: obj.depth + 1});
        }
    }
    return total;
};