/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return intervals;

    const sorted = intervals.sort((a,b) => a[0] - b[0]);
    const answer = [];
    let prev = sorted[0];

    for(let i=1, len=intervals.length; i < len; i++){
        if(isOverlap(prev, sorted[i])) {
            prev = mergeIntervals(prev, sorted[i]);
        }else {
            answer.push(prev);
            prev = sorted[i];
        }
    }

    answer.push(prev);

    return answer;
};

function isOverlap(a, b) {
    return a[0] <= b[1] && b[0] <= a[1];
}

function mergeIntervals(a, b) {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

module.exports = merge;