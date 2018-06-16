/**
 * @param {Object} graph
 * @param {number | string} source
 * @return {number[] | string[]}
 */

function breadthFirstSearch(graph, source) {
    if(Object.keys(graph).length === 0) return [];

    const visited = new Set(source);
    const queue = [source];

    while(queue.length) {
        const node = queue.shift();
        const nodeNeighbors = graph[node];

        nodeNeighbors.forEach(neighbor => {
            if(!visited.has(neighbor)){
                queue.push(neighbor);
                visited.add(neighbor);
            }
        })
    }

    return Array.from(visited);
};

module.exports = breadthFirstSearch;