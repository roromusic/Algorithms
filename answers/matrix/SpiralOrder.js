/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return matrix;
    
    let rowBegin = 0;
    let columnBegin = 0;
    let rowEnd = matrix.length - 1;
    let columnEnd = matrix[0].length - 1;
    const answer = [];
    
    while(rowBegin <= rowEnd && columnBegin <= columnEnd) {
        
        for(let i=columnBegin; i <= columnEnd; i++){
            answer.push(matrix[rowBegin][i]);
        }
        rowBegin++;

        for(let i=rowBegin; i <= rowEnd; i++){
            answer.push(matrix[i][columnEnd]);
        }
        columnEnd--;
        
        if(rowBegin <= rowEnd) {
            for(let i=columnEnd; i >= columnBegin; i--){
                answer.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;
        
        if(columnBegin <= columnEnd) {
            for(let i=rowEnd; i >= rowBegin; i--){
                answer.push(matrix[i][columnBegin]);
            }
        }
        columnBegin++;

    }
    
    return answer;
};

module.exports = spiralOrder;