const power = require('./Power');

test('input of 2, 10 to equal 1024', () => {
    expect(power(2,10)).toEqual(1024);
  });

test('input of 2, -2 to equal .25', () => {
    expect(power(2, -2)).toEqual(.25);
});

test('input of -1, 2147483647 to equal -1', () => {
    expect(power(-1, 2147483647)).toEqual(-1);
});