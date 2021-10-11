const { getSpeedy, getLazy } = require('../index');

getSpeedy().eat("apple");

test('Method works fine', () => {
    expect(getLazy().stomach.length).toBe(0);
});
