/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data.length === 0) return null;
    
    const vals = data.slice(1, data.length - 1).split(",");
    const head = new TreeNode(Number(vals.shift()));
    const queue = [head];
    
    while(queue.length) {
        const node = queue.shift();
        const left = vals.shift();
        const right = vals.shift();
        
        if(left && left !== "null") {
            const leftNode = new TreeNode(Number(left));
            node.left = leftNode;
            queue.push(leftNode);
        }
        if(right && right !== "null") {
            const rightNode = new TreeNode(Number(right));
            node.right = rightNode;
            queue.push(rightNode);
        }
    }
    
    return head;
};

module.exports = deserialize;