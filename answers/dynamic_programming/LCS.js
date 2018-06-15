/**
 * @param {string} x
 * @param {string} y
 * @return {number}
 */

var LCS = function(x, y) {
    const m = x.length;
    const n = y.length; 
    const table = [];

    //create table
    for(let i=0; i <= m; i++){
        table.push(new Array(n + 1));
    };

    //insert values
    for(let i=0; i <=m; i++){
        for(let j=0; j <= n; j++){
            if(i === 0 || j == 0) table[i][j] = 0;
            else if(x[i-1] === y[j-1]) table[i][j] = 1 + table[i-1][j-1];
            else table[i][j] = Math.max(table[i-1][j], table[i][j-1]);
        }
    }

    return table[m][n];
};

module.exports = LCS;