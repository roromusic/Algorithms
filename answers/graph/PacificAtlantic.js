/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var pacificAtlantic = function(matrix) {
    if(matrix.length === 0 || matrix[0].length === 0) return [];
    
    this.directions = [[0,1],[0,-1],[1,0],[-1,0]];
    const rows = matrix.length;
    const cols = matrix[0].length;
    const res = [];
    
    const p = new Array(rows);
    const a = new Array(rows);
    for (var i = 0; i < rows; i++) {
        p[i] = new Array(cols);
        a[i] = new Array(cols);
    }
    
    for(let i=0; i < rows; i++){
        dfs(p, matrix, i, 0);
        dfs(a, matrix, i, cols - 1);
    }
    
    for(let i=0; i < cols; i++){
        dfs(p, matrix, 0, i);
        dfs(a, matrix, rows - 1, i);
    }
    
    for(let i=0; i < rows; i++){
        for(let j=0; j < cols; j++){
            if(a[i][j] === true && p[i][j] == true){
                res.push([i,j]);
            }
        }
    }
    
    return res;
};

function dfs(visited, matrix, i, j){
    if(visited[i][j]) return;
    const rows = matrix.length;
    const cols = matrix[0].length;

    visited[i][j] = true;

    for(direction of directions) {
        const next_i = i + direction[0];
        const next_j = j + direction[1];

        if(next_i < 0 || next_j < 0 || next_i >= rows || next_j >= cols || matrix[next_i][next_j] < matrix[i][j]){
            continue;
        }
        dfs(visited, matrix, next_i, next_j);
    }
}

module.exports = pacificAtlantic;