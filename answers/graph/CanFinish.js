/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prereqList = [];
    const visited = [];

    for(let i=0; i < numCourses; i++){
        prereqList.push([]);
        visited.push(0);
    }

    prerequisites.forEach(prereq => {
        prereqList[prereq[0]].push(prereq[1]);
    });

    for(let i=0; i < numCourses; i++){
        const isCycle = dfs(i, prereqList, visited);
        if(isCycle) return false;
    }
    return true;
};

function dfs(node, prereqList, visited) {
    if(visited[node] === 1) return false;
    if(visited[node] === -1) return true;

    visited[node] = -1;

    for(let i=0; i < prereqList[node].length; i++){
        const isCycle = dfs(prereqList[node][i], prereqList, visited);
        if(isCycle) return true;
    }

    visited[node] = 1;

    return false;
}

module.exports = canFinish;