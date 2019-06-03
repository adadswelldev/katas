const romanNumerals = require('../index').romanNumerals;

describe('Roman Numerals', () => {
    test('I to 1', () => {
        expect(romanNumerals(1)).toBe('I');
    });
});
