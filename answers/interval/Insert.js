
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

function insert(itvls, newItvl) {    
    const res = [];
    itvls.push([Number.MAX_VALUE, Number.MAX_VALUE]);
    
    for (let i = 0; i < itvls.length; i++) {
        if (itvls[i][1] < newItvl[0]){
            res.push(itvls[i]);
        } 
        else if(itvls[i][0] <= newItvl[1]){
            newItvl = [Math.min(newItvl[0], itvls[i][0]), Math.max(newItvl[1],itvls[i][1])];
        }else {
            return [...res, newItvl, ...itvls.slice(i, itvls.length-1)];
        }
    }
  };

module.exports = insert;