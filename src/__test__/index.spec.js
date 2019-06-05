const romanNumerals = require('../index').romanNumerals;

describe('Roman Numerals', () => {
    test('testing 1 to I', () => {
        expect(romanNumerals(1)).toBe('I');
    });
});

