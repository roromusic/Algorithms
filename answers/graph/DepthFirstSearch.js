/**
 * @param {Object} graph
 * @param {number | string} source
 * @return {number[] | string[]}
 */

function depthFirstSearch(graph, source) {
    if(Object.keys(graph).length === 0) return [];

    const stack = [source];
    const visited = new Set();

    while(stack.length > 0){
        const node = stack.pop();

        if(!visited.has(node)){
            visited.add(node);

            const neighbors = graph[node];

            for(let i=neighbors.length-1; i >= 0; i--){
                const neighbor = neighbors[i];
                if(!visited.has(neighbor)) stack.push(neighbor);
            }
        }
        
    }

    return Array.from(visited);
};

module.exports = depthFirstSearch;