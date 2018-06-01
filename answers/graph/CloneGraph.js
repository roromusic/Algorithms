function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
}

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */

const cloneDFS = (node, map) => {
    if(!node) return null;

    if(map.has(node)) return map.get(node);
    const nodeClone = new UndirectedGraphNode(node.label);
    map.set(node, nodeClone);

    for(let i=0; i < node.neighbors.length; i++){
        const neighbor = node.neighbors[i];

        nodeClone.neighbors.push(cloneDFS(neighbor, map));
    }

    return nodeClone;
}

const cloneGraph = function(graph) {
    const map = new Map();
    return cloneDFS(graph, map);
};

module.exports = cloneGraph;