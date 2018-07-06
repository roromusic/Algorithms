/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return [];
    
    const result = [];
    const queue = [root];
    
    while(queue.length) {
        const levelNodes = [];
        const levelSize = queue.length;
        
        for(let i=0; i < levelSize; i++){
            const node = queue.shift();
            levelNodes.push(node.val);
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
        result.push(levelNodes);
    }
    
    return result;
};