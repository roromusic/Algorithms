const canFinish = require('./canFinish');

test('input of 2, [[1,0]] outputs to true', () => {
    expect(canFinish(2, [[1,0]])).toBe(true);
});

test('input of 2, [[1,0],[0,1]] outputs to false', () => {
    expect(canFinish(2, [[1,0],[0,1]])).toBe(false);
});