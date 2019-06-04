const romanNumerals = require('../index').romanNumerals;

describe('Roman Numerals', () => {
    test('1 to I', () => {
        expect(romanNumerals(1)).toBe('I');
    });
});

