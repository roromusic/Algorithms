/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root === null) return [];
    
    const queue = [root];
    let res = [];
    
    while(queue.length) {
        const node = queue.shift();
        res.push(node ? node.val : "null");
        
        if(node) {
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    while(res[res.length - 1] === "null") {
        res.pop();
    }
    
    return `[${res.toString()}]`;
};

module.exports = serialize;