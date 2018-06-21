/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const queue = [root];

    while(queue.length){
        const node = queue.shift();
        if(!node) continue;
        const l = node.left;
        node.left = node.right;
        node.right = l;
        
        queue.push(node.left);        
        queue.push(node.right);
    }
    
    return root;
};