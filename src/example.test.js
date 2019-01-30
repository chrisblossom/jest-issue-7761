const example = require('./example');

test('first', () => {
    const result = example();

    expect(result).toEqual(1);
});

